'use strict';

var url = require('url');

var TMF691FederatedIdentity = require('../service/TMF691FederatedIdentityService');

module.exports.tMF691retrieveUserIdentity = function tMF691retrieveUserIdentity (req, res, next) {
  TMF691FederatedIdentity.tMF691retrieveUserIdentity(req, res, next);
};
