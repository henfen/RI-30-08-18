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

exports.tMF657createServiceLevelObjective = function(req, res, next) {
  /**
   * Creates a 'ServiceLevelObjective'
   *
   * serviceLevelObjective TMF657ServiceLevelObjective_Create The Service Level Objective to be created
   * returns TMF657ServiceLevelObjective
   **/

  console.log('tMF657createServiceLevelObjective :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument tMF657ServiceQualityManagement */
  
  const resourceType = getResourceType(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF657createServiceLevelObjective',payload))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('tMF657createServiceLevelObjective',payload))
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
      console.log("tMF657createServiceLevelObjective: error=" + error.toString());
      sendError(res, error);
    });



};

exports.tMF657createServiceLevelSpecification = function(req, res, next) {
  /**
   * Creates a 'ServiceLevelSpecification'
   *
   * serviceLevelSpecification TMF657ServiceLevelSpecification_Create The Service Level Specification to be created
   * returns TMF657ServiceLevelSpecification
   **/

  console.log('tMF657createServiceLevelSpecification :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument tMF657ServiceQualityManagement */
  
  const resourceType = getResourceType(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF657createServiceLevelSpecification',payload))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('tMF657createServiceLevelSpecification',payload))
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
      console.log("tMF657createServiceLevelSpecification: error=" + error.toString());
      sendError(res, error);
    });



};

exports.tMF657deleteServiceLevelObjective = function(req, res, next) {
  /**
   * Deletes a 'ServiceLevelObjective' by Id
   *
   * id String Identifier of the Service Level Objective
   * no response value expected for this operation
   **/

  console.log('tMF657deleteServiceLevelObjective :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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

exports.tMF657deleteServiceLevelSpecification = function(req, res, next) {
  /**
   * Deletes a 'ServiceLevelSpecification' by Id
   *
   * id String Identifier of the Service Level Specification
   * no response value expected for this operation
   **/

  console.log('tMF657deleteServiceLevelSpecification :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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

exports.tMF657listServiceLevelObjective = function(req, res, next) {
  /**
   * List or find 'ServiceLevelObjective' objects
   *
   * fields String Comma separated properties to display in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/

  console.log('tMF657listServiceLevelObjective :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF657listServiceLevelObjective: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF657listServiceLevelObjective: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF657listServiceLevelSpecification = function(req, res, next) {
  /**
   * List or find 'ServiceLevelSpecification' objects
   *
   * fields String Comma separated properties to display in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/

  console.log('tMF657listServiceLevelSpecification :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF657listServiceLevelSpecification: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF657listServiceLevelSpecification: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF657patchServiceLevelObjective = function(req, res, next) {
  /**
   * Updates partially a 'ServiceLevelObjective' by Id
   *
   * id String Identifier of the Service Level Objective
   * serviceLevelObjective TMF657ServiceLevelObjective_Update The Service Level Objective to be updated
   * returns TMF657ServiceLevelObjective
   **/

  console.log('tMF657patchServiceLevelObjective :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulPatch */

  const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Unable to update resource");

  const resourceType = getResourceType(req);

  const id = String(req.swagger.params.id.value);
  const query = {
   id: id
  };

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF657patchServiceLevelObjective',payload))
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
                  console.log("tMF657patchServiceLevelObjective error=" + error);
                  return sendError(res, internalError);
                });
            })
            .catch((error) => {
              console.log("tMF657patchServiceLevelObjective error=" + error);
              return sendError(res, internalError);
            })
          })
        .catch((error) => {
          console.log("tMF657patchServiceLevelObjective error=" + error);
          return sendError(res, new TError(TErrorEnum.RESOURCE_NOT_FOUND,"No resource with given id"));
        });        
      })
      .catch((error) => {
        console.log("tMF657patchServiceLevelObjective error=" + error);
        return sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF657patchServiceLevelObjective error=" + error);
    return sendError(res, error);
  });




};

exports.tMF657patchServiceLevelSpecification = function(req, res, next) {
  /**
   * Updates partially a 'ServiceLevelSpecification' by Id
   *
   * id String Identifier of the Service Level Specification
   * serviceLevelSpecification TMF657ServiceLevelSpecification_Update The Service Level Specification to be updated
   * returns TMF657ServiceLevelSpecification
   **/

  console.log('tMF657patchServiceLevelSpecification :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulPatch */

  const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Unable to update resource");

  const resourceType = getResourceType(req);

  const id = String(req.swagger.params.id.value);
  const query = {
   id: id
  };

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF657patchServiceLevelSpecification',payload))
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
                  console.log("tMF657patchServiceLevelSpecification error=" + error);
                  return sendError(res, internalError);
                });
            })
            .catch((error) => {
              console.log("tMF657patchServiceLevelSpecification error=" + error);
              return sendError(res, internalError);
            })
          })
        .catch((error) => {
          console.log("tMF657patchServiceLevelSpecification error=" + error);
          return sendError(res, new TError(TErrorEnum.RESOURCE_NOT_FOUND,"No resource with given id"));
        });        
      })
      .catch((error) => {
        console.log("tMF657patchServiceLevelSpecification error=" + error);
        return sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF657patchServiceLevelSpecification error=" + error);
    return sendError(res, error);
  });




};

exports.tMF657registerListener = function(req, res, next) {
  /**
   * Register a listener
   * Sets the communication endpoint address the service instance must use to deliver information about its health state, execution state, failures and metrics.
   *
   * data TMF657EventSubscriptionInput Data containing the callback endpoint to deliver the information
   * returns TMF657EventSubscription
   **/

  console.log('tMF657registerListener :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);


  /* matching tmfHub & isRestfulCreate */

  notificationUtils.register(req, res, next);  


};

exports.tMF657retrieveServiceLevelObjective = function(req, res, next) {
  /**
   * Retrieves a 'ServiceLevelObjective' by Id
   *
   * id String Identifier of the Service Level Objective
   * returns List
   **/

  console.log('tMF657retrieveServiceLevelObjective :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF657retrieveServiceLevelObjective: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF657retrieveServiceLevelObjective: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF657retrieveServiceLevelSpecification = function(req, res, next) {
  /**
   * Retrieves a 'ServiceLevelSpecification' by Id
   *
   * id String Identifier of the Service Level Specification
   * returns List
   **/

  console.log('tMF657retrieveServiceLevelSpecification :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF657retrieveServiceLevelSpecification: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF657retrieveServiceLevelSpecification: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF657unregisterListener = function(req, res, next) {
  /**
   * Unregister a listener
   * Resets the communication endpoint address the service instance must use to deliver information about its health state, execution state, failures and metrics.
   *
   * id String The id of the registered listener
   * no response value expected for this operation
   **/

  console.log('tMF657unregisterListener :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);


  /* matching tmfHub & isRestfulDestroy */

  notificationUtils.unregister(req, res, next);  


};



