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

exports.tMF646appointmentCreate = function(req, res, next) {
  /**
   * Create an appointment
   * This operation is used to create an appointment. The specifications document provides  the  list  of  mandatory  and  non-mandatory  attributes  when  creating  an  appointment, including any possible rule conditions and applicable default values.  Specific business errors for current operation will be encapsulated in  HTTP Response 422 Unprocessable entity 
   *
   * appointment TMF646Appointment 
   * returns TMF646Appointment
   **/

  console.log('tMF646appointmentCreate :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument tMF646AppointmentManagement */
  
  const resourceType = getResourceType(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF646appointmentCreate',payload))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('tMF646appointmentCreate',payload))
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
      console.log("tMF646appointmentCreate: error=" + error.toString());
      sendError(res, error);
    });



};

exports.tMF646appointmentDelete = function(req, res, next) {
  /**
   * Delete an appointment
   * This operation deletes an appointment entity. Note : this operation is available only to ADMIN API users.  Specific business errors for current operation will be encapsulated in  HTTP Response 422 Unprocessable entity 
   *
   * id String 
   * no response value expected for this operation
   **/

  console.log('tMF646appointmentDelete :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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

exports.tMF646appointmentFind = function(req, res, next) {
  /**
   * List appointments
   * This operation list appointment entities corresponding to given criteria. Attribute selection is enabled for all first level attributes. Filtering may be available depending on the compliance level supported by an implementation.  Specific business errors for current operation will be encapsulated in  HTTP Response 422 Unprocessable entity 
   *
   * fields String Attribute selection (optional)
   * offset Integer Requested index for start of resources to be provided in response requested by client (optional)
   * limit Integer Requested number of resources to be provided in response requested by client (optional)
   * returns List
   **/

  console.log('tMF646appointmentFind :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF646appointmentFind: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF646appointmentFind: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF646appointmentGet = function(req, res, next) {
  /**
   * Retrieve an appointment
   * This operation retrieves an appointment entity. Attribute selection is enabled for all first level attributes. Filtering on sub-resources may be available depending on the compliance level supported by an implementation.  Specific business errors for current operation will be encapsulated in  HTTP Response 422 Unprocessable entity 
   *
   * id String 
   * fields String Attribute selection (optional)
   * returns TMF646Appointment
   **/

  console.log('tMF646appointmentGet :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF646appointmentGet: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF646appointmentGet: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF646appointmentPatch = function(req, res, next) {
  /**
   * Update or cancel an appointment
   * This operation allows partial updates of an appointment entity. Support of json/merge (https://tools.ietf.org/html/rfc7386) is mandatory, support of json/patch (http://tools.ietf.org/html/rfc5789) is optional. It also can be used to cancel an appointment by modifying its state. The new state is ‘cancelled’. The specifications document provides the list of patchable and not patchable attributes, including constraint rules on  their usage.  Specific business errors for current operation will be encapsulated in  HTTP Response 422 Unprocessable entity 
   *
   * id String 
   * appointment TMF646Appointment 
   * returns TMF646Appointment
   **/

  console.log('tMF646appointmentPatch :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulPatch */

  const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Unable to update resource");

  const resourceType = getResourceType(req);

  const id = String(req.swagger.params.id.value);
  const query = {
   id: id
  };

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF646appointmentPatch',payload))
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
                  console.log("tMF646appointmentPatch error=" + error);
                  return sendError(res, internalError);
                });
            })
            .catch((error) => {
              console.log("tMF646appointmentPatch error=" + error);
              return sendError(res, internalError);
            })
          })
        .catch((error) => {
          console.log("tMF646appointmentPatch error=" + error);
          return sendError(res, new TError(TErrorEnum.RESOURCE_NOT_FOUND,"No resource with given id"));
        });        
      })
      .catch((error) => {
        console.log("tMF646appointmentPatch error=" + error);
        return sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF646appointmentPatch error=" + error);
    return sendError(res, error);
  });




};

exports.tMF646hubCreate = function(req, res, next) {
  /**
   * Register a listener
   * Sets the communication endpoint address the service instance must use to deliver information about its health state, execution state, failures and metrics  Specific business errors for current operation will be encapsulated in  HTTP Response 422 Unprocessable entity 
   *
   * data TMF646HubInput Data containing the callback endpoint to deliver the information
   * returns TMF646Hub
   **/

  console.log('tMF646hubCreate :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);


  /* matching tmfHub & isRestfulCreate */

  notificationUtils.register(req, res, next);  


};

exports.tMF646hubDelete = function(req, res, next) {
  /**
   * Unregister listener
   * Unregister a listener  Specific business errors for current operation will be encapsulated in  HTTP Response 422 Unprocessable entity 
   *
   * hubId String 
   * no response value expected for this operation
   **/

  console.log('tMF646hubDelete :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);


  /* matching tmfHub & isRestfulDestroy */

  notificationUtils.unregister(req, res, next);  


};

exports.tMF646searchTimeSlotCreate = function(req, res, next) {
  /**
   * Create a search time slot
   * This operation creates a search time slot entity. It is used to retrieve, according to a set of criteria, available time slots used after to book or reschedule an appointment on.  Specific business errors for current operation will be encapsulated in  HTTP Response 422 Unprocessable entity 
   *
   * searchTimeSlot TMF646SearchTimeSlotPostInput 
   * returns TMF646SearchTimeSlot
   **/

  console.log('tMF646searchTimeSlotCreate :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument tMF646AppointmentManagement */
  
  const resourceType = getResourceType(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF646searchTimeSlotCreate',payload))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('tMF646searchTimeSlotCreate',payload))
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
      console.log("tMF646searchTimeSlotCreate: error=" + error.toString());
      sendError(res, error);
    });



};

exports.tMF646searchTimeSlotDelete = function(req, res, next) {
  /**
   * Delete a search time slot
   * This operation deletes a search time slot entity.  Note: this operation is available only to ADMIN API users. Note: A specific implementation of the Appointment Management API can choose whether or not to implement GET, PATCH, and DELETE for the SearchTimeSlot task resource, according to business considerations (such as the need for accounting or the need to support asynchronous search).  Specific business errors for current operation will be encapsulated in  HTTP Response 422 Unprocessable entity 
   *
   * searchTimeSlotId String Unique identifier of the search time slot request
   * no response value expected for this operation
   **/

  console.log('tMF646searchTimeSlotDelete :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulDestroy */

  const searchTimeSlotId = String(req.swagger.params.searchTimeSlotId.value);

  const query = {
    id: searchTimeSlotId
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

exports.tMF646searchTimeSlotFind = function(req, res, next) {
  /**
   * List search time slots
   * This operation list search time slots entities. Attribute selection is enabled for all first level attributes. Filtering may be available depending on the compliance level supported by an implementation. Note: A specific implementation of the Appointment Management API can choose whether or not to implement GET, PATCH, and DELETE for the SearchTimeSlot task resource, according to business considerations (such as the need for accounting or the need to support asynchronous search).  Specific business errors for current operation will be encapsulated in  HTTP Response 422 Unprocessable entity 
   *
   * fields String Attribute selection (optional)
   * offset Integer Requested index for start of resources to be provided in response requested by client (optional)
   * limit Integer Requested number of resources to be provided in response requested by client (optional)
   * returns List
   **/

  console.log('tMF646searchTimeSlotFind :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF646searchTimeSlotFind: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF646searchTimeSlotFind: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF646searchTimeSlotGet = function(req, res, next) {
  /**
   * Retrieve a search time slot
   * This operation retrieves a search time slot entity. Attribute selection is enabled for all first level attributes. Filtering on sub-resources may be available depending on the compliance level supported by an implementation. Note: A specific implementation of the Appointment Management API can choose whether or not to implement GET, PATCH, and DELETE for the SearchTimeSlot task resource, according to business considerations (such as the need for accounting or the need to support asynchronous search).  Specific business errors for current operation will be encapsulated in  HTTP Response 422 Unprocessable entity 
   *
   * searchTimeSlotId String Unique identifier of the search time slot request
   * fields String Attribute selection (optional)
   * returns TMF646SearchTimeSlot
   **/

  console.log('tMF646searchTimeSlotGet :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulShow */

  var searchTimeSlotId = String(req.swagger.params.searchTimeSlotId.value);

  var query = mongoUtils.getMongoQuery(req);
  query.criteria.id = searchTimeSlotId

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
        console.log("tMF646searchTimeSlotGet: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF646searchTimeSlotGet: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF646searchTimeSlotPatch = function(req, res, next) {
  /**
   * Patch a search time slot
   * This operation allows partial updates of a search time slot entity. Note: this operation is available only to ADMIN API users. Note: A specific implementation of the Appointment Management API can choose whether or not to implement GET, PATCH, and DELETE for the SearchTimeSlot task resource, according to business considerations (such as the need for accounting or the need to support asynchronous search).  Specific business errors for current operation will be encapsulated in  HTTP Response 422 Unprocessable entity 
   *
   * searchTimeSlotId String Unique identifier of the search time slot request
   * searchTimeSlot TMF646SearchTimeSlot 
   * returns TMF646SearchTimeSlot
   **/

  console.log('tMF646searchTimeSlotPatch :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulPatch */

  const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Unable to update resource");

  const resourceType = getResourceType(req);

  const searchTimeSlotId = String(req.swagger.params.searchTimeSlotId.value);
  const query = {
   id: searchTimeSlotId
  };

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF646searchTimeSlotPatch',payload))
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
                  console.log("tMF646searchTimeSlotPatch error=" + error);
                  return sendError(res, internalError);
                });
            })
            .catch((error) => {
              console.log("tMF646searchTimeSlotPatch error=" + error);
              return sendError(res, internalError);
            })
          })
        .catch((error) => {
          console.log("tMF646searchTimeSlotPatch error=" + error);
          return sendError(res, new TError(TErrorEnum.RESOURCE_NOT_FOUND,"No resource with given id"));
        });        
      })
      .catch((error) => {
        console.log("tMF646searchTimeSlotPatch error=" + error);
        return sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF646searchTimeSlotPatch error=" + error);
    return sendError(res, error);
  });




};



