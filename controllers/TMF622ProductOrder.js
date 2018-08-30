'use strict';

var url = require('url');

var TMF622ProductOrder = require('../service/TMF622ProductOrderService');

module.exports.tMF622productOrderCreate = function tMF622productOrderCreate (req, res, next) {
  TMF622ProductOrder.tMF622productOrderCreate(req, res, next);
};

module.exports.tMF622productOrderDelete = function tMF622productOrderDelete (req, res, next) {
  TMF622ProductOrder.tMF622productOrderDelete(req, res, next);
};

module.exports.tMF622productOrderFind = function tMF622productOrderFind (req, res, next) {
  TMF622ProductOrder.tMF622productOrderFind(req, res, next);
};

module.exports.tMF622productOrderGet = function tMF622productOrderGet (req, res, next) {
  TMF622ProductOrder.tMF622productOrderGet(req, res, next);
};

module.exports.tMF622productOrderPatch = function tMF622productOrderPatch (req, res, next) {
  TMF622ProductOrder.tMF622productOrderPatch(req, res, next);
};
