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

exports.tMF674geographicSiteCreate = function(req, res, next) {
  /**
   * Create a geographic site
   * This operation creates a geographic site entity. Mandatory and non mandatory attributes, additional rules and default values are detailed in the specifications document.  Specific business errors for current operation will be encapsulated in  HTTP Response 422 Unprocessable entity 
   *
   * geographicSite TMF674GeographicSite 
   * returns TMF674GeographicSite
   **/

  console.log('tMF674geographicSiteCreate :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument tMF674GeographicSite */
  
  const resourceType = getResourceType(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF674geographicSiteCreate',payload))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('tMF674geographicSiteCreate',payload))
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
      console.log("tMF674geographicSiteCreate: error=" + error.toString());
      sendError(res, error);
    });



};

exports.tMF674geographicSiteDelete = function(req, res, next) {
  /**
   * Delete a geographic site
   * This operation deletes and removes from the server geographicSite resource previously registered. Note: this operation is available only to ADMIN API users  Specific business errors for current operation will be encapsulated in  HTTP Response 422 Unprocessable entity 
   *
   * geographicSiteId String 
   * no response value expected for this operation
   **/

  console.log('tMF674geographicSiteDelete :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulDestroy */

  const geographicSiteId = String(req.swagger.params.geographicSiteId.value);

  const query = {
    id: geographicSiteId
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

exports.tMF674geographicSiteFind = function(req, res, next) {
  /**
   * List geographic sites
   * This operation lists geographic site entities. Attribute selection is enabled for all first level attributes. Filtering may be available depending on the compliance level supported by an implementation.  Specific business errors for current operation will be encapsulated in  HTTP Response 422 Unprocessable entity 
   *
   * fields String Attribute selection (optional)
   * offset String Requested index for start of resouces to be provided in response requested by client (optional)
   * limit String Requested number of resouces to be provided in response requested by client (optional)
   * returns List
   **/

  console.log('tMF674geographicSiteFind :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF674geographicSiteFind: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF674geographicSiteFind: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF674geographicSiteGet = function(req, res, next) {
  /**
   * Retrieve a geographic site
   * This operation retrieves a geographic site entity. Attribute selection is enabled for all first level attributes. Filtering may be available depending on the compliance level supported by an implementation.  Specific business errors for current operation will be encapsulated in  HTTP Response 422 Unprocessable entity 
   *
   * geographicSiteId String 
   * fields String Attribute selection (optional)
   * returns TMF674GeographicSite
   **/

  console.log('tMF674geographicSiteGet :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulShow */

  var geographicSiteId = String(req.swagger.params.geographicSiteId.value);

  var query = mongoUtils.getMongoQuery(req);
  query.criteria.id = geographicSiteId

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
        console.log("tMF674geographicSiteGet: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF674geographicSiteGet: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF674geographicSitePatch = function(req, res, next) {
  /**
   * Update partially a geographic site
   * This operation allows partial updates of a geographicSite resource entity. The definition of the modification is recommended to follow the json/patch (http://tools.ietf.org/html/rfc5789) and the extension proposed in Design Guidelines to manage modification of array entities. Patchable and non patchable attributes are detailed in the specifications document.  Specific business errors for current operation will be encapsulated in  HTTP Response 422 Unprocessable entity 
   *
   * geographicSiteId String 
   * geographicSite TMF674GeographicSite 
   * returns TMF674GeographicSite
   **/

  console.log('tMF674geographicSitePatch :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulPatch */

  const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Unable to update resource");

  const resourceType = getResourceType(req);

  const geographicSiteId = String(req.swagger.params.geographicSiteId.value);
  const query = {
   id: geographicSiteId
  };

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF674geographicSitePatch',payload))
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
                  console.log("tMF674geographicSitePatch error=" + error);
                  return sendError(res, internalError);
                });
            })
            .catch((error) => {
              console.log("tMF674geographicSitePatch error=" + error);
              return sendError(res, internalError);
            })
          })
        .catch((error) => {
          console.log("tMF674geographicSitePatch error=" + error);
          return sendError(res, new TError(TErrorEnum.RESOURCE_NOT_FOUND,"No resource with given id"));
        });        
      })
      .catch((error) => {
        console.log("tMF674geographicSitePatch error=" + error);
        return sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF674geographicSitePatch error=" + error);
    return sendError(res, error);
  });




};

exports.tMF674geographicSiteUpdate = function(req, res, next) {
  /**
   * Update completely a geographic site
   * This operation updates completely the contents of a geographicSite resource by replacing the contents of that entity with the contents of the resource structure provided in the request. Notice that the PUT method is intended to modify completely the resource impacted, meaning that optional values that are not included in the request may be erased in the server after updating, and will not keep the previous value stored. Behavior of the server on optional values not included is undefined. Note : This operation is optional to be supported in this API.  Specific business errors for current operation will be encapsulated in  HTTP Response 422 Unprocessable entity 
   *
   * geographicSiteId String 
   * geographicSite TMF674GeographicSite 
   * returns TMF674GeographicSite
   **/

  console.log('tMF674geographicSiteUpdate :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulUpdate */

  const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Unable to update resource");

  const resourceType = getResourceType(req);
  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF674geographicSiteUpdate',payload))
    .then(payload => {

      const geographicSiteId = String(req.swagger.params.geographicSiteId.value);
      const query = {
       id: geographicSiteId
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
        console.log("tMF674geographicSiteUpdate: error=" + error.toString());
        sendError(res, internalError);
      });
    })
    .catch(error => {
      console.log("tMF674geographicSiteUpdate: error=" + error.toString());
      sendError(res, error);
    });




};

exports.tMF674hubCreate = function(req, res, next) {
  /**
   * Register a listener
   * Sets the communication endpoint address the service instance must use to deliver information about its health state, execution state, failures and metrics  Specific business errors for current operation will be encapsulated in  HTTP Response 422 Unprocessable entity 
   *
   * data TMF674HubInput Data containing the callback endpoint to deliver the information
   * returns TMF674Hub
   **/

  console.log('tMF674hubCreate :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);


  /* matching tmfHub & isRestfulCreate */

  notificationUtils.register(req, res, next);  


};

exports.tMF674hubDelete = function(req, res, next) {
  /**
   * Unregister a listener
   * Clears the communication endpoint address that was set by creating the Hub  Specific business errors for current operation will be encapsulated in  HTTP Response 422 Unprocessable entity 
   *
   * hubId String 
   * no response value expected for this operation
   **/

  console.log('tMF674hubDelete :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);


  /* matching tmfHub & isRestfulDestroy */

  notificationUtils.unregister(req, res, next);  


};



