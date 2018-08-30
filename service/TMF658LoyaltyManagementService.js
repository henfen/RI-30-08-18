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

exports.tMF658addRuleAction = function(req, res, next) {
  /**
   * This operation is used to add a loyalty action to a loyalty rule.
   *
   * productSpecId String 
   * ruleId String 
   * body TMF658AddRuleAction 
   * returns TMF658LoyaltyAction
   **/

  console.log('tMF658addRuleAction :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument tMF658LoyaltyManagement */
  
  const resourceType = getResourceType(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF658addRuleAction',payload))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('tMF658addRuleAction',payload))
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
      console.log("tMF658addRuleAction: error=" + error.toString());
      sendError(res, error);
    });



};

exports.tMF658addRuleCondition = function(req, res, next) {
  /**
   * 
   *
   * body TMF658AddRuleCondition 
   * productSpecId String 
   * ruleId String 
   * returns TMF658LoyaltyCondition
   **/

  console.log('tMF658addRuleCondition :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument tMF658LoyaltyManagement */
  
  const resourceType = getResourceType(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF658addRuleCondition',payload))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('tMF658addRuleCondition',payload))
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
      console.log("tMF658addRuleCondition: error=" + error.toString());
      sendError(res, error);
    });



};

exports.tMF658addRuleEventType = function(req, res, next) {
  /**
   * This operation is used to add a loyalty event type to a loyalty rule.
   *
   * productSpecId String 
   * ruleId String 
   * body TMF658AddRuleEventType 
   * returns TMF658LoyaltyEventType
   **/

  console.log('tMF658addRuleEventType :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument tMF658LoyaltyManagement */
  
  const resourceType = getResourceType(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF658addRuleEventType',payload))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('tMF658addRuleEventType',payload))
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
      console.log("tMF658addRuleEventType: error=" + error.toString());
      sendError(res, error);
    });



};

exports.tMF658burnLoyaltyBalance = function(req, res, next) {
  /**
   * This operation creates a new loyalty burn transaction.
   *
   * accountId String 
   * balanceId String 
   * returns TMF658LoyaltyTransactionRef
   **/

  console.log('tMF658burnLoyaltyBalance :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument tMF658LoyaltyManagement */
  
  const resourceType = getResourceType(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF658burnLoyaltyBalance',payload))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('tMF658burnLoyaltyBalance',payload))
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
      console.log("tMF658burnLoyaltyBalance: error=" + error.toString());
      sendError(res, error);
    });



};

exports.tMF658createAction = function(req, res, next) {
  /**
   * This operation is used to create a new loyalty action.
   *
   * body TMF658LoyaltyAction 
   * returns TMF658LoyaltyAction
   **/

  console.log('tMF658createAction :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument tMF658LoyaltyManagement */
  
  const resourceType = getResourceType(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF658createAction',payload))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('tMF658createAction',payload))
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
      console.log("tMF658createAction: error=" + error.toString());
      sendError(res, error);
    });



};

exports.tMF658createCondition = function(req, res, next) {
  /**
   * This operation is used to create a new loyalty condition.
   *
   * body TMF658LoyaltyCondition 
   * returns TMF658LoyaltyCondition
   **/

  console.log('tMF658createCondition :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument tMF658LoyaltyManagement */
  
  const resourceType = getResourceType(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF658createCondition',payload))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('tMF658createCondition',payload))
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
      console.log("tMF658createCondition: error=" + error.toString());
      sendError(res, error);
    });



};

exports.tMF658createEventTypes = function(req, res, next) {
  /**
   * This operation is used to create a new loyalty event type.
   *
   * body TMF658LoyaltyEventType 
   * returns TMF658LoyaltyEventType
   **/

  console.log('tMF658createEventTypes :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument tMF658LoyaltyManagement */
  
  const resourceType = getResourceType(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF658createEventTypes',payload))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('tMF658createEventTypes',payload))
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
      console.log("tMF658createEventTypes: error=" + error.toString());
      sendError(res, error);
    });



};

exports.tMF658createMember = function(req, res, next) {
  /**
   * This operation creates a new loyalty program member.
   *
   * body TMF658LoyaltyMember 
   * returns TMF658LoyaltyMember
   **/

  console.log('tMF658createMember :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument tMF658LoyaltyManagement */
  
  const resourceType = getResourceType(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF658createMember',payload))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('tMF658createMember',payload))
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
      console.log("tMF658createMember: error=" + error.toString());
      sendError(res, error);
    });



};

exports.tMF658createMemberBalance = function(req, res, next) {
  /**
   * This operation creates a new loyalty program member account balance.
   *
   * body TMF658CreateLoyaltyBalance 
   * accountId String 
   * returns TMF658LoyaltyBalance
   **/

  console.log('tMF658createMemberBalance :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument tMF658LoyaltyManagement */
  
  const resourceType = getResourceType(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF658createMemberBalance',payload))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('tMF658createMemberBalance',payload))
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
      console.log("tMF658createMemberBalance: error=" + error.toString());
      sendError(res, error);
    });



};

exports.tMF658createProduct = function(req, res, next) {
  /**
   * This operation is used to create a new loyalty program product.
   *
   * memberId String 
   * body TMF658ProductProgramRef 
   * returns TMF658ProductProgramRef
   **/

  console.log('tMF658createProduct :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument tMF658LoyaltyManagement */
  
  const resourceType = getResourceType(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF658createProduct',payload))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('tMF658createProduct',payload))
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
      console.log("tMF658createProduct: error=" + error.toString());
      sendError(res, error);
    });



};

exports.tMF658createProductSpec = function(req, res, next) {
  /**
   * This operation is used to create a new loyalty program product specification.
   *
   * body TMF658ProgramProductSpec 
   * returns List
   **/

  console.log('tMF658createProductSpec :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument tMF658LoyaltyManagement */
  
  const resourceType = getResourceType(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF658createProductSpec',payload))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('tMF658createProductSpec',payload))
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
      console.log("tMF658createProductSpec: error=" + error.toString());
      sendError(res, error);
    });



};

exports.tMF658createRule = function(req, res, next) {
  /**
   * This operation is used to create a new loyalty rule.
   *
   * productSpecId String 
   * body TMF658CreateLoyaltyRule 
   * returns TMF658LoyaltyRule
   **/

  console.log('tMF658createRule :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument tMF658LoyaltyManagement */
  
  const resourceType = getResourceType(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF658createRule',payload))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('tMF658createRule',payload))
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
      console.log("tMF658createRule: error=" + error.toString());
      sendError(res, error);
    });



};

exports.tMF658deleteAction = function(req, res, next) {
  /**
   * This operation is used to delete a loyalty action.
   *
   * actionId String 
   * no response value expected for this operation
   **/

  console.log('tMF658deleteAction :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulDestroy */

  const actionId = String(req.swagger.params.actionId.value);

  const query = {
    id: actionId
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

exports.tMF658deleteCondition = function(req, res, next) {
  /**
   * This operation is used to delete a loyalty condition.
   *
   * conditionId String 
   * no response value expected for this operation
   **/

  console.log('tMF658deleteCondition :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulDestroy */

  const conditionId = String(req.swagger.params.conditionId.value);

  const query = {
    id: conditionId
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

exports.tMF658deleteEventTypes = function(req, res, next) {
  /**
   * This operation is used to delete a loyalty event type.
   *
   * eventTypeId String 
   * no response value expected for this operation
   **/

  console.log('tMF658deleteEventTypes :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulDestroy */

  const eventTypeId = String(req.swagger.params.eventTypeId.value);

  const query = {
    id: eventTypeId
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

exports.tMF658deleteMember = function(req, res, next) {
  /**
   * This operation deletes a loyalty program member.
   *
   * memberId String 
   * no response value expected for this operation
   **/

  console.log('tMF658deleteMember :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulDestroy */

  const memberId = String(req.swagger.params.memberId.value);

  const query = {
    id: memberId
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

exports.tMF658deleteMemberBalance = function(req, res, next) {
  /**
   * This operation updates the attributes of a loyalty program member loyalty balance present in the request body.
   *
   * accountId String 
   * balanceId String 
   * body TMF658LoyaltyBalanceUpdate 
   * returns TMF658LoyaltyBalance
   **/

  console.log('tMF658deleteMemberBalance :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulPatch */

  const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Unable to update resource");

  const resourceType = getResourceType(req);

  const balanceId = String(req.swagger.params.balanceId.value);
  const query = {
   id: balanceId
  };

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF658deleteMemberBalance',payload))
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
                  console.log("tMF658deleteMemberBalance error=" + error);
                  return sendError(res, internalError);
                });
            })
            .catch((error) => {
              console.log("tMF658deleteMemberBalance error=" + error);
              return sendError(res, internalError);
            })
          })
        .catch((error) => {
          console.log("tMF658deleteMemberBalance error=" + error);
          return sendError(res, new TError(TErrorEnum.RESOURCE_NOT_FOUND,"No resource with given id"));
        });        
      })
      .catch((error) => {
        console.log("tMF658deleteMemberBalance error=" + error);
        return sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF658deleteMemberBalance error=" + error);
    return sendError(res, error);
  });




};

exports.tMF658deleteProduct = function(req, res, next) {
  /**
   * This operation is used to delete a loyalty program product.
   *
   * memberId String 
   * programProductId String 
   * no response value expected for this operation
   **/

  console.log('tMF658deleteProduct :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulDestroy */

  const programProductId = String(req.swagger.params.programProductId.value);

  const query = {
    id: programProductId
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

exports.tMF658deleteProductSpec = function(req, res, next) {
  /**
   * Deletes a program product spec.
   *
   * productSpecId String 
   * no response value expected for this operation
   **/

  console.log('tMF658deleteProductSpec :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulDestroy */

  const productSpecId = String(req.swagger.params.productSpecId.value);

  const query = {
    id: productSpecId
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

exports.tMF658deleteRule = function(req, res, next) {
  /**
   * This operation is used to delete a loyalty rule.
   *
   * productSpecId String 
   * ruleId String 
   * no response value expected for this operation
   **/

  console.log('tMF658deleteRule :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulDestroy */

  const ruleId = String(req.swagger.params.ruleId.value);

  const query = {
    id: ruleId
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

exports.tMF658deleteRuleAction = function(req, res, next) {
  /**
   * This operation is used to remove a loyalty action from a loyalty rule.
   *
   * productSpecId String 
   * ruleId String 
   * actionId String 
   * no response value expected for this operation
   **/

  console.log('tMF658deleteRuleAction :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulDestroy */

  const actionId = String(req.swagger.params.actionId.value);

  const query = {
    id: actionId
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

exports.tMF658deleteRuleCondition = function(req, res, next) {
  /**
   * This operation is used to remove a loyalty condition from a loyalty rule.
   *
   * productSpecId String 
   * ruleId String 
   * conditionId String 
   * no response value expected for this operation
   **/

  console.log('tMF658deleteRuleCondition :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulDestroy */

  const conditionId = String(req.swagger.params.conditionId.value);

  const query = {
    id: conditionId
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

exports.tMF658deleteRuleEventType = function(req, res, next) {
  /**
   * This operation is used to remove a loyalty event type from a loyalty rule.
   *
   * productSpecId String 
   * ruleId String 
   * eventTypeId String 
   * no response value expected for this operation
   **/

  console.log('tMF658deleteRuleEventType :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulDestroy */

  const eventTypeId = String(req.swagger.params.eventTypeId.value);

  const query = {
    id: eventTypeId
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

exports.tMF658earnLoyaltyBalance = function(req, res, next) {
  /**
   * This operation creates a new loyalty earn transaction.
   *
   * accountId String 
   * balanceId String 
   * returns TMF658LoyaltyTransactionRef
   **/

  console.log('tMF658earnLoyaltyBalance :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument tMF658LoyaltyManagement */
  
  const resourceType = getResourceType(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF658earnLoyaltyBalance',payload))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('tMF658earnLoyaltyBalance',payload))
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
      console.log("tMF658earnLoyaltyBalance: error=" + error.toString());
      sendError(res, error);
    });



};

exports.tMF658getAction = function(req, res, next) {
  /**
   * This operation is used to retrieve a loyalty action.
   *
   * actionId String 
   * returns TMF658LoyaltyAction
   **/

  console.log('tMF658getAction :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulShow */

  var actionId = String(req.swagger.params.actionId.value);

  var query = mongoUtils.getMongoQuery(req);
  query.criteria.id = actionId

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
        console.log("tMF658getAction: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF658getAction: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF658getBurnTransaction = function(req, res, next) {
  /**
   * This operation retrieves a single loyalty account loyalty burn transaction on a spesific account balance.
   *
   * accountId String 
   * balanceId String 
   * transactionId String 
   * returns TMF658LoyaltyTransactionRef
   **/

  console.log('tMF658getBurnTransaction :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulShow */

  var transactionId = String(req.swagger.params.transactionId.value);

  var query = mongoUtils.getMongoQuery(req);
  query.criteria.id = transactionId

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
        console.log("tMF658getBurnTransaction: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF658getBurnTransaction: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF658getCondition = function(req, res, next) {
  /**
   * •  This operation is used to retrieve a loyalty condition.
   *
   * conditionId String 
   * returns TMF658LoyaltyCondition
   **/

  console.log('tMF658getCondition :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulShow */

  var conditionId = String(req.swagger.params.conditionId.value);

  var query = mongoUtils.getMongoQuery(req);
  query.criteria.id = conditionId

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
        console.log("tMF658getCondition: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF658getCondition: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF658getEarnTransaction = function(req, res, next) {
  /**
   * This operation retrieves a loyalty account loyalty earn transaction on a spesific account balance.
   *
   * accountId String 
   * transactionId String 
   * balanceId String 
   * returns TMF658LoyaltyTransactionRef
   **/

  console.log('tMF658getEarnTransaction :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF658getEarnTransaction: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF658getEarnTransaction: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF658getEventType = function(req, res, next) {
  /**
   * This operation is used to retrieve a loyalty event type.
   *
   * eventTypeId String 
   * returns TMF658LoyaltyEventType
   **/

  console.log('tMF658getEventType :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulShow */

  var eventTypeId = String(req.swagger.params.eventTypeId.value);

  var query = mongoUtils.getMongoQuery(req);
  query.criteria.id = eventTypeId

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
        console.log("tMF658getEventType: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF658getEventType: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF658getExecutionPoints = function(req, res, next) {
  /**
   * This operation is used to retrieve all the loyalty execution points on a loyalty product. These execution points are records of loyalty actions executed.
   *
   * memberId String 
   * programProductId String 
   * returns List
   **/

  console.log('tMF658getExecutionPoints :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF658getExecutionPoints: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF658getExecutionPoints: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF658getMember = function(req, res, next) {
  /**
   * This operation retrieves a loyalty program member by ID. The loyalty program member contains accounts and balances in logical containers.
   *
   * memberId String 
   * returns TMF658LoyaltyMember
   **/

  console.log('tMF658getMember :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulShow */

  var memberId = String(req.swagger.params.memberId.value);

  var query = mongoUtils.getMongoQuery(req);
  query.criteria.id = memberId

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
        console.log("tMF658getMember: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF658getMember: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF658getMemberBalance = function(req, res, next) {
  /**
   * This operation retrieves a loyalty program member account. The account resource is also returned within each balance entity.
   *
   * accountId String 
   * balanceId String 
   * returns TMF658LoyaltyBalance
   **/

  console.log('tMF658getMemberBalance :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulShow */

  var balanceId = String(req.swagger.params.balanceId.value);

  var query = mongoUtils.getMongoQuery(req);
  query.criteria.id = balanceId

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
        console.log("tMF658getMemberBalance: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF658getMemberBalance: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF658getMembers = function(req, res, next) {
  /**
   * This operation retrieves loyalty program members. The loyalty program member contains accounts and balances in logical containers.
   *
   * returns List
   **/

  console.log('tMF658getMembers :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF658getMembers: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF658getMembers: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF658getProduct = function(req, res, next) {
  /**
   * This operation is used to retrieve the loyalty program member’s loyalty program product.
   *
   * memberId String 
   * programProductId String 
   * returns TMF658ProductProgramRef
   **/

  console.log('tMF658getProduct :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulShow */

  var programProductId = String(req.swagger.params.programProductId.value);

  var query = mongoUtils.getMongoQuery(req);
  query.criteria.id = programProductId

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
        console.log("tMF658getProduct: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF658getProduct: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF658getProductSpec = function(req, res, next) {
  /**
   * This operation is used to retrieve a single loyalty program product specification. A loyalty program product specification contains loyalty rules.
   *
   * productSpecId String 
   * returns TMF658ProgramProductSpec
   **/

  console.log('tMF658getProductSpec :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulShow */

  var productSpecId = String(req.swagger.params.productSpecId.value);

  var query = mongoUtils.getMongoQuery(req);
  query.criteria.id = productSpecId

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
        console.log("tMF658getProductSpec: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF658getProductSpec: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF658getRule = function(req, res, next) {
  /**
   * This operation is used to retrieve a loyalty program product specification loyalty rule.
   *
   * productSpecId String 
   * ruleId String 
   * returns TMF658LoyaltyRule
   **/

  console.log('tMF658getRule :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulShow */

  var ruleId = String(req.swagger.params.ruleId.value);

  var query = mongoUtils.getMongoQuery(req);
  query.criteria.id = ruleId

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
        console.log("tMF658getRule: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF658getRule: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF658getRuleActions = function(req, res, next) {
  /**
   * his operation is used to retrieve the loyalty rule’s loyalty actions.
   *
   * productSpecId String 
   * ruleId String 
   * returns List
   **/

  console.log('tMF658getRuleActions :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF658getRuleActions: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF658getRuleActions: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF658getRuleEventTypes = function(req, res, next) {
  /**
   * This operation is used to retrieve the loyalty rule’s supported loyalty events. 
   *
   * productSpecId String 
   * ruleId String 
   * returns List
   **/

  console.log('tMF658getRuleEventTypes :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF658getRuleEventTypes: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF658getRuleEventTypes: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF658listActions = function(req, res, next) {
  /**
   * This operation is used to retrieve all the loyalty actions. A loyalty action contains a loyalty execution point.
   *
   * returns List
   **/

  console.log('tMF658listActions :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF658listActions: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF658listActions: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF658listBurnTransactions = function(req, res, next) {
  /**
   * This operation retrieves a loyalty account loyalty burn transactions on a spesific account balance.
   *
   * accountId String 
   * balanceId String 
   * returns List
   **/

  console.log('tMF658listBurnTransactions :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF658listBurnTransactions: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF658listBurnTransactions: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF658listConditions = function(req, res, next) {
  /**
   * This operation is used to retrieve all the loyalty conditions.
   *
   * returns List
   **/

  console.log('tMF658listConditions :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF658listConditions: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF658listConditions: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF658listEarnTransactions = function(req, res, next) {
  /**
   * This operation retrieves a loyalty account loyalty earn transactions on a spesific account balance.
   *
   * accountId String 
   * balanceId String 
   * returns List
   **/

  console.log('tMF658listEarnTransactions :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF658listEarnTransactions: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF658listEarnTransactions: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF658listEventTypes = function(req, res, next) {
  /**
   * This operation is used to retrieve the loyalty event types.
   *
   * returns List
   **/

  console.log('tMF658listEventTypes :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF658listEventTypes: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF658listEventTypes: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF658listMemberAccounts = function(req, res, next) {
  /**
   * This operation retrieves loyalty program member accounts.
   *
   * memberId String 
   * returns List
   **/

  console.log('tMF658listMemberAccounts :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF658listMemberAccounts: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF658listMemberAccounts: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF658listMemberBalances = function(req, res, next) {
  /**
   * This operation retrieves loyalty program member accounts. The account resource is also returned within each balance entity.
   *
   * accountId String 
   * returns List
   **/

  console.log('tMF658listMemberBalances :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF658listMemberBalances: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF658listMemberBalances: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF658listProductSpecs = function(req, res, next) {
  /**
   * This operation is used to retrieve the loyalty program product specifications. A loyalty program product specification contains loyalty rules.
   *
   * returns List
   **/

  console.log('tMF658listProductSpecs :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF658listProductSpecs: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF658listProductSpecs: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF658listProducts = function(req, res, next) {
  /**
   * This operation is used to retrieve the loyalty program member’s loyalty program products.
   *
   * memberId String 
   * returns List
   **/

  console.log('tMF658listProducts :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF658listProducts: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF658listProducts: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF658listRuleConditions = function(req, res, next) {
  /**
   * This operation is used to retrieve the loyalty rule’s loyalty conditions.
   *
   * productSpecId String 
   * ruleId String 
   * returns List
   **/

  console.log('tMF658listRuleConditions :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF658listRuleConditions: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF658listRuleConditions: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF658listRules = function(req, res, next) {
  /**
   * This operation is used to retrieve the loyalty program product specification’s loyalty rule(s).
   *
   * productSpecId String 
   * returns List
   **/

  console.log('tMF658listRules :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF658listRules: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF658listRules: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF658notifyLoyaltyEvent = function(req, res, next) {
  /**
   * This operation specifies a loyalty event that has occurred.
   *
   * body TMF658LoyaltyEvent 
   * no response value expected for this operation
   **/

  console.log('tMF658notifyLoyaltyEvent :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument tMF658LoyaltyManagement */
  
  const resourceType = getResourceType(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF658notifyLoyaltyEvent',payload))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('tMF658notifyLoyaltyEvent',payload))
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
      console.log("tMF658notifyLoyaltyEvent: error=" + error.toString());
      sendError(res, error);
    });



};

exports.tMF658patchAction = function(req, res, next) {
  /**
   * This operation partially updates a loyalty action.
   *
   * body TMF658LoyaltyAction 
   * actionId String 
   * returns TMF658LoyaltyAction
   **/

  console.log('tMF658patchAction :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulPatch */

  const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Unable to update resource");

  const resourceType = getResourceType(req);

  const actionId = String(req.swagger.params.actionId.value);
  const query = {
   id: actionId
  };

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF658patchAction',payload))
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
                  console.log("tMF658patchAction error=" + error);
                  return sendError(res, internalError);
                });
            })
            .catch((error) => {
              console.log("tMF658patchAction error=" + error);
              return sendError(res, internalError);
            })
          })
        .catch((error) => {
          console.log("tMF658patchAction error=" + error);
          return sendError(res, new TError(TErrorEnum.RESOURCE_NOT_FOUND,"No resource with given id"));
        });        
      })
      .catch((error) => {
        console.log("tMF658patchAction error=" + error);
        return sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF658patchAction error=" + error);
    return sendError(res, error);
  });




};

exports.tMF658patchCondition = function(req, res, next) {
  /**
   * This operation partially updates a loyalty condition.
   *
   * body TMF658LoyaltyCondition 
   * conditionId String 
   * returns TMF658LoyaltyCondition
   **/

  console.log('tMF658patchCondition :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulPatch */

  const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Unable to update resource");

  const resourceType = getResourceType(req);

  const conditionId = String(req.swagger.params.conditionId.value);
  const query = {
   id: conditionId
  };

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF658patchCondition',payload))
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
                  console.log("tMF658patchCondition error=" + error);
                  return sendError(res, internalError);
                });
            })
            .catch((error) => {
              console.log("tMF658patchCondition error=" + error);
              return sendError(res, internalError);
            })
          })
        .catch((error) => {
          console.log("tMF658patchCondition error=" + error);
          return sendError(res, new TError(TErrorEnum.RESOURCE_NOT_FOUND,"No resource with given id"));
        });        
      })
      .catch((error) => {
        console.log("tMF658patchCondition error=" + error);
        return sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF658patchCondition error=" + error);
    return sendError(res, error);
  });




};

exports.tMF658patchRule = function(req, res, next) {
  /**
   * This operation partially updates a loyalty rule.
   *
   * body TMF658CreateLoyaltyRule 
   * productSpecId String 
   * ruleId String 
   * returns TMF658LoyaltyRule
   **/

  console.log('tMF658patchRule :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulPatch */

  const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Unable to update resource");

  const resourceType = getResourceType(req);

  const ruleId = String(req.swagger.params.ruleId.value);
  const query = {
   id: ruleId
  };

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF658patchRule',payload))
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
                  console.log("tMF658patchRule error=" + error);
                  return sendError(res, internalError);
                });
            })
            .catch((error) => {
              console.log("tMF658patchRule error=" + error);
              return sendError(res, internalError);
            })
          })
        .catch((error) => {
          console.log("tMF658patchRule error=" + error);
          return sendError(res, new TError(TErrorEnum.RESOURCE_NOT_FOUND,"No resource with given id"));
        });        
      })
      .catch((error) => {
        console.log("tMF658patchRule error=" + error);
        return sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF658patchRule error=" + error);
    return sendError(res, error);
  });




};

exports.tMF658updateAction = function(req, res, next) {
  /**
   * Update the complete loyalty action.
   *
   * body TMF658LoyaltyAction 
   * actionId String 
   * returns TMF658LoyaltyAction
   **/

  console.log('tMF658updateAction :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulUpdate */

  const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Unable to update resource");

  const resourceType = getResourceType(req);
  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF658updateAction',payload))
    .then(payload => {

      const actionId = String(req.swagger.params.actionId.value);
      const query = {
       id: actionId
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
        console.log("tMF658updateAction: error=" + error.toString());
        sendError(res, internalError);
      });
    })
    .catch(error => {
      console.log("tMF658updateAction: error=" + error.toString());
      sendError(res, error);
    });




};

exports.tMF658updateCondition = function(req, res, next) {
  /**
   * Update the complete loyalty condition.
   *
   * body TMF658LoyaltyCondition 
   * conditionId String 
   * returns TMF658LoyaltyCondition
   **/

  console.log('tMF658updateCondition :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulUpdate */

  const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Unable to update resource");

  const resourceType = getResourceType(req);
  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF658updateCondition',payload))
    .then(payload => {

      const conditionId = String(req.swagger.params.conditionId.value);
      const query = {
       id: conditionId
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
        console.log("tMF658updateCondition: error=" + error.toString());
        sendError(res, internalError);
      });
    })
    .catch(error => {
      console.log("tMF658updateCondition: error=" + error.toString());
      sendError(res, error);
    });




};

exports.tMF658updateEventTypes = function(req, res, next) {
  /**
   * 
   *
   * body TMF658LoyaltyEventType 
   * eventTypeId String 
   * returns TMF658LoyaltyEventType
   **/

  console.log('tMF658updateEventTypes :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulUpdate */

  const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Unable to update resource");

  const resourceType = getResourceType(req);
  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF658updateEventTypes',payload))
    .then(payload => {

      const eventTypeId = String(req.swagger.params.eventTypeId.value);
      const query = {
       id: eventTypeId
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
        console.log("tMF658updateEventTypes: error=" + error.toString());
        sendError(res, internalError);
      });
    })
    .catch(error => {
      console.log("tMF658updateEventTypes: error=" + error.toString());
      sendError(res, error);
    });




};

exports.tMF658updateEventTypes1 = function(req, res, next) {
  /**
   * 
   *
   * body TMF658UpdateEventTypesrequest 
   * eventTypeId String 
   * returns TMF658LoyaltyEventType
   **/

  console.log('tMF658updateEventTypes1 :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulPatch */

  const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Unable to update resource");

  const resourceType = getResourceType(req);

  const eventTypeId = String(req.swagger.params.eventTypeId.value);
  const query = {
   id: eventTypeId
  };

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF658updateEventTypes1',payload))
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
                  console.log("tMF658updateEventTypes1 error=" + error);
                  return sendError(res, internalError);
                });
            })
            .catch((error) => {
              console.log("tMF658updateEventTypes1 error=" + error);
              return sendError(res, internalError);
            })
          })
        .catch((error) => {
          console.log("tMF658updateEventTypes1 error=" + error);
          return sendError(res, new TError(TErrorEnum.RESOURCE_NOT_FOUND,"No resource with given id"));
        });        
      })
      .catch((error) => {
        console.log("tMF658updateEventTypes1 error=" + error);
        return sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF658updateEventTypes1 error=" + error);
    return sendError(res, error);
  });




};

exports.tMF658updateMember = function(req, res, next) {
  /**
   * This operation updates the attributes of a loyalty program member present in the request body.
   *
   * body TMF658UpdateLoyaltyMember 
   * memberId String 
   * returns TMF658LoyaltyMember
   **/

  console.log('tMF658updateMember :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulPatch */

  const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Unable to update resource");

  const resourceType = getResourceType(req);

  const memberId = String(req.swagger.params.memberId.value);
  const query = {
   id: memberId
  };

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF658updateMember',payload))
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
                  console.log("tMF658updateMember error=" + error);
                  return sendError(res, internalError);
                });
            })
            .catch((error) => {
              console.log("tMF658updateMember error=" + error);
              return sendError(res, internalError);
            })
          })
        .catch((error) => {
          console.log("tMF658updateMember error=" + error);
          return sendError(res, new TError(TErrorEnum.RESOURCE_NOT_FOUND,"No resource with given id"));
        });        
      })
      .catch((error) => {
        console.log("tMF658updateMember error=" + error);
        return sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF658updateMember error=" + error);
    return sendError(res, error);
  });




};

exports.tMF658updateMemberBalance = function(req, res, next) {
  /**
   * This operation deletes a loyalty program member account.
   *
   * accountId String 
   * balanceId String 
   * no response value expected for this operation
   **/

  console.log('tMF658updateMemberBalance :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulDestroy */

  const balanceId = String(req.swagger.params.balanceId.value);

  const query = {
    id: balanceId
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

exports.tMF658updateProduct = function(req, res, next) {
  /**
   * This operation partially updates a loyalty program member’s loyalty program product.
   *
   * memberId String 
   * programProductId String 
   * body TMF658ProductProgramUpdateRef 
   * returns TMF658ProductProgramRef
   **/

  console.log('tMF658updateProduct :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulPatch */

  const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Unable to update resource");

  const resourceType = getResourceType(req);

  const programProductId = String(req.swagger.params.programProductId.value);
  const query = {
   id: programProductId
  };

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF658updateProduct',payload))
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
                  console.log("tMF658updateProduct error=" + error);
                  return sendError(res, internalError);
                });
            })
            .catch((error) => {
              console.log("tMF658updateProduct error=" + error);
              return sendError(res, internalError);
            })
          })
        .catch((error) => {
          console.log("tMF658updateProduct error=" + error);
          return sendError(res, new TError(TErrorEnum.RESOURCE_NOT_FOUND,"No resource with given id"));
        });        
      })
      .catch((error) => {
        console.log("tMF658updateProduct error=" + error);
        return sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF658updateProduct error=" + error);
    return sendError(res, error);
  });




};

exports.tMF658updateProductSpec = function(req, res, next) {
  /**
   * Updates a loyalty program product spec.
   *
   * body TMF658UpdateProductSpec 
   * productSpecId String 
   * returns TMF658ProgramProductSpec
   **/

  console.log('tMF658updateProductSpec :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulPatch */

  const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Unable to update resource");

  const resourceType = getResourceType(req);

  const productSpecId = String(req.swagger.params.productSpecId.value);
  const query = {
   id: productSpecId
  };

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF658updateProductSpec',payload))
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
                  console.log("tMF658updateProductSpec error=" + error);
                  return sendError(res, internalError);
                });
            })
            .catch((error) => {
              console.log("tMF658updateProductSpec error=" + error);
              return sendError(res, internalError);
            })
          })
        .catch((error) => {
          console.log("tMF658updateProductSpec error=" + error);
          return sendError(res, new TError(TErrorEnum.RESOURCE_NOT_FOUND,"No resource with given id"));
        });        
      })
      .catch((error) => {
        console.log("tMF658updateProductSpec error=" + error);
        return sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF658updateProductSpec error=" + error);
    return sendError(res, error);
  });




};

exports.tMF658updateRule = function(req, res, next) {
  /**
   * Update the complete loyalty rule.
   *
   * productSpecId String 
   * ruleId String 
   * body TMF658CreateLoyaltyRule 
   * returns TMF658LoyaltyRule
   **/

  console.log('tMF658updateRule :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulUpdate */

  const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Unable to update resource");

  const resourceType = getResourceType(req);
  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF658updateRule',payload))
    .then(payload => {

      const ruleId = String(req.swagger.params.ruleId.value);
      const query = {
       id: ruleId
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
        console.log("tMF658updateRule: error=" + error.toString());
        sendError(res, internalError);
      });
    })
    .catch(error => {
      console.log("tMF658updateRule: error=" + error.toString());
      sendError(res, error);
    });




};



