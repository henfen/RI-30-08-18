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

exports.tMF683createPartyInteraction = function(req, res, next) {
  /**
   * Create a new party interaction
   *
   * partyInteractionRequest TMF683PartyInteractionRequestType Data for the party interaction creation
   * returns TMF683PartyInteractionType
   **/

  console.log('tMF683createPartyInteraction :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument tMF683PartyInteraction */
  
  const resourceType = getResourceType(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF683createPartyInteraction',payload))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('tMF683createPartyInteraction',payload))
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
      console.log("tMF683createPartyInteraction: error=" + error.toString());
      sendError(res, error);
    });



};

exports.tMF683modifyPartyInteractionStatus = function(req, res, next) {
  /**
   * Modify party interaction status
   *
   * partyInteractionId String The id of the party interaction to be fetched
   * partyInteractionStatusRequest String New value for the status field
   * returns TMF683PartyInteractionType
   **/

  console.log('tMF683modifyPartyInteractionStatus :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulUpdate */

  const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Unable to update resource");

  const resourceType = getResourceType(req);
  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF683modifyPartyInteractionStatus',payload))
    .then(payload => {

      const partyInteractionId = String(req.swagger.params.partyInteractionId.value);
      const query = {
       id: partyInteractionId
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
        console.log("tMF683modifyPartyInteractionStatus: error=" + error.toString());
        sendError(res, internalError);
      });
    })
    .catch(error => {
      console.log("tMF683modifyPartyInteractionStatus: error=" + error.toString());
      sendError(res, error);
    });




};

exports.tMF683retrievePartyInteraction = function(req, res, next) {
  /**
   * Retrieve a party interaction
   *
   * partyInteractionId String The id of the party interaction to be fetched
   * returns TMF683PartyInteractionType
   **/

  console.log('tMF683retrievePartyInteraction :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulShow */

  var partyInteractionId = String(req.swagger.params.partyInteractionId.value);

  var query = mongoUtils.getMongoQuery(req);
  query.criteria.id = partyInteractionId

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
        console.log("tMF683retrievePartyInteraction: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF683retrievePartyInteraction: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF683retrievePartyInteractions = function(req, res, next) {
  /**
   * Retrieve a list of party interactions
   *
   * accountId String To retrieve interactions related with a specific account (optional)
   * customerId String To retrieve interactions related with a specific customer (optional)
   * startDate Date To obtain interactions that happened after this value (optional)
   * endDate Date To obtain interactions that happened before this value (optional)
   * channel.id String To obtain interactions in a specific channel (optional)
   * channel.name String To obtain interactions in a specific channel (optional)
   * status String To obtain interactions with a specific status (optional)
   * subStatus String To obtain interactions with a specific subStatus (optional)
   * type String To obtain interactions of a specific type (optional)
   * limit String To limit the amount of results (optional)
   * offset String To get the results starting from an offset value. Use for pagination (optional)
   * returns List
   **/

  console.log('tMF683retrievePartyInteractions :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF683retrievePartyInteractions: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF683retrievePartyInteractions: error=" + error);
    sendError(res, internalError);
  });




};



