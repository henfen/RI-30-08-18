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

exports.tMF677hubCreate = function(req, res, next) {
  /**
   * Register a listener
   * Sets the communication endpoint address the service instance must use to deliver information about its health state, execution state, failures and metrics  Specific business errors for current operation will be encapsulated in  HTTP Response 422 Unprocessable entity 
   *
   * data TMF677HubInput Data containing the callback endpoint to deliver the information
   * returns TMF677Hub
   **/

  console.log('tMF677hubCreate :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);


  /* matching tmfHub & isRestfulCreate */

  notificationUtils.register(req, res, next);  


};

exports.tMF677hubDelete = function(req, res, next) {
  /**
   * Unregister listener
   * Clears the communication endpoint address that was set by creating the Hub  Specific business errors for current operation will be encapsulated in  HTTP Response 422 Unprocessable entity 
   *
   * hubId String 
   * no response value expected for this operation
   **/

  console.log('tMF677hubDelete :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);


  /* matching tmfHub & isRestfulDestroy */

  notificationUtils.unregister(req, res, next);  


};

exports.tMF677usageConsumptionReportDelete = function(req, res, next) {
  /**
   * Delete an existing usage consumption report
   * This operation deletes a usage report entity. Note: this operation is not available only to ADMIN API users  Specific business errors for current operation will be encapsulated in  HTTP Response 422 Unprocessable entity 
   *
   * id String Unique identifier of the usage consumption report
   * no response value expected for this operation
   **/

  console.log('tMF677usageConsumptionReportDelete :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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

exports.tMF677usageConsumptionReportFind = function(req, res, next) {
  /**
   * Query the calculation of an usage consumption report in synchronous mode
   * This operation is used to request the calculation of a new usage consumption report for a specific product identified by a msisdn number for example.  Attribute selection is enabled for all first level attributes. Filtering may be available depending on the compliance level supported by an implementation.  Specific business errors for current operation will be encapsulated in  HTTP Response 422 Unprocessable entity 
   *
   * fields String Attribute selection (optional)
   * returns List
   **/

  console.log('tMF677usageConsumptionReportFind :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF677usageConsumptionReportFind: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF677usageConsumptionReportFind: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF677usageConsumptionReportGet = function(req, res, next) {
  /**
   * Retrieve an existing usage consumption report
   * This operation retrieves an usage report entity. This operation could be used only if the server has saved the usage consumption report on its database after calculation. Attribute selection is enabled for all first level attributes. Filtering on sub-resources may be available depending on the compliance level supported by an implementation.  Specific business errors for current operation will be encapsulated in  HTTP Response 422 Unprocessable entity 
   *
   * id String Unique identifier of the usage consumption report
   * fields String Attribute selection (optional)
   * returns TMF677UsageConsumptionReport
   **/

  console.log('tMF677usageConsumptionReportGet :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF677usageConsumptionReportGet: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF677usageConsumptionReportGet: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF677usageConsumptionReportRequestCreate = function(req, res, next) {
  /**
   * Create an usage consumption report request
   * This operation creates an usage consumption report request entity. This operation is used by the requester when the server couldn’t calculate and generate the report in synchronous mode.  After, the API requester could follow the process with a GET operation on this same resource retrieving the status of the request. The server could also use the notification pattern to inform the API requester that the usage consumption report is available.  Specific business errors for current operation will be encapsulated in  HTTP Response 422 Unprocessable entity 
   *
   * usageConsumptionReportRequest TMF677UsageConsumptionReportRequestIn 
   * returns TMF677UsageConsumptionReportRequest
   **/

  console.log('tMF677usageConsumptionReportRequestCreate :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument tMF677UsageConsumption */
  
  const resourceType = getResourceType(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF677usageConsumptionReportRequestCreate',payload))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('tMF677usageConsumptionReportRequestCreate',payload))
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
      console.log("tMF677usageConsumptionReportRequestCreate: error=" + error.toString());
      sendError(res, error);
    });



};

exports.tMF677usageConsumptionReportRequestDelete = function(req, res, next) {
  /**
   * Delete an usage consumption report request
   * This operation deletes an usage consumption report request entity.  Note: this operation is not available only to ADMIN API users  Specific business errors for current operation will be encapsulated in  HTTP Response 422 Unprocessable entity 
   *
   * id String 
   * no response value expected for this operation
   **/

  console.log('tMF677usageConsumptionReportRequestDelete :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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

exports.tMF677usageConsumptionReportRequestFind = function(req, res, next) {
  /**
   * List usage consumption report requests
   * This operation is used to retrieve usage consumption report requests corresponding to search criteria like a specific product identified by a msisdn number for example.  Attribute selection is enabled for all attributes. Filtering may be available depending on the compliance level supported by an implementation.  Specific business errors for current operation will be encapsulated in  HTTP Response 422 Unprocessable entity 
   *
   * fields String Attribute selection (optional)
   * offset Integer Requested index for start of resources to be provided in response requested by client (optional)
   * limit Integer Requested number of resources  to be provided in response requested by client (optional)
   * returns List
   **/

  console.log('tMF677usageConsumptionReportRequestFind :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF677usageConsumptionReportRequestFind: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF677usageConsumptionReportRequestFind: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF677usageConsumptionReportRequestGet = function(req, res, next) {
  /**
   * Retrieve an usage consumption report request
   * This operation retrieves an usage consumption report request entity using its unique id. Attribute selection is enabled for all attributes. Filtering may be available depending on the compliance level supported by an implementation.  Specific business errors for current operation will be encapsulated in  HTTP Response 422 Unprocessable entity 
   *
   * id String 
   * fields String Attribute selection (optional)
   * returns TMF677UsageConsumptionReportRequest
   **/

  console.log('tMF677usageConsumptionReportRequestGet :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF677usageConsumptionReportRequestGet: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF677usageConsumptionReportRequestGet: error=" + error);
    sendError(res, internalError);
  });




};



