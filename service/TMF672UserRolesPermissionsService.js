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

exports.tMF672createPermission = function(req, res, next) {
  /**
   * Create new permission
   *
   * permissionCreate TMF672PermissionCreateType The information required to create a permission resource
   * returns TMF672PermissionType
   **/

  console.log('tMF672createPermission :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument tMF672UserRolesPermissions */
  
  const resourceType = getResourceType(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF672createPermission',payload))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('tMF672createPermission',payload))
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
      console.log("tMF672createPermission: error=" + error.toString());
      sendError(res, error);
    });



};

exports.tMF672createUserRole = function(req, res, next) {
  /**
   * Create new user role
   *
   * userroleCreate TMF672UserRoleCreateType The information required to create a user role resource
   * returns TMF672UserRoleType
   **/

  console.log('tMF672createUserRole :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument tMF672UserRolesPermissions */
  
  const resourceType = getResourceType(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF672createUserRole',payload))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('tMF672createUserRole',payload))
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
      console.log("tMF672createUserRole: error=" + error.toString());
      sendError(res, error);
    });



};

exports.tMF672retrievePermission = function(req, res, next) {
  /**
   * Retrieve permission resource
   *
   * permissionId String The id of the permission to retrieve
   * fields String To obtain a subset of the resource data in the response (optional)
   * returns TMF672PermissionType
   **/

  console.log('tMF672retrievePermission :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulShow */

  var permissionId = String(req.swagger.params.permissionId.value);

  var query = mongoUtils.getMongoQuery(req);
  query.criteria.id = permissionId

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
        console.log("tMF672retrievePermission: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF672retrievePermission: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF672retrievePermissions = function(req, res, next) {
  /**
   * Retrieve list of permissions
   *
   * user.id String To obtain the list of permissions granted to a given user (optional)
   * granter.id String To obtain the list of permissions given by a given granter (optional)
   * privileges.manageableAsset.id String To obtain the list of permissions associated to an specific asset (optional)
   * privileges.manageableAsset.entityTyped String To obtain the list of permissions associated to an specific asset type (optional)
   * fields String To obtain a subset of the resource data in the response (optional)
   * returns List
   **/

  console.log('tMF672retrievePermissions :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF672retrievePermissions: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF672retrievePermissions: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF672retrieveRoles = function(req, res, next) {
  /**
   * Retrieve list of user roles
   *
   * involvementRole String To obtain the list of roles with an specific definition (optional)
   * _function String To obtain the list of roles involved with an specific function (optional)
   * action String To obtain the list of roles defined with an specific action (optional)
   * returns List
   **/

  console.log('tMF672retrieveRoles :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF672retrieveRoles: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF672retrieveRoles: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF672retrieveUserRole = function(req, res, next) {
  /**
   * Retrieve user role resource
   *
   * roleId String The id of the user role to retrieve
   * fields String To obtain a subset of the resource data in the response (optional)
   * returns TMF672UserRoleType
   **/

  console.log('tMF672retrieveUserRole :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulShow */

  var roleId = String(req.swagger.params.roleId.value);

  var query = mongoUtils.getMongoQuery(req);
  query.criteria.id = roleId

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
        console.log("tMF672retrieveUserRole: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF672retrieveUserRole: error=" + error);
    sendError(res, internalError);
  });




};



