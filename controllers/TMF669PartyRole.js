'use strict';

var url = require('url');

var TMF669PartyRole = require('../service/TMF669PartyRoleService');

module.exports.tMF669createPartyRole = function tMF669createPartyRole (req, res, next) {
  TMF669PartyRole.tMF669createPartyRole(req, res, next);
};

module.exports.tMF669deletePartyRole = function tMF669deletePartyRole (req, res, next) {
  TMF669PartyRole.tMF669deletePartyRole(req, res, next);
};

module.exports.tMF669listPartyRole = function tMF669listPartyRole (req, res, next) {
  TMF669PartyRole.tMF669listPartyRole(req, res, next);
};

module.exports.tMF669patchPartyRole = function tMF669patchPartyRole (req, res, next) {
  TMF669PartyRole.tMF669patchPartyRole(req, res, next);
};

module.exports.tMF669registerListener = function tMF669registerListener (req, res, next) {
  TMF669PartyRole.tMF669registerListener(req, res, next);
};

module.exports.tMF669retrievePartyRole = function tMF669retrievePartyRole (req, res, next) {
  TMF669PartyRole.tMF669retrievePartyRole(req, res, next);
};

module.exports.tMF669unregisterListener = function tMF669unregisterListener (req, res, next) {
  TMF669PartyRole.tMF669unregisterListener(req, res, next);
};
