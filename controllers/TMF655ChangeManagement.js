'use strict';

var url = require('url');

var TMF655ChangeManagement = require('../service/TMF655ChangeManagementService');

module.exports.tMF655createChangeRequest = function tMF655createChangeRequest (req, res, next) {
  TMF655ChangeManagement.tMF655createChangeRequest(req, res, next);
};

module.exports.tMF655deleteChangeRequest = function tMF655deleteChangeRequest (req, res, next) {
  TMF655ChangeManagement.tMF655deleteChangeRequest(req, res, next);
};

module.exports.tMF655listChangeRequest = function tMF655listChangeRequest (req, res, next) {
  TMF655ChangeManagement.tMF655listChangeRequest(req, res, next);
};

module.exports.tMF655patchChangeRequest = function tMF655patchChangeRequest (req, res, next) {
  TMF655ChangeManagement.tMF655patchChangeRequest(req, res, next);
};

module.exports.tMF655registerListener = function tMF655registerListener (req, res, next) {
  TMF655ChangeManagement.tMF655registerListener(req, res, next);
};

module.exports.tMF655retrieveChangeRequest = function tMF655retrieveChangeRequest (req, res, next) {
  TMF655ChangeManagement.tMF655retrieveChangeRequest(req, res, next);
};

module.exports.tMF655unregisterListener = function tMF655unregisterListener (req, res, next) {
  TMF655ChangeManagement.tMF655unregisterListener(req, res, next);
};
