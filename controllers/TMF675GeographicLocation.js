'use strict';

var url = require('url');

var TMF675GeographicLocation = require('../service/TMF675GeographicLocationService');

module.exports.tMF675geographicLocationFind = function tMF675geographicLocationFind (req, res, next) {
  TMF675GeographicLocation.tMF675geographicLocationFind(req, res, next);
};

module.exports.tMF675geographicLocationGet = function tMF675geographicLocationGet (req, res, next) {
  TMF675GeographicLocation.tMF675geographicLocationGet(req, res, next);
};

module.exports.tMF675hubCreate = function tMF675hubCreate (req, res, next) {
  TMF675GeographicLocation.tMF675hubCreate(req, res, next);
};

module.exports.tMF675hubDelete = function tMF675hubDelete (req, res, next) {
  TMF675GeographicLocation.tMF675hubDelete(req, res, next);
};

module.exports.tMF675retrieveGeographicLocationCreate = function tMF675retrieveGeographicLocationCreate (req, res, next) {
  TMF675GeographicLocation.tMF675retrieveGeographicLocationCreate(req, res, next);
};

module.exports.tMF675retrieveGeographicLocationFind = function tMF675retrieveGeographicLocationFind (req, res, next) {
  TMF675GeographicLocation.tMF675retrieveGeographicLocationFind(req, res, next);
};

module.exports.tMF675retrieveGeographicLocationGet = function tMF675retrieveGeographicLocationGet (req, res, next) {
  TMF675GeographicLocation.tMF675retrieveGeographicLocationGet(req, res, next);
};

module.exports.tMF675retrieveLocationRelationCreate = function tMF675retrieveLocationRelationCreate (req, res, next) {
  TMF675GeographicLocation.tMF675retrieveLocationRelationCreate(req, res, next);
};

module.exports.tMF675retrieveLocationRelationFind = function tMF675retrieveLocationRelationFind (req, res, next) {
  TMF675GeographicLocation.tMF675retrieveLocationRelationFind(req, res, next);
};

module.exports.tMF675retrieveLocationRelationGet = function tMF675retrieveLocationRelationGet (req, res, next) {
  TMF675GeographicLocation.tMF675retrieveLocationRelationGet(req, res, next);
};
