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

exports.tMF638hubCreate = function(req, res, next) {
  /**
   * create hub
   *   Specific business errors for current operation will be encapsulated in  HTTP Response 422 Unprocessable entity 
   *
   * hub TMF638HubInput 
   * returns TMF638Hub
   **/

  console.log('tMF638hubCreate :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);


  /* matching tmfHub & isRestfulCreate */

  notificationUtils.register(req, res, next);  


};

exports.tMF638hubDelete = function(req, res, next) {
  /**
   * delete hub
   *   Specific business errors for current operation will be encapsulated in  HTTP Response 422 Unprocessable entity 
   *
   * hubId String 
   * no response value expected for this operation
   **/

  console.log('tMF638hubDelete :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);


  /* matching tmfHub & isRestfulDestroy */

  notificationUtils.unregister(req, res, next);  


};

exports.tMF638hubFind = function(req, res, next) {
  /**
   * find hub
   *   Specific business errors for current operation will be encapsulated in  HTTP Response 422 Unprocessable entity 
   *
   * fields String  (optional)
   * returns List
   **/

  console.log('tMF638hubFind :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);


  /* matching tmfHub & isRestfulIndex */

  notificationUtils.index(req, res, next);


};

exports.tMF638hubGet = function(req, res, next) {
  /**
   * get hub
   *   Specific business errors for current operation will be encapsulated in  HTTP Response 422 Unprocessable entity 
   *
   * hubId String 
   * fields String  (optional)
   * returns TMF638Hub
   **/

  console.log('tMF638hubGet :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);


  /* matching tmfHub & isRestfulShow */

  notificationUtils.show(req, res, next);  


};

exports.tMF638hubUpdate = function(req, res, next) {
  /**
   * update hub
   *   Specific business errors for current operation will be encapsulated in  HTTP Response 422 Unprocessable entity 
   *
   * hubId String 
   * hub TMF638Hub 
   * returns TMF638Hub
   **/

  console.log('tMF638hubUpdate :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);


  /* matching tmfHub & isRestfulUpdate */

  notificationUtils.update(req, res, next);  


};

exports.tMF638serviceCreate = function(req, res, next) {
  /**
   * Create a service
   * This operation creates a service entity. Note: this operation is available only to ADMIN API users The specification document provides the list of mandatory and non mandatory attributes when creating a Service, including any possible rule conditions and applicable default values.  Specific business errors for current operation will be encapsulated in  HTTP Response 422 Unprocessable entity 
   *
   * service TMF638Service 
   * returns TMF638Service
   **/

  console.log('tMF638serviceCreate :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument tMF638ServiceInventory */
  
  const resourceType = getResourceType(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF638serviceCreate',payload))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('tMF638serviceCreate',payload))
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
      console.log("tMF638serviceCreate: error=" + error.toString());
      sendError(res, error);
    });



};

exports.tMF638serviceDelete = function(req, res, next) {
  /**
   * Delete a service
   * This operation deletes a service entity. Note: this operation is available only to ADMIN API users.  Specific business errors for current operation will be encapsulated in  HTTP Response 422 Unprocessable entity 
   *
   * id String 
   * no response value expected for this operation
   **/

  console.log('tMF638serviceDelete :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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

exports.tMF638serviceFind = function(req, res, next) {
  /**
   * List services
   * This operation list service entities.  Attribute selection is enabled for all first level attributes.  Filtering may be available depending on the compliance level supported by an implementation.  Specific business errors for current operation will be encapsulated in  HTTP Response 422 Unprocessable entity 
   *
   * fields String Attribute selection (optional)
   * returns List
   **/

  console.log('tMF638serviceFind :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF638serviceFind: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF638serviceFind: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF638serviceGet = function(req, res, next) {
  /**
   * Retrieve a service
   * This operation retrieves a service entity.  Attribute selection is enabled for all first level attributes.  Specific business errors for current operation will be encapsulated in  HTTP Response 422 Unprocessable entity 
   *
   * id String 
   * fields String Attribute selection (optional)
   * returns TMF638Service
   **/

  console.log('tMF638serviceGet :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF638serviceGet: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF638serviceGet: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF638servicePatch = function(req, res, next) {
  /**
   * Patch a service
   * This operation allows partial updates of a service entity. Support of json/merge (https://tools.ietf.org/html/rfc7386) is mandatory, support of json/patch (http://tools.ietf.org/html/rfc5789) is optional. Note: this operation is available only to ADMIN API users. The specification document provides the list of patchable and non patchable attributes, including constraint rules on their usage.  Specific business errors for current operation will be encapsulated in  HTTP Response 422 Unprocessable entity 
   *
   * id String 
   * service TMF638Service 
   * returns TMF638Service
   **/

  console.log('tMF638servicePatch :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulPatch */

  const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Unable to update resource");

  const resourceType = getResourceType(req);

  const id = String(req.swagger.params.id.value);
  const query = {
   id: id
  };

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF638servicePatch',payload))
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
                  console.log("tMF638servicePatch error=" + error);
                  return sendError(res, internalError);
                });
            })
            .catch((error) => {
              console.log("tMF638servicePatch error=" + error);
              return sendError(res, internalError);
            })
          })
        .catch((error) => {
          console.log("tMF638servicePatch error=" + error);
          return sendError(res, new TError(TErrorEnum.RESOURCE_NOT_FOUND,"No resource with given id"));
        });        
      })
      .catch((error) => {
        console.log("tMF638servicePatch error=" + error);
        return sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF638servicePatch error=" + error);
    return sendError(res, error);
  });




};



