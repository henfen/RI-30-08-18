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

exports.tMF641hubCreate = function(req, res, next) {
  /**
   * create hub
   *   Specific business errors for current operation will be encapsulated in  HTTP Response 422 Unprocessable entity 
   *
   * hub TMF641HubInput 
   * returns TMF641Hub
   **/

  console.log('tMF641hubCreate :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);


  /* matching tmfHub & isRestfulCreate */

  notificationUtils.register(req, res, next);  


};

exports.tMF641hubDelete = function(req, res, next) {
  /**
   * delete hub
   *   Specific business errors for current operation will be encapsulated in  HTTP Response 422 Unprocessable entity 
   *
   * hubId String 
   * no response value expected for this operation
   **/

  console.log('tMF641hubDelete :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);


  /* matching tmfHub & isRestfulDestroy */

  notificationUtils.unregister(req, res, next);  


};

exports.tMF641hubFind = function(req, res, next) {
  /**
   * find hub
   *   Specific business errors for current operation will be encapsulated in  HTTP Response 422 Unprocessable entity 
   *
   * fields String  (optional)
   * returns List
   **/

  console.log('tMF641hubFind :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);


  /* matching tmfHub & isRestfulIndex */

  notificationUtils.index(req, res, next);


};

exports.tMF641hubGet = function(req, res, next) {
  /**
   * get hub
   *   Specific business errors for current operation will be encapsulated in  HTTP Response 422 Unprocessable entity 
   *
   * hubId String 
   * fields String  (optional)
   * returns TMF641Hub
   **/

  console.log('tMF641hubGet :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);


  /* matching tmfHub & isRestfulShow */

  notificationUtils.show(req, res, next);  


};

exports.tMF641hubUpdate = function(req, res, next) {
  /**
   * update hub
   *   Specific business errors for current operation will be encapsulated in  HTTP Response 422 Unprocessable entity 
   *
   * hubId String 
   * hub TMF641Hub 
   * returns TMF641Hub
   **/

  console.log('tMF641hubUpdate :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);


  /* matching tmfHub & isRestfulUpdate */

  notificationUtils.update(req, res, next);  


};

exports.tMF641serviceOrderCreate = function(req, res, next) {
  /**
   * Create a service order
   * This operation creates a service order entity. The specification document provides the list of mandatory and non mandatory attributes when creating a ServiceOrder, including any possible rule conditions and applicable default values. POST should be used without specifying the id and the href, the Service Order Management system is in charge of generating the id + href for the ServiceOrder.  Specific business errors for current operation will be encapsulated in  HTTP Response 422 Unprocessable entity 
   *
   * serviceOrder TMF641POSTReqServiceOrder 
   * returns TMF641ServiceOrder
   **/

  console.log('tMF641serviceOrderCreate :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument tMF641ServiceOrder */
  
  const resourceType = getResourceType(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF641serviceOrderCreate',payload))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('tMF641serviceOrderCreate',payload))
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
      console.log("tMF641serviceOrderCreate: error=" + error.toString());
      sendError(res, error);
    });



};

exports.tMF641serviceOrderDelete = function(req, res, next) {
  /**
   * Delete a service order
   * This operation deletes a service order entity. This operation is available only to Admin API users.  Specific business errors for current operation will be encapsulated in  HTTP Response 422 Unprocessable entity 
   *
   * id String 
   * no response value expected for this operation
   **/

  console.log('tMF641serviceOrderDelete :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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

exports.tMF641serviceOrderFind = function(req, res, next) {
  /**
   * List service orders
   * Retreive and list service order entities according to given criteria. Attribute selection is enabled for all first level attributes. Filtering may be available depending on the compliance level supported by an implementation. Providing filtering criteria is mandatory to avoid too many answers retrieved  Specific business errors for current operation will be encapsulated in  HTTP Response 422 Unprocessable entity 
   *
   * state String Example of filtering attribute that can be used (optional)
   * orderDate String Example of filtering attribute that can be used (optional)
   * relatedPartyId String Example of filtering attribute that can be used (optional)
   * relatedPartyRole String Example of filtering attribute that can be used (optional)
   * fields String Attribute selection (optional)
   * offset String Requested index for start of resources to be provided in response requested by client (optional)
   * limit String Requested number of resources to be provided in response requested by client (optional)
   * returns List
   **/

  console.log('tMF641serviceOrderFind :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF641serviceOrderFind: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF641serviceOrderFind: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF641serviceOrderGet = function(req, res, next) {
  /**
   * Retrieve a service order
   * This operation retrieves a service order entity.  Attribute selection is enabled for all first level attributes.  Specific business errors for current operation will be encapsulated in  HTTP Response 422 Unprocessable entity 
   *
   * id String 
   * fields String Attribute selection (optional)
   * returns TMF641ServiceOrder
   **/

  console.log('tMF641serviceOrderGet :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF641serviceOrderGet: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF641serviceOrderGet: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF641serviceOrderPatch = function(req, res, next) {
  /**
   * Patch a service order
   * This operation allows partial updates of a service order entity. Support of json/merge (https://tools.ietf.org/html/rfc7386) is mandatory, support of json/patch (http://tools.ietf.org/html/rfc5789) is optional.  The  specification document provides the list of patchable and non patchable attributes, including constraint rules on their usage.  Specific business errors for current operation will be encapsulated in  HTTP Response 422 Unprocessable entity 
   *
   * id String 
   * serviceOrder TMF641ServiceOrder 
   * returns TMF641ServiceOrder
   **/

  console.log('tMF641serviceOrderPatch :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulPatch */

  const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Unable to update resource");

  const resourceType = getResourceType(req);

  const id = String(req.swagger.params.id.value);
  const query = {
   id: id
  };

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF641serviceOrderPatch',payload))
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
                  console.log("tMF641serviceOrderPatch error=" + error);
                  return sendError(res, internalError);
                });
            })
            .catch((error) => {
              console.log("tMF641serviceOrderPatch error=" + error);
              return sendError(res, internalError);
            })
          })
        .catch((error) => {
          console.log("tMF641serviceOrderPatch error=" + error);
          return sendError(res, new TError(TErrorEnum.RESOURCE_NOT_FOUND,"No resource with given id"));
        });        
      })
      .catch((error) => {
        console.log("tMF641serviceOrderPatch error=" + error);
        return sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF641serviceOrderPatch error=" + error);
    return sendError(res, error);
  });




};



