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

exports.tMF654createAdjustment = function(req, res, next) {
  /**
   * Perform a balance adjustment for a given bucket on a product (or commercial id reference to a product instance consuming the credit held in a bucket for a specific service).
   *
   * adjustmentBody TMF654BalanceAdjustmentBody The Adjustment to be created.
   * no response value expected for this operation
   **/

  console.log('tMF654createAdjustment :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument tMF654PrepayBalanceManagement */
  
  const resourceType = getResourceType(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF654createAdjustment',payload))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('tMF654createAdjustment',payload))
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
      console.log("tMF654createAdjustment: error=" + error.toString());
      sendError(res, error);
    });



};

exports.tMF654createAdjustmentProduct = function(req, res, next) {
  /**
   * Perform a balance adjustment for a given bucket on a product (or commercial id reference to a product instance consuming the credit held in a bucket for a specific service).
   *
   * productId String 
   * adjustmentBody TMF654BalanceAdjustmentBody The Adjustment to be created.
   * no response value expected for this operation
   **/

  console.log('tMF654createAdjustmentProduct :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument tMF654PrepayBalanceManagement */
  
  const resourceType = getResourceType(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF654createAdjustmentProduct',payload))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('tMF654createAdjustmentProduct',payload))
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
      console.log("tMF654createAdjustmentProduct: error=" + error.toString());
      sendError(res, error);
    });



};

exports.tMF654createClientListener = function(req, res, next) {
  /**
   * Clears the communication endpoint address that was set by creating the Hub. Provides to a registered listener the description of the event that was raised. The /client/listener url is the callback url passed when registering the listener.
   *
   * listenerBody TMF654ListenerRequest The Client Listener to be created.
   * no response value expected for this operation
   **/

  console.log('tMF654createClientListener :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument tMF654PrepayBalanceManagement */
  
  const resourceType = getResourceType(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF654createClientListener',payload))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('tMF654createClientListener',payload))
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
      console.log("tMF654createClientListener: error=" + error.toString());
      sendError(res, error);
    });



};

exports.tMF654createNewTopup = function(req, res, next) {
  /**
   * Create a new top-up operation for a given product (or commercial id reference to a product) instance consuming the credit held in a bucket for a specific service) .
   *
   * topupBody TMF654BalanceTopupBody The Topup to be created.
   * no response value expected for this operation
   **/

  console.log('tMF654createNewTopup :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument tMF654PrepayBalanceManagement */
  
  const resourceType = getResourceType(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF654createNewTopup',payload))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('tMF654createNewTopup',payload))
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
      console.log("tMF654createNewTopup: error=" + error.toString());
      sendError(res, error);
    });



};

exports.tMF654createNewTopupOfProduct = function(req, res, next) {
  /**
   * Create a new top-up operation for a given product (or commercial id reference to a product) instance consuming the credit held in a bucket for a specific service) .
   *
   * idProduct String The id to be created.
   * topupBody TMF654BalanceTopupBody The Topup to be created.
   * no response value expected for this operation
   **/

  console.log('tMF654createNewTopupOfProduct :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument tMF654PrepayBalanceManagement */
  
  const resourceType = getResourceType(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF654createNewTopupOfProduct',payload))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('tMF654createNewTopupOfProduct',payload))
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
      console.log("tMF654createNewTopupOfProduct: error=" + error.toString());
      sendError(res, error);
    });



};

exports.tMF654createNotification = function(req, res, next) {
  /**
   * Sets the communication endpoint address the service instance must use to deliver information about its health state, execution state, failures and metrics. Subsequent POST calls will be rejected by the service if it does not support multiple listeners. In this case DELETE /api/hub/{id} must be called before an endpoint can be created again.
   *
   * notificationBody TMF654NotificationRequest The Notification to be created.
   * returns TMF654NotificationResponse
   **/

  console.log('tMF654createNotification :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);


  /* matching tmfHub & isRestfulCreate */

  notificationUtils.register(req, res, next);  


};

exports.tMF654createReserveOperation = function(req, res, next) {
  /**
   * Balance reserve operations processed for a given bucket.
   *
   * reserveBody TMF654BalanceReserveBody The Adjustment to be created.
   * no response value expected for this operation
   **/

  console.log('tMF654createReserveOperation :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument tMF654PrepayBalanceManagement */
  
  const resourceType = getResourceType(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF654createReserveOperation',payload))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('tMF654createReserveOperation',payload))
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
      console.log("tMF654createReserveOperation: error=" + error.toString());
      sendError(res, error);
    });



};

exports.tMF654createTransfer = function(req, res, next) {
  /**
   * request a new transfer operation for a given product (or commercial id reference to a product instance consuming the credit held in a bucket for a specific service).
   *
   * transferBody TMF654BalanceTransferBody The Transfer to be modify.
   * no response value expected for this operation
   **/

  console.log('tMF654createTransfer :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument tMF654PrepayBalanceManagement */
  
  const resourceType = getResourceType(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF654createTransfer',payload))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('tMF654createTransfer',payload))
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
      console.log("tMF654createTransfer: error=" + error.toString());
      sendError(res, error);
    });



};

exports.tMF654createTransferProduct = function(req, res, next) {
  /**
   * request a new transfer operation for a given product (or commercial id reference to a product instance consuming the credit held in a bucket for a specific service).
   *
   * productId String 
   * transferBody TMF654BalanceTransferBody The Transfer to be modify.
   * no response value expected for this operation
   **/

  console.log('tMF654createTransferProduct :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument tMF654PrepayBalanceManagement */
  
  const resourceType = getResourceType(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF654createTransferProduct',payload))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('tMF654createTransferProduct',payload))
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
      console.log("tMF654createTransferProduct: error=" + error.toString());
      sendError(res, error);
    });



};

exports.tMF654createUnreserveOperation = function(req, res, next) {
  /**
   * Balance unreserve operations processed for a given bucket.
   *
   * reserveBody TMF654BalanceUnreserveBody The Adjustment to be created.
   * no response value expected for this operation
   **/

  console.log('tMF654createUnreserveOperation :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument tMF654PrepayBalanceManagement */
  
  const resourceType = getResourceType(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF654createUnreserveOperation',payload))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('tMF654createUnreserveOperation',payload))
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
      console.log("tMF654createUnreserveOperation: error=" + error.toString());
      sendError(res, error);
    });



};

exports.tMF654deductBalanceAmount = function(req, res, next) {
  /**
   * Deduct balance amount stored in the server for a specific bucket under a product referenced by a product id of an individual asset created (e.g. license id for a TV service) or commercial identifier based on the value of a resource created under the product (i.e. MSISDN) that maps to an internal product id.
   *
   * deductBalanceBody TMF654BalanceDeductBody The Adjustment to be created.
   * no response value expected for this operation
   **/

  console.log('tMF654deductBalanceAmount :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument tMF654PrepayBalanceManagement */
  
  const resourceType = getResourceType(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF654deductBalanceAmount',payload))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('tMF654deductBalanceAmount',payload))
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
      console.log("tMF654deductBalanceAmount: error=" + error.toString());
      sendError(res, error);
    });



};

exports.tMF654deleteNotification = function(req, res, next) {
  /**
   * Clears the communication endpoint address that was set by creating the Hub.
   *
   * id String 
   * no response value expected for this operation
   **/

  console.log('tMF654deleteNotification :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);


  /* matching tmfHub & isRestfulDestroy */

  notificationUtils.unregister(req, res, next);  


};

exports.tMF654modifyTopupStatus = function(req, res, next) {
  /**
   * Update the information about a single top-up operation previously processed by the server.
   *
   * topupId String 
   * topupBody TMF654BalanceTopupStatusTypeModify The Topup to be modify.
   * no response value expected for this operation
   **/

  console.log('tMF654modifyTopupStatus :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulUpdate */

  const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Unable to update resource");

  const resourceType = getResourceType(req);
  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF654modifyTopupStatus',payload))
    .then(payload => {

      const topupId = String(req.swagger.params.topupId.value);
      const query = {
       id: topupId
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
        console.log("tMF654modifyTopupStatus: error=" + error.toString());
        sendError(res, internalError);
      });
    })
    .catch(error => {
      console.log("tMF654modifyTopupStatus: error=" + error.toString());
      sendError(res, error);
    });




};

exports.tMF654modifyTopupStatusProduct = function(req, res, next) {
  /**
   * Update the information about a single top-up operation previously processed by the server.
   *
   * productId String 
   * topupId String 
   * topupBody TMF654BalanceTopupStatusTypeModify The Topup to be modify.
   * no response value expected for this operation
   **/

  console.log('tMF654modifyTopupStatusProduct :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulUpdate */

  const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Unable to update resource");

  const resourceType = getResourceType(req);
  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF654modifyTopupStatusProduct',payload))
    .then(payload => {

      const topupId = String(req.swagger.params.topupId.value);
      const query = {
       id: topupId
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
        console.log("tMF654modifyTopupStatusProduct: error=" + error.toString());
        sendError(res, internalError);
      });
    })
    .catch(error => {
      console.log("tMF654modifyTopupStatusProduct: error=" + error.toString());
      sendError(res, error);
    });




};

exports.tMF654modifyTransferStatus = function(req, res, next) {
  /**
   * modify the status of a balance transfer operation previously processed by the server. This could be used to cancel an existing transfer operation.
   *
   * transferId String 
   * transferStatusBody TMF654BalanceTransferStatusTypeModify The transfer to be modify.
   * no response value expected for this operation
   **/

  console.log('tMF654modifyTransferStatus :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulUpdate */

  const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Unable to update resource");

  const resourceType = getResourceType(req);
  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF654modifyTransferStatus',payload))
    .then(payload => {

      const transferId = String(req.swagger.params.transferId.value);
      const query = {
       id: transferId
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
        console.log("tMF654modifyTransferStatus: error=" + error.toString());
        sendError(res, internalError);
      });
    })
    .catch(error => {
      console.log("tMF654modifyTransferStatus: error=" + error.toString());
      sendError(res, error);
    });




};

exports.tMF654retrieveAccumulatedBalance = function(req, res, next) {
  /**
   * retrieve total balance information for an aggregation of a set of buckets
   *
   * name String Id of the product
   * product.id String Id of the product
   * returns TMF654AccumulatedBalance
   **/

  console.log('tMF654retrieveAccumulatedBalance :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF654retrieveAccumulatedBalance: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF654retrieveAccumulatedBalance: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF654retrieveAccumulatedBalanceOfProduct = function(req, res, next) {
  /**
   * retrieve total balance information for an aggregation of a set of buckets
   *
   * name String 
   * productId String 
   * returns TMF654AccumulatedBalance
   **/

  console.log('tMF654retrieveAccumulatedBalanceOfProduct :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulShow */

  var productId = String(req.swagger.params.productId.value);

  var query = mongoUtils.getMongoQuery(req);
  query.criteria.id = productId

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
        console.log("tMF654retrieveAccumulatedBalanceOfProduct: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF654retrieveAccumulatedBalanceOfProduct: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF654retrieveAdjustment = function(req, res, next) {
  /**
   * Retrieve detailed information about a single adjustment operation previously processed by the server.
   *
   * adjustmentId String 
   * returns TMF654BalanceAdjustmentRequest
   **/

  console.log('tMF654retrieveAdjustment :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulShow */

  var adjustmentId = String(req.swagger.params.adjustmentId.value);

  var query = mongoUtils.getMongoQuery(req);
  query.criteria.id = adjustmentId

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
        console.log("tMF654retrieveAdjustment: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF654retrieveAdjustment: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF654retrieveAdjustmentOperations = function(req, res, next) {
  /**
   * Retrieve the list of adjustment operations requested for a given product (or commercial id reference to a product), filtered by given criteria. The response includes the details of all balance adjustment operations requested
   *
   * product.id String 
   * returns List
   **/

  console.log('tMF654retrieveAdjustmentOperations :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF654retrieveAdjustmentOperations: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF654retrieveAdjustmentOperations: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF654retrieveAdjustmentOperationsProduct = function(req, res, next) {
  /**
   * Retrieve the list of adjustment operations requested for a given product (or commercial id reference to a product), filtered by given criteria. The response includes the details of all balance adjustment operations requested
   *
   * productId String 
   * returns List
   **/

  console.log('tMF654retrieveAdjustmentOperationsProduct :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF654retrieveAdjustmentOperationsProduct: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF654retrieveAdjustmentOperationsProduct: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF654retrieveAdjustmentProduct = function(req, res, next) {
  /**
   * Retrieve detailed information about a single adjustment operation previously processed by the server.
   *
   * productId String 
   * adjustmentId String 
   * returns TMF654BalanceAdjustmentRequest
   **/

  console.log('tMF654retrieveAdjustmentProduct :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulShow */

  var adjustmentId = String(req.swagger.params.adjustmentId.value);

  var query = mongoUtils.getMongoQuery(req);
  query.criteria.id = adjustmentId

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
        console.log("tMF654retrieveAdjustmentProduct: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF654retrieveAdjustmentProduct: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF654retrieveBalanceActivityOfProduct = function(req, res, next) {
  /**
   * retrieve total balance information for an aggregation of a set of buckets
   *
   * prod.id String 
   * type String  (optional)
   * returns List
   **/

  console.log('tMF654retrieveBalanceActivityOfProduct :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF654retrieveBalanceActivityOfProduct: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF654retrieveBalanceActivityOfProduct: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF654retrieveBalanceActivityProduct = function(req, res, next) {
  /**
   * retrieve total balance information for an aggregation of a set of buckets
   *
   * productId String 
   * type String  (optional)
   * returns List
   **/

  console.log('tMF654retrieveBalanceActivityProduct :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF654retrieveBalanceActivityProduct: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF654retrieveBalanceActivityProduct: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF654retrieveBucket = function(req, res, next) {
  /**
   * Retrieve balance information stored in the server for a specific bucket.
   *
   * bucketId String Id of the bucket to fetch
   * returns TMF654BucketBalance
   **/

  console.log('tMF654retrieveBucket :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulShow */

  var bucketId = String(req.swagger.params.bucketId.value);

  var query = mongoUtils.getMongoQuery(req);
  query.criteria.id = bucketId

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
        console.log("tMF654retrieveBucket: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF654retrieveBucket: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF654retrieveBucketofproduct = function(req, res, next) {
  /**
   * Retrieve balance information stored in the server for a specific bucket.
   *
   * bucketId String Id of the bucket to fetch
   * productId String Id of the bucket to fetch
   * returns TMF654BucketBalance
   **/

  console.log('tMF654retrieveBucketofproduct :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF654retrieveBucketofproduct: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF654retrieveBucketofproduct: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF654retrieveBuckets = function(req, res, next) {
  /**
   * Retrieve balance information stored in the server that can be filtered for specific criteria.
   *
   * product.id String Id of the product
   * returns List
   **/

  console.log('tMF654retrieveBuckets :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF654retrieveBuckets: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF654retrieveBuckets: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF654retrieveBucketsOfProduct = function(req, res, next) {
  /**
   * Retrieve balance information stored in the server that can be filtered for specific criteria.
   *
   * productId String Id of the product
   * bucketType String Description of the bucket type (optional)
   * returns List
   **/

  console.log('tMF654retrieveBucketsOfProduct :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF654retrieveBucketsOfProduct: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF654retrieveBucketsOfProduct: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF654retrieveListTopUpOperations = function(req, res, next) {
  /**
   * retrieve the list of top-up operations requested for a given product product (or commercial id reference to a product), filtered by given criteria. The response includes the details of all top-ups operations requested.
   *
   * product.id String 
   * channel String  (optional)
   * returns List
   **/

  console.log('tMF654retrieveListTopUpOperations :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF654retrieveListTopUpOperations: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF654retrieveListTopUpOperations: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF654retrieveTopup = function(req, res, next) {
  /**
   * retrieve detailed information about a single top-up operation previously processed by the server.
   *
   * topupId String 
   * returns TMF654BalanceTopupRequest
   **/

  console.log('tMF654retrieveTopup :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulShow */

  var topupId = String(req.swagger.params.topupId.value);

  var query = mongoUtils.getMongoQuery(req);
  query.criteria.id = topupId

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
        console.log("tMF654retrieveTopup: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF654retrieveTopup: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF654retrieveTopupByProduct = function(req, res, next) {
  /**
   * retrieve detailed information about a single top-up operation previously processed by the server.
   *
   * productId String 
   * returns List
   **/

  console.log('tMF654retrieveTopupByProduct :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF654retrieveTopupByProduct: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF654retrieveTopupByProduct: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF654retrieveTopupStatus = function(req, res, next) {
  /**
   * retrieve detailed information about a single top-up operation previously processed by the server.
   *
   * topupId String 
   * returns TMF654BalanceTopupStatusType
   **/

  console.log('tMF654retrieveTopupStatus :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF654retrieveTopupStatus: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF654retrieveTopupStatus: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF654retrieveTopupStatusProduct = function(req, res, next) {
  /**
   * retrieve detailed information about a single top-up operation previously processed by the server.
   *
   * productId String 
   * topupId String 
   * returns TMF654BalanceTopupStatusType
   **/

  console.log('tMF654retrieveTopupStatusProduct :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF654retrieveTopupStatusProduct: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF654retrieveTopupStatusProduct: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF654retrieveTransferInformation = function(req, res, next) {
  /**
   * retrieve detailed information about a single top-up operation previously processed by the server.
   *
   * transferId String 
   * returns TMF654BalanceTransferRequest
   **/

  console.log('tMF654retrieveTransferInformation :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulShow */

  var transferId = String(req.swagger.params.transferId.value);

  var query = mongoUtils.getMongoQuery(req);
  query.criteria.id = transferId

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
        console.log("tMF654retrieveTransferInformation: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF654retrieveTransferInformation: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF654retrieveTransferOperations = function(req, res, next) {
  /**
   * retrieve detailed information about a single top-up operation previously processed by the server.
   *
   * product.id String 
   * returns List
   **/

  console.log('tMF654retrieveTransferOperations :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF654retrieveTransferOperations: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF654retrieveTransferOperations: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF654retrieveTransferOperationsProduct = function(req, res, next) {
  /**
   * retrieve detailed information about a single top-up operation previously processed by the server.
   *
   * productId String 
   * returns List
   **/

  console.log('tMF654retrieveTransferOperationsProduct :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF654retrieveTransferOperationsProduct: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF654retrieveTransferOperationsProduct: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF654retrieveTransferStatus = function(req, res, next) {
  /**
   * request the the status of a transfer operation previously processed by the server and if it status has been changed (i.e.: it has been cancelled) the date of the latest status change.
   *
   * transferId String 
   * returns TMF654BalanceTransferRequest
   **/

  console.log('tMF654retrieveTransferStatus :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF654retrieveTransferStatus: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF654retrieveTransferStatus: error=" + error);
    sendError(res, internalError);
  });




};



