'use strict';

var url = require('url');

var TMF641ServiceOrder = require('../service/TMF641ServiceOrderService');

module.exports.tMF641hubCreate = function tMF641hubCreate (req, res, next) {
  TMF641ServiceOrder.tMF641hubCreate(req, res, next);
};

module.exports.tMF641hubDelete = function tMF641hubDelete (req, res, next) {
  TMF641ServiceOrder.tMF641hubDelete(req, res, next);
};

module.exports.tMF641hubFind = function tMF641hubFind (req, res, next) {
  TMF641ServiceOrder.tMF641hubFind(req, res, next);
};

module.exports.tMF641hubGet = function tMF641hubGet (req, res, next) {
  TMF641ServiceOrder.tMF641hubGet(req, res, next);
};

module.exports.tMF641hubUpdate = function tMF641hubUpdate (req, res, next) {
  TMF641ServiceOrder.tMF641hubUpdate(req, res, next);
};

module.exports.tMF641serviceOrderCreate = function tMF641serviceOrderCreate (req, res, next) {
  TMF641ServiceOrder.tMF641serviceOrderCreate(req, res, next);
};

module.exports.tMF641serviceOrderDelete = function tMF641serviceOrderDelete (req, res, next) {
  TMF641ServiceOrder.tMF641serviceOrderDelete(req, res, next);
};

module.exports.tMF641serviceOrderFind = function tMF641serviceOrderFind (req, res, next) {
  TMF641ServiceOrder.tMF641serviceOrderFind(req, res, next);
};

module.exports.tMF641serviceOrderGet = function tMF641serviceOrderGet (req, res, next) {
  TMF641ServiceOrder.tMF641serviceOrderGet(req, res, next);
};

module.exports.tMF641serviceOrderPatch = function tMF641serviceOrderPatch (req, res, next) {
  TMF641ServiceOrder.tMF641serviceOrderPatch(req, res, next);
};
