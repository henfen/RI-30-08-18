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

exports.tMF679hubCreate = function(req, res, next) {
  /**
   * create hub
   *   Specific business errors for current operation will be encapsulated in  HTTP Response 422 Unprocessable entity 
   *
   * hub TMF679Hub 
   * returns TMF679Hub
   **/

  console.log('tMF679hubCreate :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);


  /* matching tmfHub & isRestfulCreate */

  notificationUtils.register(req, res, next);  


};

exports.tMF679hubDelete = function(req, res, next) {
  /**
   * delete hub
   *   Specific business errors for current operation will be encapsulated in  HTTP Response 422 Unprocessable entity 
   *
   * hubId String 
   * no response value expected for this operation
   **/

  console.log('tMF679hubDelete :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);


  /* matching tmfHub & isRestfulDestroy */

  notificationUtils.unregister(req, res, next);  


};

exports.tMF679hubFind = function(req, res, next) {
  /**
   * find hub
   *   Specific business errors for current operation will be encapsulated in  HTTP Response 422 Unprocessable entity 
   *
   * returns List
   **/

  console.log('tMF679hubFind :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);


  /* matching tmfHub & isRestfulIndex */

  notificationUtils.index(req, res, next);


};

exports.tMF679hubGet = function(req, res, next) {
  /**
   * get hub
   *   Specific business errors for current operation will be encapsulated in  HTTP Response 422 Unprocessable entity 
   *
   * hubId String 
   * returns TMF679Hub
   **/

  console.log('tMF679hubGet :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);


  /* matching tmfHub & isRestfulShow */

  notificationUtils.show(req, res, next);  


};

exports.tMF679hubPatch = function(req, res, next) {
  /**
   * patch hub
   *   Specific business errors for current operation will be encapsulated in  HTTP Response 422 Unprocessable entity 
   *
   * hubId String 
   * hub TMF679Hub 
   * returns TMF679Hub
   **/

  console.log('tMF679hubPatch :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);


  /* matching tmfHub & isRestfulPatch */

  notificationUtils.patch(req, res, next);  


};

exports.tMF679productOfferingQualificationCreate = function(req, res, next) {
  /**
   * create productOfferingQualification
   *   Specific business errors for current operation will be encapsulated in  HTTP Response 422 Unprocessable entity 
   *
   * productOfferingQualification TMF679POST_REQ_ProductOfferingQualification 
   * returns TMF679ProductOfferingQualification
   **/

  console.log('tMF679productOfferingQualificationCreate :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument tMF679ProductOfferingQualification */
  
  const resourceType = getResourceType(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF679productOfferingQualificationCreate',payload))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('tMF679productOfferingQualificationCreate',payload))
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
      console.log("tMF679productOfferingQualificationCreate: error=" + error.toString());
      sendError(res, error);
    });



};

exports.tMF679productOfferingQualificationDelete = function(req, res, next) {
  /**
   * delete productOfferingQualification
   *   Specific business errors for current operation will be encapsulated in  HTTP Response 422 Unprocessable entity 
   *
   * productOfferingQualificationId String 
   * no response value expected for this operation
   **/

  console.log('tMF679productOfferingQualificationDelete :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulDestroy */

  const productOfferingQualificationId = String(req.swagger.params.productOfferingQualificationId.value);

  const query = {
    id: productOfferingQualificationId
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

exports.tMF679productOfferingQualificationFind = function(req, res, next) {
  /**
   * find productOfferingQualification
   *   Specific business errors for current operation will be encapsulated in  HTTP Response 422 Unprocessable entity 
   *
   * fields String  (optional)
   * offset String Requested index for start of resources to be provided in response requested by client (optional)
   * limit String Requested number of resources to be provided in response requested by client (optional)
   * returns List
   **/

  console.log('tMF679productOfferingQualificationFind :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF679productOfferingQualificationFind: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF679productOfferingQualificationFind: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF679productOfferingQualificationGet = function(req, res, next) {
  /**
   * get productOfferingQualification
   *   Specific business errors for current operation will be encapsulated in  HTTP Response 422 Unprocessable entity 
   *
   * productOfferingQualificationId String 
   * returns TMF679ProductOfferingQualification
   **/

  console.log('tMF679productOfferingQualificationGet :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulShow */

  var productOfferingQualificationId = String(req.swagger.params.productOfferingQualificationId.value);

  var query = mongoUtils.getMongoQuery(req);
  query.criteria.id = productOfferingQualificationId

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
        console.log("tMF679productOfferingQualificationGet: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF679productOfferingQualificationGet: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF679productOfferingQualificationPatch = function(req, res, next) {
  /**
   * patch productOfferingQualification
   *   Specific business errors for current operation will be encapsulated in  HTTP Response 422 Unprocessable entity 
   *
   * productOfferingQualificationId String 
   * productOfferingQualification TMF679ProductOfferingQualification 
   * returns TMF679ProductOfferingQualification
   **/

  console.log('tMF679productOfferingQualificationPatch :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulPatch */

  const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Unable to update resource");

  const resourceType = getResourceType(req);

  const productOfferingQualificationId = String(req.swagger.params.productOfferingQualificationId.value);
  const query = {
   id: productOfferingQualificationId
  };

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF679productOfferingQualificationPatch',payload))
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
                  console.log("tMF679productOfferingQualificationPatch error=" + error);
                  return sendError(res, internalError);
                });
            })
            .catch((error) => {
              console.log("tMF679productOfferingQualificationPatch error=" + error);
              return sendError(res, internalError);
            })
          })
        .catch((error) => {
          console.log("tMF679productOfferingQualificationPatch error=" + error);
          return sendError(res, new TError(TErrorEnum.RESOURCE_NOT_FOUND,"No resource with given id"));
        });        
      })
      .catch((error) => {
        console.log("tMF679productOfferingQualificationPatch error=" + error);
        return sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF679productOfferingQualificationPatch error=" + error);
    return sendError(res, error);
  });




};



