'use strict';

var url = require('url');

var TMF684ShipmentTracking = require('../service/TMF684ShipmentTrackingService');

module.exports.tMF684createTracking = function tMF684createTracking (req, res, next) {
  TMF684ShipmentTracking.tMF684createTracking(req, res, next);
};

module.exports.tMF684createTrackingCheckpoint = function tMF684createTrackingCheckpoint (req, res, next) {
  TMF684ShipmentTracking.tMF684createTrackingCheckpoint(req, res, next);
};

module.exports.tMF684deleteTracking = function tMF684deleteTracking (req, res, next) {
  TMF684ShipmentTracking.tMF684deleteTracking(req, res, next);
};

module.exports.tMF684modifyTracking = function tMF684modifyTracking (req, res, next) {
  TMF684ShipmentTracking.tMF684modifyTracking(req, res, next);
};

module.exports.tMF684retrieveTracking = function tMF684retrieveTracking (req, res, next) {
  TMF684ShipmentTracking.tMF684retrieveTracking(req, res, next);
};

module.exports.tMF684retrieveTrackings = function tMF684retrieveTrackings (req, res, next) {
  TMF684ShipmentTracking.tMF684retrieveTrackings(req, res, next);
};
