'use strict';

var url = require('url');

var TMF672UserRolesPermissions = require('../service/TMF672UserRolesPermissionsService');

module.exports.tMF672createPermission = function tMF672createPermission (req, res, next) {
  TMF672UserRolesPermissions.tMF672createPermission(req, res, next);
};

module.exports.tMF672createUserRole = function tMF672createUserRole (req, res, next) {
  TMF672UserRolesPermissions.tMF672createUserRole(req, res, next);
};

module.exports.tMF672retrievePermission = function tMF672retrievePermission (req, res, next) {
  TMF672UserRolesPermissions.tMF672retrievePermission(req, res, next);
};

module.exports.tMF672retrievePermissions = function tMF672retrievePermissions (req, res, next) {
  TMF672UserRolesPermissions.tMF672retrievePermissions(req, res, next);
};

module.exports.tMF672retrieveRoles = function tMF672retrieveRoles (req, res, next) {
  TMF672UserRolesPermissions.tMF672retrieveRoles(req, res, next);
};

module.exports.tMF672retrieveUserRole = function tMF672retrieveUserRole (req, res, next) {
  TMF672UserRolesPermissions.tMF672retrieveUserRole(req, res, next);
};
