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

exports.tMF673areaFind = function(req, res, next) {
  /**
   * List areas
   * This operation is the first step of an address completion process, allowing to retrieve geographic areas Step 1: I look for a geographic area (city, locality, district, etc.) using its name. Filtering is allowed on all attributes.   Attribute selection is possible for all attributes.  Specific business errors for current operation will be encapsulated in  HTTP Response 422 Unprocessable entity 
   *
   * fields String Attribute selection (optional)
   * fuzzy String Can be used for approximate searches (sounds like, etc.) (optional)
   * name String Name of the area (optional)
   * type String Area type (optional)
   * offset Integer Requested index for start of resources to be provided in response requested by client (optional)
   * limit Integer Requested number of resources to be provided in response requested by client (optional)
   * returns List
   **/

  console.log('tMF673areaFind :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF673areaFind: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF673areaFind: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF673geographicAddressFind = function(req, res, next) {
  /**
   * List geographic addresses
   * This operation is used to retrieve geographic addresses corresponding to search criteria. Filtering is allowed on all attributes. See example below. Attribute selection is possible for all attributes. Providing filtering criteria is mandatory to avoid too many answers retrieved.  Specific business errors for current operation will be encapsulated in  HTTP Response 422 Unprocessable entity 
   *
   * fields String Attribute selection (optional)
   * offset String Requested index for start of resources to be provided in response requested by client (optional)
   * limit String Requested number of resources to be provided in response requested by client (optional)
   * returns List
   **/

  console.log('tMF673geographicAddressFind :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF673geographicAddressFind: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF673geographicAddressFind: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF673geographicAddressGet = function(req, res, next) {
  /**
   * Retrieve a geographic address
   * Retrieves a geographic address using its unique ID. This ID should be retrieve either using the address completion process (cf. completion), or in another API of the ecosystem (party, appointment, etc.) Attribute selection is enabled for all first level attributes. Filtering on sub-resources may be available depending on the compliance level supported by an implementation  Specific business errors for current operation will be encapsulated in  HTTP Response 422 Unprocessable entity 
   *
   * geographicAddressId String Unique identifier of the geographic address
   * fields String Attribute selection (optional)
   * returns TMF673GeographicAddress
   **/

  console.log('tMF673geographicAddressGet :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulShow */

  var geographicAddressId = String(req.swagger.params.geographicAddressId.value);

  var query = mongoUtils.getMongoQuery(req);
  query.criteria.id = geographicAddressId

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
        console.log("tMF673geographicAddressGet: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF673geographicAddressGet: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF673geographicAddressValidationCreate = function(req, res, next) {
  /**
   * Create a geographic address validation request
   * This operation creates a geographic address validation request.  Specific business errors for current operation will be encapsulated in  HTTP Response 422 Unprocessable entity 
   *
   * addressValidationRequest TMF673GeographicAddressValidationRequest 
   * returns TMF673GeographicAddressValidation
   **/

  console.log('tMF673geographicAddressValidationCreate :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument tMF673GeographicAddress */
  
  const resourceType = getResourceType(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF673geographicAddressValidationCreate',payload))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('tMF673geographicAddressValidationCreate',payload))
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
      console.log("tMF673geographicAddressValidationCreate: error=" + error.toString());
      sendError(res, error);
    });



};

exports.tMF673geographicAddressValidationDelete = function(req, res, next) {
  /**
   * Delete a geographic address validation request
   * This operation allows to delete an existing address validation request. Note: this operation is available only to ADMIN API users  Specific business errors for current operation will be encapsulated in  HTTP Response 422 Unprocessable entity 
   *
   * geographicAddressValidationId String Unique identifier of the geographic address validation
   * no response value expected for this operation
   **/

  console.log('tMF673geographicAddressValidationDelete :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulDestroy */

  const geographicAddressValidationId = String(req.swagger.params.geographicAddressValidationId.value);

  const query = {
    id: geographicAddressValidationId
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

exports.tMF673geographicAddressValidationFind = function(req, res, next) {
  /**
   * List geographic address validation requests
   * This operation retrieves geographic address validation entities. Attribute selection is enabled for all first level attributes. Filtering on sub-resources may be available depending on the compliance level supported by an implementation.  Specific business errors for current operation will be encapsulated in  HTTP Response 422 Unprocessable entity 
   *
   * fields String Attribute selection (optional)
   * offset String Requested index for start of resources to be provided in response requested by client (optional)
   * limit String Requested number of resources to be provided in response requested by client (optional)
   * returns List
   **/

  console.log('tMF673geographicAddressValidationFind :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF673geographicAddressValidationFind: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF673geographicAddressValidationFind: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF673geographicAddressValidationGet = function(req, res, next) {
  /**
   * Retrieve a geographic address validation request
   * This operation allows to retrieve an existing geographic address validation entity  using its Id. Attribute selection is enabled for all first level attributes. Filtering on sub-resources may be available depending on the compliance level supported by an implementation.  Specific business errors for current operation will be encapsulated in  HTTP Response 422 Unprocessable entity 
   *
   * geographicAddressValidationId String Unique identifier of the geographic address validation
   * fields String Attribute selection (optional)
   * returns TMF673GeographicAddressValidation
   **/

  console.log('tMF673geographicAddressValidationGet :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulShow */

  var geographicAddressValidationId = String(req.swagger.params.geographicAddressValidationId.value);

  var query = mongoUtils.getMongoQuery(req);
  query.criteria.id = geographicAddressValidationId

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
        console.log("tMF673geographicAddressValidationGet: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF673geographicAddressValidationGet: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF673geographicAddressValidationPatch = function(req, res, next) {
  /**
   * Update partially a geographic address validation request
   * This operation allows partial updates of an address validation entity. Note: this operation is available only to ADMIN API users.  Specific business errors for current operation will be encapsulated in  HTTP Response 422 Unprocessable entity 
   *
   * geographicAddressValidationId String Unique identifier of the geographic address validation
   * addressValidation TMF673GeographicAddressValidation 
   * returns TMF673GeographicAddressValidation
   **/

  console.log('tMF673geographicAddressValidationPatch :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulPatch */

  const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Unable to update resource");

  const resourceType = getResourceType(req);

  const geographicAddressValidationId = String(req.swagger.params.geographicAddressValidationId.value);
  const query = {
   id: geographicAddressValidationId
  };

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF673geographicAddressValidationPatch',payload))
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
                  console.log("tMF673geographicAddressValidationPatch error=" + error);
                  return sendError(res, internalError);
                });
            })
            .catch((error) => {
              console.log("tMF673geographicAddressValidationPatch error=" + error);
              return sendError(res, internalError);
            })
          })
        .catch((error) => {
          console.log("tMF673geographicAddressValidationPatch error=" + error);
          return sendError(res, new TError(TErrorEnum.RESOURCE_NOT_FOUND,"No resource with given id"));
        });        
      })
      .catch((error) => {
        console.log("tMF673geographicAddressValidationPatch error=" + error);
        return sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF673geographicAddressValidationPatch error=" + error);
    return sendError(res, error);
  });




};

exports.tMF673geographicSubAddressFind = function(req, res, next) {
  /**
   * List subaddresses of a geographic address
   * This operation can be used to retrieve sub-addresses of a geographic address.  Specific business errors for current operation will be encapsulated in  HTTP Response 422 Unprocessable entity 
   *
   * geographicAddressId String Unique identifier of the geographic address
   * fields String Attribute selection (optional)
   * returns List
   **/

  console.log('tMF673geographicSubAddressFind :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF673geographicSubAddressFind: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF673geographicSubAddressFind: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF673geographicSubAddressGet = function(req, res, next) {
  /**
   * Retrieve a sub-address of a geographic address
   * This operation can be used to retrieve a sub-address of a geographic address  Specific business errors for current operation will be encapsulated in  HTTP Response 422 Unprocessable entity 
   *
   * geographicAddressId String Unique identifier of the geographic address
   * geographicSubAddressId String Unique identifier of the sub-address
   * fields String Attribute selection (optional)
   * returns TMF673GeographicSubAddress
   **/

  console.log('tMF673geographicSubAddressGet :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulShow */

  var geographicSubAddressId = String(req.swagger.params.geographicSubAddressId.value);

  var query = mongoUtils.getMongoQuery(req);
  query.criteria.id = geographicSubAddressId

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
        console.log("tMF673geographicSubAddressGet: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF673geographicSubAddressGet: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF673hubCreate = function(req, res, next) {
  /**
   * Register a listener
   * Sets the communication endpoint address the service instance must use to deliver information about its health state, execution state, failures and metrics  Specific business errors for current operation will be encapsulated in  HTTP Response 422 Unprocessable entity 
   *
   * data TMF673Hub 
   * returns TMF673Hub
   **/

  console.log('tMF673hubCreate :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);


  /* matching tmfHub & isRestfulCreate */

  notificationUtils.register(req, res, next);  


};

exports.tMF673hubDelete = function(req, res, next) {
  /**
   * Unregister a listener
   * Clears the communication endpoint address that was set by creating the Hub.  Specific business errors for current operation will be encapsulated in  HTTP Response 422 Unprocessable entity 
   *
   * hubId String Unique identifier of the hub
   * no response value expected for this operation
   **/

  console.log('tMF673hubDelete :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);


  /* matching tmfHub & isRestfulDestroy */

  notificationUtils.unregister(req, res, next);  


};

exports.tMF673streetFind = function(req, res, next) {
  /**
   * List streets
   * This operation is the second step of an address completion process, allowing to retrieve streets Step 2: I look for the streets inside this geographic area. Filtering is allowed on all attributes. Attribute selection is possible for all attributes.  Specific business errors for current operation will be encapsulated in  HTTP Response 422 Unprocessable entity 
   *
   * area.id String Unique identifier of the area (optional)
   * fuzzy String Can be used for approximate searches (sounds like, etc.) (optional)
   * fields String Attribute selection (optional)
   * offset Integer Requested index for start of resources to be provided in response requested by client (optional)
   * limit Integer Requested number of resources to be provided in response requested by client (optional)
   * returns List
   **/

  console.log('tMF673streetFind :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF673streetFind: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF673streetFind: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF673streetSegmentFind = function(req, res, next) {
  /**
   * List street segments
   * This operation is the last step of an address completion process, allowing to retrieve numbers in a street Step 3: I get all the street segments (numbers) existing in the street. Filtering is allowed on all attributes.  Attribute selection is possible for all attributes.  Specific business errors for current operation will be encapsulated in  HTTP Response 422 Unprocessable entity 
   *
   * streetId String Unique identifier of the street
   * fields String Attribute selection (optional)
   * offset Integer Requested index for start of resources to be provided in response requested by client (optional)
   * limit Integer Requested number of resources to be provided in response requested by client (optional)
   * returns List
   **/

  console.log('tMF673streetSegmentFind :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF673streetSegmentFind: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF673streetSegmentFind: error=" + error);
    sendError(res, internalError);
  });




};



