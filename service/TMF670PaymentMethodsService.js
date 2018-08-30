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

exports.tMF670createPaymentMethod = function(req, res, next) {
  /**
   * Create a new payment method
   *
   * paymentMethodRequest TMF670PaymentMethodRequestType The payment method to be created.
   * returns TMF670PaymentMethodType
   **/

  console.log('tMF670createPaymentMethod :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument tMF670PaymentMethods */
  
  const resourceType = getResourceType(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF670createPaymentMethod',payload))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('tMF670createPaymentMethod',payload))
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
      console.log("tMF670createPaymentMethod: error=" + error.toString());
      sendError(res, error);
    });



};

exports.tMF670deletePaymentMethod = function(req, res, next) {
  /**
   * Delete a payment method
   *
   * paymentMethodId String id of the payment method to fetch
   * no response value expected for this operation
   **/

  console.log('tMF670deletePaymentMethod :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulDestroy */

  const paymentMethodId = String(req.swagger.params.paymentMethodId.value);

  const query = {
    id: paymentMethodId
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

exports.tMF670retrieveAssociatedPaymentMethods = function(req, res, next) {
  /**
   * Retrieve payment methods associated to an account
   *
   * accountId String id of the account to fetch
   * type String To retrieve methods of a specific type (optional)
   * bankAccount.BIC String To retrieve the accounts of a specific bank (optional)
   * bankAccount.accountNumber String To retrieve a specific account (optional)
   * bankAccount.bank String To retrieve the accounts of a specific bank (optional)
   * bankCard.cardNumber String To retrieve a specific bank card (optional)
   * bankCard.nameOnCard String To retrieve cards with a specific name (optional)
   * bankCard.type String To retrieve cards of a specific type (optional)
   * check.checkId String To retrieve a specific check (optional)
   * check.bank String To retrieve checks of a specific bank (optional)
   * account String To retrieve a specific telco account (optional)
   * loyaltyAccount String To retrieve a specific loyalty account (optional)
   * digitalWallet.service String To retrieve digital wallets of a specific service (optional)
   * digitalWallet.id String To retrieve a specific digital wallet (optional)
   * bucket String To retrieve a specific bucket (optional)
   * voucher.id String To retrieve a specific voucher (optional)
   * voucher.code String To retrieve voucher with a specific code (optional)
   * fields String To apply a filter on every resource included in the response. It's value is a list of comma separated values of the different fields that are requested. (optional)
   * limit Integer To limit the maximum number of results to be included in the response. The name of query parameter is ‘limit’ and its value is an integer indicating the maximum number of elements to be included in the response. (optional)
   * offset Integer To apply an offset in the results to be included in the response. The name of query parameter is ‘offset’ and its value is an integer indicating the offset to be applied. (optional)
   * returns List
   **/

  console.log('tMF670retrieveAssociatedPaymentMethods :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF670retrieveAssociatedPaymentMethods: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF670retrieveAssociatedPaymentMethods: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF670retrievePaymentMethod = function(req, res, next) {
  /**
   * Retrieve a payment method
   *
   * paymentMethodId String id of the payment method to fetch
   * returns TMF670PaymentMethodType
   **/

  console.log('tMF670retrievePaymentMethod :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulShow */

  var paymentMethodId = String(req.swagger.params.paymentMethodId.value);

  var query = mongoUtils.getMongoQuery(req);
  query.criteria.id = paymentMethodId

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
        console.log("tMF670retrievePaymentMethod: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF670retrievePaymentMethod: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF670retrievePaymentMethods = function(req, res, next) {
  /**
   * Retrieve a list of payment methods
   *
   * type String To retrieve methods of a specific type (optional)
   * bankAccount.BIC String To retrieve the accounts of a specific bank (optional)
   * bankAccount.accountNumber String To retrieve a specific account (optional)
   * bankAccount.bank String To retrieve the accounts of a specific bank (optional)
   * bankCard.cardNumber String To retrieve a specific bank card (optional)
   * bankCard.nameOnCard String To retrieve cards with a specific name (optional)
   * bankCard.type String To retrieve cards of a specific type (optional)
   * check.checkId String To retrieve a specific check (optional)
   * check.bank String To retrieve checks of a specific bank (optional)
   * relatedParty.id String To retrieve methods from a specific related party (optional)
   * relatedParty.type String To retrieve methods from a specific related party (optional)
   * loyaltyAccount String To retrieve a specific loyalty account (optional)
   * digitalWallet.service String To retrieve digital wallets of a specific service (optional)
   * digitalWallet.id String To retrieve a specific digital wallet (optional)
   * bucket String To retrieve a specific bucket (optional)
   * voucher.id String To retrieve a specific voucher (optional)
   * voucher.code String To retrieve voucher with a specific code (optional)
   * fields String To apply a filter on every resource included in the response. It's value is a list of comma separated values of the different fields that are requested. (optional)
   * limit Integer To limit the maximum number of results to be included in the response. The name of query parameter is ‘limit’ and its value is an integer indicating the maximum number of elements to be included in the response. (optional)
   * offset Integer To apply an offset in the results to be included in the response. The name of query parameter is ‘offset’ and its value is an integer indicating the offset to be applied. (optional)
   * returns List
   **/

  console.log('tMF670retrievePaymentMethods :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF670retrievePaymentMethods: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF670retrievePaymentMethods: error=" + error);
    sendError(res, internalError);
  });




};



