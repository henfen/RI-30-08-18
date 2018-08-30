'use strict';

var url = require('url');

var TMF648QuoteManagement = require('../service/TMF648QuoteManagementService');

module.exports.tMF648hubCreate = function tMF648hubCreate (req, res, next) {
  TMF648QuoteManagement.tMF648hubCreate(req, res, next);
};

module.exports.tMF648hubDelete = function tMF648hubDelete (req, res, next) {
  TMF648QuoteManagement.tMF648hubDelete(req, res, next);
};

module.exports.tMF648quoteCreate = function tMF648quoteCreate (req, res, next) {
  TMF648QuoteManagement.tMF648quoteCreate(req, res, next);
};

module.exports.tMF648quoteDelete = function tMF648quoteDelete (req, res, next) {
  TMF648QuoteManagement.tMF648quoteDelete(req, res, next);
};

module.exports.tMF648quoteFind = function tMF648quoteFind (req, res, next) {
  TMF648QuoteManagement.tMF648quoteFind(req, res, next);
};

module.exports.tMF648quoteGet = function tMF648quoteGet (req, res, next) {
  TMF648QuoteManagement.tMF648quoteGet(req, res, next);
};

module.exports.tMF648quotePatch = function tMF648quotePatch (req, res, next) {
  TMF648QuoteManagement.tMF648quotePatch(req, res, next);
};
