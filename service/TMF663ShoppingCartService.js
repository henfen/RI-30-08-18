'use strict';

//Minimal Service with filtering (equality match only) and attribute selection
//Error Handing Need to define a global error hqndler
//Paging and Range based Iterator to be added
//Notification to be added add listener and implement hub

const util = require('util');
const uuid = require('uuid');

const mongoUtils = require('../utils/mongoUtils');
const swaggerUtils = require('../utils/swaggerUtils');
const notificationUtils = require('../utils/notificationUtils');

const {sendDoc} = require('../utils/mongoUtils');

const {setBaseProperties, traverse, 
       addHref, processCommonAttributes } = require('../utils/operationsUtils');

const {validateRequest} = require('../utils/ruleUtils');

const {processAssignmentRules} = require('../utils/operations');

const {getResourceType} = require('../utils/swaggerUtils');

const {TError, TErrorEnum, sendError} = require('../utils/errorUtils');

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

exports.tMF663createShoppingCart = function(req, res, next) {
  /**
   * Creates a 'ShoppingCart'
   *
   * shoppingCart TMF663ShoppingCart_Create The Shopping Cart to be created
   * returns TMF663ShoppingCart
   **/

  console.log('tMF663createShoppingCart :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument tMF663ShoppingCart */
  
  const resourceType = getResourceType(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF663createShoppingCart',payload))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('tMF663createShoppingCart',payload))
    .then(payload => traverse(req,resourceType,payload,[]))
    .then(payload => {

      const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Internal database error");

      mongoUtils.connect().then(db => {
        db.collection(resourceType)
          .insertOne(payload)
          .then(() => {
            sendDoc(res, 201, payload);
            notificationUtils.publish(req,payload);
          })
          .catch((error) => sendError(res, internalError))
      })
      .catch((error) => sendError(res, internalError));

    })
    .catch( error => {
      console.log("tMF663createShoppingCart: error=" + error.toString());
      sendError(res, error);
    });



};

exports.tMF663deleteShoppingCart = function(req, res, next) {
  /**
   * Deletes a 'ShoppingCart' by Id
   *
   * id String Identifier of the Shopping Cart
   * no response value expected for this operation
   **/

  console.log('tMF663deleteShoppingCart :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulDestroy */

  const id = String(req.swagger.params.id.value);

  const query = {
    id: id
  };

  const resourceType = getResourceType(req); 

  const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Internal database error");

  mongoUtils.connect().then(db => {
    db.collection(resourceType)
      .deleteOne(query)
      .then(doc => {
        if (doc.result.n == 1) {
           sendDoc(res, 204, {});
           notificationUtils.publish(req,doc);
        } else { 
           sendError(res, new TError(TErrorEnum.RESOURCE_NOT_FOUND,"No resource with given id found"));
        }
      }).catch(error => sendError(res, internalError))
  })
  .catch(error => sendError(res, internalError));




};

exports.tMF663listShoppingCart = function(req, res, next) {
  /**
   * List or find 'ShoppingCart' objects
   *
   * fields String Comma separated properties to display in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/

  console.log('tMF663listShoppingCart :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulIndex */
 
  const query = mongoUtils.getMongoQuery(req);

  const resourceType = getResourceType(req);

  const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Internal database error");
  
  // Find some documents based on criteria plus attribute selection
  mongoUtils.connect().then(db => {
    db.collection(resourceType)
      .find(query.criteria, query.options).toArray()
      .then(doc => {
        sendDoc(res, 200, doc);
      })
      .catch(error => {
        console.log("tMF663listShoppingCart: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF663listShoppingCart: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF663patchShoppingCart = function(req, res, next) {
  /**
   * Updates partially a 'ShoppingCart' by Id
   *
   * id String Identifier of the Shopping Cart
   * shoppingCart TMF663ShoppingCart_Update The Shopping Cart to be updated
   * returns TMF663ShoppingCart
   **/

  console.log('tMF663patchShoppingCart :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulPatch */

  const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Unable to update resource");

  const resourceType = getResourceType(req);

  const id = String(req.swagger.params.id.value);
  const query = {
   id: id
  };

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF663patchShoppingCart',payload))
    .then(payload => traverse(req,resourceType,payload))
    .then(payload => {

      mongoUtils.connect().then(db => {
        // first check if resource exists
        db.collection(resourceType)
        .findOne(query)
        .then(old => {
          if (old==undefined) {
            return sendError(res, new TError(TErrorEnum.RESOURCE_NOT_FOUND,"No resource with given id"));
          }
          // then update and return the complete resource
          db.collection(resourceType)
            .updateOne(query, {$set: payload}, {upsert: false})
            .then(() => {
              db.collection(resourceType).findOne(query)
                .then((doc) => {
                  sendDoc(res, 201, doc);
                  notificationUtils.publish(req,doc,old);
                })
                .catch((error) => {
                  console.log("tMF663patchShoppingCart error=" + error);
                  return sendError(res, internalError);
                });
            })
            .catch((error) => {
              console.log("tMF663patchShoppingCart error=" + error);
              return sendError(res, internalError);
            })
          })
        .catch((error) => {
          console.log("tMF663patchShoppingCart error=" + error);
          return sendError(res, new TError(TErrorEnum.RESOURCE_NOT_FOUND,"No resource with given id"));
        });        
      })
      .catch((error) => {
        console.log("tMF663patchShoppingCart error=" + error);
        return sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF663patchShoppingCart error=" + error);
    return sendError(res, error);
  });




};

exports.tMF663registerListener = function(req, res, next) {
  /**
   * Register a listener
   * Sets the communication endpoint address the service instance must use to deliver information about its health state, execution state, failures and metrics.
   *
   * data TMF663EventSubscriptionInput Data containing the callback endpoint to deliver the information
   * returns TMF663EventSubscription
   **/

  console.log('tMF663registerListener :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);


  /* matching tmfHub & isRestfulCreate */

  notificationUtils.register(req, res, next);  


};

exports.tMF663retrieveShoppingCart = function(req, res, next) {
  /**
   * Retrieves a 'ShoppingCart' by Id
   *
   * id String Identifier of the Shopping Cart
   * returns List
   **/

  console.log('tMF663retrieveShoppingCart :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulShow */

  var id = String(req.swagger.params.id.value);

  var query = mongoUtils.getMongoQuery(req);
  query.criteria.id = id

  const resourceType = getResourceType(req); 

  const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Internal database error");

  mongoUtils.connect().then(db => {
    db.collection(resourceType)
      .findOne(query.criteria, query.options)
      .then(doc => {
        if(doc) {
          sendDoc(res, 200, doc)
        } else {
          sendError(res, new TError(TErrorEnum.RESOURCE_NOT_FOUND,"No resource with given id found"));
        }
      })
      .catch(error => {
        console.log("tMF663retrieveShoppingCart: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF663retrieveShoppingCart: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF663unregisterListener = function(req, res, next) {
  /**
   * Unregister a listener
   * Resets the communication endpoint address the service instance must use to deliver information about its health state, execution state, failures and metrics.
   *
   * id String The id of the registered listener
   * no response value expected for this operation
   **/

  console.log('tMF663unregisterListener :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);


  /* matching tmfHub & isRestfulDestroy */

  notificationUtils.unregister(req, res, next);  


};



