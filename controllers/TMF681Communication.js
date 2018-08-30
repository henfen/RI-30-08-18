'use strict';

var url = require('url');

var TMF681Communication = require('../service/TMF681CommunicationService');

module.exports.tMF681createCommunicationMessage = function tMF681createCommunicationMessage (req, res, next) {
  TMF681Communication.tMF681createCommunicationMessage(req, res, next);
};

module.exports.tMF681createsanewCommunicationMessageandsendit = function tMF681createsanewCommunicationMessageandsendit (req, res, next) {
  TMF681Communication.tMF681createsanewCommunicationMessageandsendit(req, res, next);
};

module.exports.tMF681deleteCommunicationMessage = function tMF681deleteCommunicationMessage (req, res, next) {
  TMF681Communication.tMF681deleteCommunicationMessage(req, res, next);
};

module.exports.tMF681listCommunicationMessage = function tMF681listCommunicationMessage (req, res, next) {
  TMF681Communication.tMF681listCommunicationMessage(req, res, next);
};

module.exports.tMF681patchCommunicationMessage = function tMF681patchCommunicationMessage (req, res, next) {
  TMF681Communication.tMF681patchCommunicationMessage(req, res, next);
};

module.exports.tMF681registerListener = function tMF681registerListener (req, res, next) {
  TMF681Communication.tMF681registerListener(req, res, next);
};

module.exports.tMF681retrieveCommunicationMessage = function tMF681retrieveCommunicationMessage (req, res, next) {
  TMF681Communication.tMF681retrieveCommunicationMessage(req, res, next);
};

module.exports.tMF681sendsaCommunicationMessage = function tMF681sendsaCommunicationMessage (req, res, next) {
  TMF681Communication.tMF681sendsaCommunicationMessage(req, res, next);
};

module.exports.tMF681unregisterListener = function tMF681unregisterListener (req, res, next) {
  TMF681Communication.tMF681unregisterListener(req, res, next);
};
