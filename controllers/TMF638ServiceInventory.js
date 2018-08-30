'use strict';

var url = require('url');

var TMF638ServiceInventory = require('../service/TMF638ServiceInventoryService');

module.exports.tMF638hubCreate = function tMF638hubCreate (req, res, next) {
  TMF638ServiceInventory.tMF638hubCreate(req, res, next);
};

module.exports.tMF638hubDelete = function tMF638hubDelete (req, res, next) {
  TMF638ServiceInventory.tMF638hubDelete(req, res, next);
};

module.exports.tMF638hubFind = function tMF638hubFind (req, res, next) {
  TMF638ServiceInventory.tMF638hubFind(req, res, next);
};

module.exports.tMF638hubGet = function tMF638hubGet (req, res, next) {
  TMF638ServiceInventory.tMF638hubGet(req, res, next);
};

module.exports.tMF638hubUpdate = function tMF638hubUpdate (req, res, next) {
  TMF638ServiceInventory.tMF638hubUpdate(req, res, next);
};

module.exports.tMF638serviceCreate = function tMF638serviceCreate (req, res, next) {
  TMF638ServiceInventory.tMF638serviceCreate(req, res, next);
};

module.exports.tMF638serviceDelete = function tMF638serviceDelete (req, res, next) {
  TMF638ServiceInventory.tMF638serviceDelete(req, res, next);
};

module.exports.tMF638serviceFind = function tMF638serviceFind (req, res, next) {
  TMF638ServiceInventory.tMF638serviceFind(req, res, next);
};

module.exports.tMF638serviceGet = function tMF638serviceGet (req, res, next) {
  TMF638ServiceInventory.tMF638serviceGet(req, res, next);
};

module.exports.tMF638servicePatch = function tMF638servicePatch (req, res, next) {
  TMF638ServiceInventory.tMF638servicePatch(req, res, next);
};
