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

exports.tMF632hubCreate = function(req, res, next) {
  /**
   * Register a listener
   * Sets the communication endpoint address the service instance must use to deliver information about its health state, execution state, failures and metrics  Specific business errors for current operation will be encapsulated in  HTTP Response 422 Unprocessable entity 
   *
   * data TMF632HubInput 
   * returns TMF632Hub
   **/

  console.log('tMF632hubCreate :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);


  /* matching tmfHub & isRestfulCreate */

  notificationUtils.register(req, res, next);  


};

exports.tMF632hubDelete = function(req, res, next) {
  /**
   * Unregister a listener
   * Clears the communication endpoint address that was set by creating the Hub  Specific business errors for current operation will be encapsulated in  HTTP Response 422 Unprocessable entity 
   *
   * hubId String 
   * no response value expected for this operation
   **/

  console.log('tMF632hubDelete :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);


  /* matching tmfHub & isRestfulDestroy */

  notificationUtils.unregister(req, res, next);  


};

exports.tMF632individualCreate = function(req, res, next) {
  /**
   * Create an individual
   * This operation is used to create an individual entity.  Specific business errors for current operation will be encapsulated in  HTTP Response 422 Unprocessable entity 
   *
   * individual TMF632Individual 
   * returns TMF632Individual
   **/

  console.log('tMF632individualCreate :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument tMF632PartyManagement */
  
  const resourceType = getResourceType(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF632individualCreate',payload))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('tMF632individualCreate',payload))
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
      console.log("tMF632individualCreate: error=" + error.toString());
      sendError(res, error);
    });



};

exports.tMF632individualDelete = function(req, res, next) {
  /**
   * Delete an individual
   * This operation is used to delete an existing individual entity. Note: this operation is available only to ADMIN API users.  Specific business errors for current operation will be encapsulated in  HTTP Response 422 Unprocessable entity 
   *
   * individualId String Unique identifier of the individual
   * no response value expected for this operation
   **/

  console.log('tMF632individualDelete :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulDestroy */

  const individualId = String(req.swagger.params.individualId.value);

  const query = {
    id: individualId
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

exports.tMF632individualFind = function(req, res, next) {
  /**
   * List individuals
   * This operation lists individual entities (physical persons). Attribute selection is enabled for all first level attributes. Filtering may be available depending on the compliance level supported by an implementation.  Specific business errors for current operation will be encapsulated in  HTTP Response 422 Unprocessable entity 
   *
   * fields String Attribute selection (optional)
   * offset String Requested index for start of resources to be provided in response requested by client (optional)
   * limit String Requested number of resources to be provided in response requested by client (optional)
   * returns List
   **/

  console.log('tMF632individualFind :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF632individualFind: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF632individualFind: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF632individualGet = function(req, res, next) {
  /**
   * Retrieve an individual
   * This operation retrieves an individual entity (physical person). Attribute selection is enabled for all first level attributes. Filtering on sub-resources may be available depending on the compliance level supported by an implementation.  Specific business errors for current operation will be encapsulated in  HTTP Response 422 Unprocessable entity 
   *
   * individualId String Unique identifier of the individual
   * fields String Attribute selection (optional)
   * returns TMF632Individual
   **/

  console.log('tMF632individualGet :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulShow */

  var individualId = String(req.swagger.params.individualId.value);

  var query = mongoUtils.getMongoQuery(req);
  query.criteria.id = individualId

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
        console.log("tMF632individualGet: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF632individualGet: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF632individualPatch = function(req, res, next) {
  /**
   * Update partially an individual
   * This operation partially updates an individual entity.  Specific business errors for current operation will be encapsulated in  HTTP Response 422 Unprocessable entity 
   *
   * individualId String Unique identifier of the individual
   * individual TMF632Individual 
   * returns TMF632Individual
   **/

  console.log('tMF632individualPatch :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulPatch */

  const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Unable to update resource");

  const resourceType = getResourceType(req);

  const individualId = String(req.swagger.params.individualId.value);
  const query = {
   id: individualId
  };

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF632individualPatch',payload))
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
                  console.log("tMF632individualPatch error=" + error);
                  return sendError(res, internalError);
                });
            })
            .catch((error) => {
              console.log("tMF632individualPatch error=" + error);
              return sendError(res, internalError);
            })
          })
        .catch((error) => {
          console.log("tMF632individualPatch error=" + error);
          return sendError(res, new TError(TErrorEnum.RESOURCE_NOT_FOUND,"No resource with given id"));
        });        
      })
      .catch((error) => {
        console.log("tMF632individualPatch error=" + error);
        return sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF632individualPatch error=" + error);
    return sendError(res, error);
  });




};

exports.tMF632individualUpdate = function(req, res, next) {
  /**
   * Update completely an individual
   * This operation allows to overwrite an existing individual entity.  Specific business errors for current operation will be encapsulated in  HTTP Response 422 Unprocessable entity 
   *
   * individualId String Unique identifier of the individual
   * individual TMF632Individual 
   * returns TMF632Individual
   **/

  console.log('tMF632individualUpdate :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulUpdate */

  const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Unable to update resource");

  const resourceType = getResourceType(req);
  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF632individualUpdate',payload))
    .then(payload => {

      const individualId = String(req.swagger.params.individualId.value);
      const query = {
       id: individualId
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
        console.log("tMF632individualUpdate: error=" + error.toString());
        sendError(res, internalError);
      });
    })
    .catch(error => {
      console.log("tMF632individualUpdate: error=" + error.toString());
      sendError(res, error);
    });




};

exports.tMF632organizationCreate = function(req, res, next) {
  /**
   * Create an organization
   * This operation is used to create an organization entity.  Specific business errors for current operation will be encapsulated in  HTTP Response 422 Unprocessable entity 
   *
   * organization TMF632Organization 
   * returns TMF632Organization
   **/

  console.log('tMF632organizationCreate :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument tMF632PartyManagement */
  
  const resourceType = getResourceType(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF632organizationCreate',payload))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('tMF632organizationCreate',payload))
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
      console.log("tMF632organizationCreate: error=" + error.toString());
      sendError(res, error);
    });



};

exports.tMF632organizationDelete = function(req, res, next) {
  /**
   * Delete an organization
   * This operation is used to delete an existing organization entity. Note: this operation is available only to ADMIN API users.  Specific business errors for current operation will be encapsulated in  HTTP Response 422 Unprocessable entity 
   *
   * organizationId String Unique identifier of the organization
   * no response value expected for this operation
   **/

  console.log('tMF632organizationDelete :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulDestroy */

  const organizationId = String(req.swagger.params.organizationId.value);

  const query = {
    id: organizationId
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

exports.tMF632organizationFind = function(req, res, next) {
  /**
   * List organizations
   * This operation lists organization entities (corporations). Attribute selection is enabled for all first level attributes. Filtering may be available depending on the compliance level supported by an implementation.  Specific business errors for current operation will be encapsulated in  HTTP Response 422 Unprocessable entity 
   *
   * fields String Attribute selection (optional)
   * offset Integer Requested index for start of resources to be provided in response requested by client (optional)
   * limit Integer Requested number of resources to be provided in response requested by client (optional)
   * returns List
   **/

  console.log('tMF632organizationFind :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF632organizationFind: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF632organizationFind: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF632organizationGet = function(req, res, next) {
  /**
   * Retrieve an organization
   * This operation retrieves an organization entity (corporation). Attribute selection is enabled for all first level attributes. Filtering on sub-resources may be available depending on the compliance level supported by an implementation.  Specific business errors for current operation will be encapsulated in  HTTP Response 422 Unprocessable entity 
   *
   * organizationId String Unique identifier of the organization
   * fields String Attribute selection (optional)
   * returns TMF632Organization
   **/

  console.log('tMF632organizationGet :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulShow */

  var organizationId = String(req.swagger.params.organizationId.value);

  var query = mongoUtils.getMongoQuery(req);
  query.criteria.id = organizationId

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
        console.log("tMF632organizationGet: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF632organizationGet: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF632organizationPatch = function(req, res, next) {
  /**
   * Update partially an organization
   * This operation partially updates an organization entity.  Specific business errors for current operation will be encapsulated in  HTTP Response 422 Unprocessable entity 
   *
   * organizationId String Unique identifier of the organization
   * organization TMF632Organization 
   * returns TMF632Organization
   **/

  console.log('tMF632organizationPatch :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulPatch */

  const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Unable to update resource");

  const resourceType = getResourceType(req);

  const organizationId = String(req.swagger.params.organizationId.value);
  const query = {
   id: organizationId
  };

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF632organizationPatch',payload))
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
                  console.log("tMF632organizationPatch error=" + error);
                  return sendError(res, internalError);
                });
            })
            .catch((error) => {
              console.log("tMF632organizationPatch error=" + error);
              return sendError(res, internalError);
            })
          })
        .catch((error) => {
          console.log("tMF632organizationPatch error=" + error);
          return sendError(res, new TError(TErrorEnum.RESOURCE_NOT_FOUND,"No resource with given id"));
        });        
      })
      .catch((error) => {
        console.log("tMF632organizationPatch error=" + error);
        return sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF632organizationPatch error=" + error);
    return sendError(res, error);
  });




};

exports.tMF632organizationUpdate = function(req, res, next) {
  /**
   * Update completely an organization
   * This operation allows to overwrite an existing organization entity.  Specific business errors for current operation will be encapsulated in  HTTP Response 422 Unprocessable entity 
   *
   * organizationId String Unique identifier of the organization
   * organization TMF632Organization 
   * returns TMF632Organization
   **/

  console.log('tMF632organizationUpdate :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulUpdate */

  const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Unable to update resource");

  const resourceType = getResourceType(req);
  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF632organizationUpdate',payload))
    .then(payload => {

      const organizationId = String(req.swagger.params.organizationId.value);
      const query = {
       id: organizationId
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
        console.log("tMF632organizationUpdate: error=" + error.toString());
        sendError(res, internalError);
      });
    })
    .catch(error => {
      console.log("tMF632organizationUpdate: error=" + error.toString());
      sendError(res, error);
    });




};



