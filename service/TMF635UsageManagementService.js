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

exports.tMF635hubCreate = function(req, res, next) {
  /**
   * hubCreate
   * 
   *
   * hub TMF635Hub 
   * returns TMF635Hub
   **/

  console.log('tMF635hubCreate :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);


  /* matching tmfHub & isRestfulCreate */

  notificationUtils.register(req, res, next);  


};

exports.tMF635hubDelete = function(req, res, next) {
  /**
   * hubDelete
   * 
   *
   * hubId String 
   * no response value expected for this operation
   **/

  console.log('tMF635hubDelete :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);


  /* matching tmfHub & isRestfulDestroy */

  notificationUtils.unregister(req, res, next);  


};

exports.tMF635hubFind = function(req, res, next) {
  /**
   * hubFind
   * 
   *
   * returns List
   **/

  console.log('tMF635hubFind :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);


  /* matching tmfHub & isRestfulIndex */

  notificationUtils.index(req, res, next);


};

exports.tMF635hubGet = function(req, res, next) {
  /**
   * hubGet
   * 
   *
   * hubId String 
   * returns TMF635Hub
   **/

  console.log('tMF635hubGet :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);


  /* matching tmfHub & isRestfulShow */

  notificationUtils.show(req, res, next);  


};

exports.tMF635usageCreate = function(req, res, next) {
  /**
   * usageCreate
   * 
   *
   * usage TMF635Usage 
   * returns TMF635Usage
   **/

  console.log('tMF635usageCreate :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument tMF635UsageManagement */
  
  const resourceType = getResourceType(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF635usageCreate',payload))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('tMF635usageCreate',payload))
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
      console.log("tMF635usageCreate: error=" + error.toString());
      sendError(res, error);
    });



};

exports.tMF635usageDelete = function(req, res, next) {
  /**
   * usageDelete
   * 
   *
   * usageId String 
   * no response value expected for this operation
   **/

  console.log('tMF635usageDelete :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulDestroy */

  const usageId = String(req.swagger.params.usageId.value);

  const query = {
    id: usageId
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

exports.tMF635usageGet = function(req, res, next) {
  /**
   * usageGet
   * 
   *
   * usageId String 
   * fields String  (optional)
   * returns TMF635Usage
   **/

  console.log('tMF635usageGet :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulShow */

  var usageId = String(req.swagger.params.usageId.value);

  var query = mongoUtils.getMongoQuery(req);
  query.criteria.id = usageId

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
        console.log("tMF635usageGet: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF635usageGet: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF635usageSpecificationCreate = function(req, res, next) {
  /**
   * usageSpecificationCreate
   * 
   *
   * usageSpecification TMF635UsageSpecification 
   * returns TMF635UsageSpecification
   **/

  console.log('tMF635usageSpecificationCreate :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument tMF635UsageManagement */
  
  const resourceType = getResourceType(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF635usageSpecificationCreate',payload))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('tMF635usageSpecificationCreate',payload))
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
      console.log("tMF635usageSpecificationCreate: error=" + error.toString());
      sendError(res, error);
    });



};

exports.tMF635usageSpecificationDelete = function(req, res, next) {
  /**
   * usageSpecificationDelete
   * 
   *
   * usageSpecificationId String 
   * no response value expected for this operation
   **/

  console.log('tMF635usageSpecificationDelete :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulDestroy */

  const usageSpecificationId = String(req.swagger.params.usageSpecificationId.value);

  const query = {
    id: usageSpecificationId
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

exports.tMF635usageSpecificationGet = function(req, res, next) {
  /**
   * usageSpecificationGet
   * 
   *
   * usageSpecificationId String 
   * fields String  (optional)
   * returns TMF635UsageSpecification
   **/

  console.log('tMF635usageSpecificationGet :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulShow */

  var usageSpecificationId = String(req.swagger.params.usageSpecificationId.value);

  var query = mongoUtils.getMongoQuery(req);
  query.criteria.id = usageSpecificationId

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
        console.log("tMF635usageSpecificationGet: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF635usageSpecificationGet: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF635usageUpdate = function(req, res, next) {
  /**
   * usageUpdate
   * 
   *
   * usageId String 
   * usage TMF635Usage 
   * returns TMF635Usage
   **/

  console.log('tMF635usageUpdate :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulUpdate */

  const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Unable to update resource");

  const resourceType = getResourceType(req);
  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF635usageUpdate',payload))
    .then(payload => {

      const usageId = String(req.swagger.params.usageId.value);
      const query = {
       id: usageId
      };

      payload.id = query.id;

      mongoUtils.connect().then(db => {

        db.collection(resourceType)
        .findOne(query)
        .then((old) => {
          db.collection(resourceType)
          .replaceOne(query, payload)
          .then(resp => {
            if(resp.result!=undefined && resp.result.n==1) {
              sendDoc(res, 200, payload);
              notificationUtils.publish(req,payload,old);
              return;
            } else {
              return sendError(res, new TError(TErrorEnum.RESOURCE_NOT_FOUND,"Unable to update resource"));
            }
          })
          .catch((error) => sendError(res, internalError))
        })
        .catch((error) => sendError(res, TError(TErrorEnum.RESOURCE_NOT_FOUND,"No resource with given id")));
      })
      .catch(error => {
        console.log("tMF635usageUpdate: error=" + error.toString());
        sendError(res, internalError);
      });
    })
    .catch(error => {
      console.log("tMF635usageUpdate: error=" + error.toString());
      sendError(res, error);
    });




};



