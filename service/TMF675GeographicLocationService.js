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

exports.tMF675geographicLocationFind = function(req, res, next) {
  /**
   * List geographic locations
   * This operation list geographic location entities. Attribute selection is enabled for all first level attributes.  Filtering may be available depending on the compliance level supported by an implementation.  Specific business errors for current operation will be encapsulated in  HTTP Response 422 Unprocessable entity 
   *
   * fields String Attribute selection (optional)
   * offset Integer Requested index to start of resources to be provided in response requested by client (optional)
   * limit Integer Requested number of resources to be provided in response requested by client (optional)
   * returns List
   **/

  console.log('tMF675geographicLocationFind :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF675geographicLocationFind: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF675geographicLocationFind: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF675geographicLocationGet = function(req, res, next) {
  /**
   * Retrieve a geographic location
   * This operation retrieves a geographic location entity. Attribute selection is enabled for all first level attributes. Filtering on sub-resources may be available depending on the compliance level supported by an implementation.  Specific business errors for current operation will be encapsulated in  HTTP Response 422 Unprocessable entity 
   *
   * geographicLocationId String Unique identifier of the geographic location
   * fields String Attribute selection (optional)
   * returns TMF675GeographicLocation
   **/

  console.log('tMF675geographicLocationGet :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulShow */

  var geographicLocationId = String(req.swagger.params.geographicLocationId.value);

  var query = mongoUtils.getMongoQuery(req);
  query.criteria.id = geographicLocationId

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
        console.log("tMF675geographicLocationGet: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF675geographicLocationGet: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF675hubCreate = function(req, res, next) {
  /**
   * Register a listener
   * Sets the communication endpoint address the service instance must use to deliver information about its health state, execution state, failures and metrics  Specific business errors for current operation will be encapsulated in  HTTP Response 422 Unprocessable entity 
   *
   * data TMF675HubInput 
   * returns TMF675Hub
   **/

  console.log('tMF675hubCreate :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);


  /* matching tmfHub & isRestfulCreate */

  notificationUtils.register(req, res, next);  


};

exports.tMF675hubDelete = function(req, res, next) {
  /**
   * Unregister a listener
   * Clears the communication endpoint address that was set by creating the Hub  Specific business errors for current operation will be encapsulated in  HTTP Response 422 Unprocessable entity 
   *
   * hubId String Unique identifier of the Hub
   * no response value expected for this operation
   **/

  console.log('tMF675hubDelete :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);


  /* matching tmfHub & isRestfulDestroy */

  notificationUtils.unregister(req, res, next);  


};

exports.tMF675retrieveGeographicLocationCreate = function(req, res, next) {
  /**
   * Create a retrieve geographic location entity
   * This operation creates a retrieve geographic location entity.  Specific business errors for current operation will be encapsulated in  HTTP Response 422 Unprocessable entity 
   *
   * retrieveGeographicLocation TMF675POST_REQ_RetrieveGeographicLocation 
   * returns TMF675RetrieveGeographicLocation
   **/

  console.log('tMF675retrieveGeographicLocationCreate :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument tMF675GeographicLocation */
  
  const resourceType = getResourceType(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF675retrieveGeographicLocationCreate',payload))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('tMF675retrieveGeographicLocationCreate',payload))
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
      console.log("tMF675retrieveGeographicLocationCreate: error=" + error.toString());
      sendError(res, error);
    });



};

exports.tMF675retrieveGeographicLocationFind = function(req, res, next) {
  /**
   * List retrieve geographic location entities
   * This operation list retrieveGeographicLocation entities. Attribute selection is enabled for all first level attributes. Filtering may be available depending on the compliance level supported by an implementation.  Specific business errors for current operation will be encapsulated in  HTTP Response 422 Unprocessable entity 
   *
   * fields String Attribute selection (optional)
   * offset Integer Requested index to start of resources to be provided in response requested by client (optional)
   * limit Integer Requested number of resources to be provided in response requested by client (optional)
   * returns List
   **/

  console.log('tMF675retrieveGeographicLocationFind :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF675retrieveGeographicLocationFind: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF675retrieveGeographicLocationFind: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF675retrieveGeographicLocationGet = function(req, res, next) {
  /**
   * Retrieve a retrieve geographic location entity
   * This operation retrieves a retrieve geographic location entity. Attribute selection is enabled for all first level attributes. Filtering on sub-resources may be available depending on the compliance level supported by an implementation.  Specific business errors for current operation will be encapsulated in  HTTP Response 422 Unprocessable entity 
   *
   * retrieveGeographicLocationId String Unique identifier of the retrieve geographic location task
   * fields String Attribute selection (optional)
   * returns TMF675RetrieveGeographicLocation
   **/

  console.log('tMF675retrieveGeographicLocationGet :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulShow */

  var retrieveGeographicLocationId = String(req.swagger.params.retrieveGeographicLocationId.value);

  var query = mongoUtils.getMongoQuery(req);
  query.criteria.id = retrieveGeographicLocationId

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
        console.log("tMF675retrieveGeographicLocationGet: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF675retrieveGeographicLocationGet: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF675retrieveLocationRelationCreate = function(req, res, next) {
  /**
   * Create a retrieve location relation entity
   * This operation creates a retrieve location relation entity  Specific business errors for current operation will be encapsulated in  HTTP Response 422 Unprocessable entity 
   *
   * retrieveLocationRelation TMF675POST_REQ_RetrieveLocationRelation 
   * returns TMF675RetrieveLocationRelation
   **/

  console.log('tMF675retrieveLocationRelationCreate :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument tMF675GeographicLocation */
  
  const resourceType = getResourceType(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF675retrieveLocationRelationCreate',payload))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('tMF675retrieveLocationRelationCreate',payload))
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
      console.log("tMF675retrieveLocationRelationCreate: error=" + error.toString());
      sendError(res, error);
    });



};

exports.tMF675retrieveLocationRelationFind = function(req, res, next) {
  /**
   * List retrieve location relation entities
   * This operation list retrieve location relation entities. Attribute selection is enabled for all first level attributes. Filtering may be available depending on the compliance level supported by an implementation.  Specific business errors for current operation will be encapsulated in  HTTP Response 422 Unprocessable entity 
   *
   * fields String Attribute selection (optional)
   * offset Integer Requested index to start of resources to be provided in response requested by client (optional)
   * limit Integer Requested number of resources to be provided in response requested by client (optional)
   * returns List
   **/

  console.log('tMF675retrieveLocationRelationFind :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF675retrieveLocationRelationFind: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF675retrieveLocationRelationFind: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF675retrieveLocationRelationGet = function(req, res, next) {
  /**
   * Retrieve a retrieve location relation entity
   * This operation retrieves a retrieve location relation entity. Attribute selection is enabled for all first level attributes. Filtering on sub-resources may be available depending on the compliance level supported by an implementation.  Specific business errors for current operation will be encapsulated in  HTTP Response 422 Unprocessable entity 
   *
   * retrieveLocationRelationId String Unique identifier of the retrieve location relation task
   * fields String Attribute selection (optional)
   * returns TMF675RetrieveLocationRelation
   **/

  console.log('tMF675retrieveLocationRelationGet :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulShow */

  var retrieveLocationRelationId = String(req.swagger.params.retrieveLocationRelationId.value);

  var query = mongoUtils.getMongoQuery(req);
  query.criteria.id = retrieveLocationRelationId

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
        console.log("tMF675retrieveLocationRelationGet: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF675retrieveLocationRelationGet: error=" + error);
    sendError(res, internalError);
  });




};



