'use strict';

var url = require('url');

var TMF652ResourceOrderManagement = require('../service/TMF652ResourceOrderManagementService');

module.exports.tMF652createResourceOrder = function tMF652createResourceOrder (req, res, next) {
  TMF652ResourceOrderManagement.tMF652createResourceOrder(req, res, next);
};

module.exports.tMF652deleteResourceOrder = function tMF652deleteResourceOrder (req, res, next) {
  TMF652ResourceOrderManagement.tMF652deleteResourceOrder(req, res, next);
};

module.exports.tMF652listResourceOrder = function tMF652listResourceOrder (req, res, next) {
  TMF652ResourceOrderManagement.tMF652listResourceOrder(req, res, next);
};

module.exports.tMF652patchResourceOrder = function tMF652patchResourceOrder (req, res, next) {
  TMF652ResourceOrderManagement.tMF652patchResourceOrder(req, res, next);
};

module.exports.tMF652registerListener = function tMF652registerListener (req, res, next) {
  TMF652ResourceOrderManagement.tMF652registerListener(req, res, next);
};

module.exports.tMF652retrieveResourceOrder = function tMF652retrieveResourceOrder (req, res, next) {
  TMF652ResourceOrderManagement.tMF652retrieveResourceOrder(req, res, next);
};

module.exports.tMF652unregisterListener = function tMF652unregisterListener (req, res, next) {
  TMF652ResourceOrderManagement.tMF652unregisterListener(req, res, next);
};
