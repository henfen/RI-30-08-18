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

exports.tMF653createServiceTest = function(req, res, next) {
  /**
   * Creates a 'ServiceTest'
   *
   * serviceTest TMF653ServiceTest_Create The Service Test to be created
   * returns TMF653ServiceTest
   **/

  console.log('tMF653createServiceTest :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument tMF653ServiceTestManagement */
  
  const resourceType = getResourceType(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF653createServiceTest',payload))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('tMF653createServiceTest',payload))
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
      console.log("tMF653createServiceTest: error=" + error.toString());
      sendError(res, error);
    });



};

exports.tMF653createServiceTestSpecification = function(req, res, next) {
  /**
   * Creates a 'ServiceTestSpecification'
   *
   * serviceTestSpecification TMF653ServiceTestSpecification_Create The Service Test Specification to be created
   * returns TMF653ServiceTestSpecification
   **/

  console.log('tMF653createServiceTestSpecification :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument tMF653ServiceTestManagement */
  
  const resourceType = getResourceType(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF653createServiceTestSpecification',payload))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('tMF653createServiceTestSpecification',payload))
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
      console.log("tMF653createServiceTestSpecification: error=" + error.toString());
      sendError(res, error);
    });



};

exports.tMF653deleteServiceTest = function(req, res, next) {
  /**
   * Deletes a 'ServiceTest' by Id
   *
   * id String Identifier of the Service Test
   * no response value expected for this operation
   **/

  console.log('tMF653deleteServiceTest :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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

exports.tMF653deleteServiceTestSpecification = function(req, res, next) {
  /**
   * Deletes a 'ServiceTestSpecification' by Id
   *
   * id String Identifier of the Service Test Specification
   * no response value expected for this operation
   **/

  console.log('tMF653deleteServiceTestSpecification :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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

exports.tMF653listServiceTest = function(req, res, next) {
  /**
   * List or find 'ServiceTest' objects
   *
   * fields String Comma separated properties to display in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/

  console.log('tMF653listServiceTest :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF653listServiceTest: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF653listServiceTest: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF653listServiceTestSpecification = function(req, res, next) {
  /**
   * List or find 'ServiceTestSpecification' objects
   *
   * fields String Comma separated properties to display in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/

  console.log('tMF653listServiceTestSpecification :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF653listServiceTestSpecification: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF653listServiceTestSpecification: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF653patchServiceTest = function(req, res, next) {
  /**
   * Updates partially a 'ServiceTest' by Id
   *
   * id String Identifier of the Service Test
   * serviceTest TMF653ServiceTest_Update The Service Test to be updated
   * returns TMF653ServiceTest
   **/

  console.log('tMF653patchServiceTest :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulPatch */

  const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Unable to update resource");

  const resourceType = getResourceType(req);

  const id = String(req.swagger.params.id.value);
  const query = {
   id: id
  };

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF653patchServiceTest',payload))
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
                  console.log("tMF653patchServiceTest error=" + error);
                  return sendError(res, internalError);
                });
            })
            .catch((error) => {
              console.log("tMF653patchServiceTest error=" + error);
              return sendError(res, internalError);
            })
          })
        .catch((error) => {
          console.log("tMF653patchServiceTest error=" + error);
          return sendError(res, new TError(TErrorEnum.RESOURCE_NOT_FOUND,"No resource with given id"));
        });        
      })
      .catch((error) => {
        console.log("tMF653patchServiceTest error=" + error);
        return sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF653patchServiceTest error=" + error);
    return sendError(res, error);
  });




};

exports.tMF653patchServiceTestSpecification = function(req, res, next) {
  /**
   * Updates partially a 'ServiceTestSpecification' by Id
   *
   * id String Identifier of the Service Test Specification
   * serviceTestSpecification TMF653ServiceTestSpecification_Update The Service Test Specification to be updated
   * returns TMF653ServiceTestSpecification
   **/

  console.log('tMF653patchServiceTestSpecification :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulPatch */

  const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Unable to update resource");

  const resourceType = getResourceType(req);

  const id = String(req.swagger.params.id.value);
  const query = {
   id: id
  };

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF653patchServiceTestSpecification',payload))
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
                  console.log("tMF653patchServiceTestSpecification error=" + error);
                  return sendError(res, internalError);
                });
            })
            .catch((error) => {
              console.log("tMF653patchServiceTestSpecification error=" + error);
              return sendError(res, internalError);
            })
          })
        .catch((error) => {
          console.log("tMF653patchServiceTestSpecification error=" + error);
          return sendError(res, new TError(TErrorEnum.RESOURCE_NOT_FOUND,"No resource with given id"));
        });        
      })
      .catch((error) => {
        console.log("tMF653patchServiceTestSpecification error=" + error);
        return sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF653patchServiceTestSpecification error=" + error);
    return sendError(res, error);
  });




};

exports.tMF653registerListener = function(req, res, next) {
  /**
   * Register a listener
   * Sets the communication endpoint address the service instance must use to deliver information about its health state, execution state, failures and metrics.
   *
   * data TMF653EventSubscriptionInput Data containing the callback endpoint to deliver the information
   * returns TMF653EventSubscription
   **/

  console.log('tMF653registerListener :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);


  /* matching tmfHub & isRestfulCreate */

  notificationUtils.register(req, res, next);  


};

exports.tMF653retrieveServiceTest = function(req, res, next) {
  /**
   * Retrieves a 'ServiceTest' by Id
   *
   * id String Identifier of the Service Test
   * returns List
   **/

  console.log('tMF653retrieveServiceTest :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF653retrieveServiceTest: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF653retrieveServiceTest: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF653retrieveServiceTestSpecification = function(req, res, next) {
  /**
   * Retrieves a 'ServiceTestSpecification' by Id
   *
   * id String Identifier of the Service Test Specification
   * returns List
   **/

  console.log('tMF653retrieveServiceTestSpecification :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF653retrieveServiceTestSpecification: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF653retrieveServiceTestSpecification: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF653unregisterListener = function(req, res, next) {
  /**
   * Unregister a listener
   * Resets the communication endpoint address the service instance must use to deliver information about its health state, execution state, failures and metrics.
   *
   * id String The id of the registered listener
   * no response value expected for this operation
   **/

  console.log('tMF653unregisterListener :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);


  /* matching tmfHub & isRestfulDestroy */

  notificationUtils.unregister(req, res, next);  


};



