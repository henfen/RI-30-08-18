'use strict';

var url = require('url');

var TMF629CustomerManagement = require('../service/TMF629CustomerManagementService');

module.exports.tMF629createCustomer = function tMF629createCustomer (req, res, next) {
  TMF629CustomerManagement.tMF629createCustomer(req, res, next);
};

module.exports.tMF629deleteCustomer = function tMF629deleteCustomer (req, res, next) {
  TMF629CustomerManagement.tMF629deleteCustomer(req, res, next);
};

module.exports.tMF629listCustomer = function tMF629listCustomer (req, res, next) {
  TMF629CustomerManagement.tMF629listCustomer(req, res, next);
};

module.exports.tMF629patchCustomer = function tMF629patchCustomer (req, res, next) {
  TMF629CustomerManagement.tMF629patchCustomer(req, res, next);
};

module.exports.tMF629registerListener = function tMF629registerListener (req, res, next) {
  TMF629CustomerManagement.tMF629registerListener(req, res, next);
};

module.exports.tMF629retrieveCustomer = function tMF629retrieveCustomer (req, res, next) {
  TMF629CustomerManagement.tMF629retrieveCustomer(req, res, next);
};

module.exports.tMF629unregisterListener = function tMF629unregisterListener (req, res, next) {
  TMF629CustomerManagement.tMF629unregisterListener(req, res, next);
};
