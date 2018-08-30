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

exports.tMF684createTracking = function(req, res, next) {
  /**
   * Create tracking details of a shipment
   *
   * shipmentTrackingRequest TMF684TrackingRequestType Necessary information to create a shipment tracking entity
   * returns TMF684TrackingDetailsType
   **/

  console.log('tMF684createTracking :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument tMF684ShipmentTracking */
  
  const resourceType = getResourceType(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF684createTracking',payload))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('tMF684createTracking',payload))
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
      console.log("tMF684createTracking: error=" + error.toString());
      sendError(res, error);
    });



};

exports.tMF684createTrackingCheckpoint = function(req, res, next) {
  /**
   * Add checkpoint to a shipment tracking
   *
   * trackingId String Id of the tracking the checkpoint where be added onto
   * checkpointRequest TMF684CheckpointType Necessary data to add a new checkpoint
   * returns TMF684TrackingDetailsType
   **/

  console.log('tMF684createTrackingCheckpoint :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument tMF684ShipmentTracking */
  
  const resourceType = getResourceType(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF684createTrackingCheckpoint',payload))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('tMF684createTrackingCheckpoint',payload))
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
      console.log("tMF684createTrackingCheckpoint: error=" + error.toString());
      sendError(res, error);
    });



};

exports.tMF684deleteTracking = function(req, res, next) {
  /**
   * Delete tracking details of a shipment
   *
   * trackingId String Id of the shipment that must be deleted
   * no response value expected for this operation
   **/

  console.log('tMF684deleteTracking :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulDestroy */

  const trackingId = String(req.swagger.params.trackingId.value);

  const query = {
    id: trackingId
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

exports.tMF684modifyTracking = function(req, res, next) {
  /**
   * Modify tracking details of a shipment
   *
   * trackingId String Id of the shipment that needs to be modified
   * trackingModificationRequest Object Modifications to be done
   * returns TMF684TrackingDetailsType
   **/

  console.log('tMF684modifyTracking :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulPatch */

  const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Unable to update resource");

  const resourceType = getResourceType(req);

  const trackingId = String(req.swagger.params.trackingId.value);
  const query = {
   id: trackingId
  };

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF684modifyTracking',payload))
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
                  console.log("tMF684modifyTracking error=" + error);
                  return sendError(res, internalError);
                });
            })
            .catch((error) => {
              console.log("tMF684modifyTracking error=" + error);
              return sendError(res, internalError);
            })
          })
        .catch((error) => {
          console.log("tMF684modifyTracking error=" + error);
          return sendError(res, new TError(TErrorEnum.RESOURCE_NOT_FOUND,"No resource with given id"));
        });        
      })
      .catch((error) => {
        console.log("tMF684modifyTracking error=" + error);
        return sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF684modifyTracking error=" + error);
    return sendError(res, error);
  });




};

exports.tMF684retrieveTracking = function(req, res, next) {
  /**
   * Retrieve tracking details of a shipment
   *
   * trackingId String Id of the shipment that needs to be fetched
   * returns TMF684TrackingDetailsType
   **/

  console.log('tMF684retrieveTracking :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulShow */

  var trackingId = String(req.swagger.params.trackingId.value);

  var query = mongoUtils.getMongoQuery(req);
  query.criteria.id = trackingId

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
        console.log("tMF684retrieveTracking: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF684retrieveTracking: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF684retrieveTrackings = function(req, res, next) {
  /**
   * Retrieve tracking details of a shipment
   *
   * order.id String Id of the order whose shipment has to be fetched
   * returns TMF684TrackingDetailsType
   **/

  console.log('tMF684retrieveTrackings :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF684retrieveTrackings: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF684retrieveTrackings: error=" + error);
    sendError(res, internalError);
  });




};



