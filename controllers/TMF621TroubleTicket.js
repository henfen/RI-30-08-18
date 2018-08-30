'use strict';

var url = require('url');

var TMF621TroubleTicket = require('../service/TMF621TroubleTicketService');

module.exports.tMF621createTroubleTicket = function tMF621createTroubleTicket (req, res, next) {
  TMF621TroubleTicket.tMF621createTroubleTicket(req, res, next);
};

module.exports.tMF621deleteTroubleTicket = function tMF621deleteTroubleTicket (req, res, next) {
  TMF621TroubleTicket.tMF621deleteTroubleTicket(req, res, next);
};

module.exports.tMF621listTroubleTicket = function tMF621listTroubleTicket (req, res, next) {
  TMF621TroubleTicket.tMF621listTroubleTicket(req, res, next);
};

module.exports.tMF621patchTroubleTicket = function tMF621patchTroubleTicket (req, res, next) {
  TMF621TroubleTicket.tMF621patchTroubleTicket(req, res, next);
};

module.exports.tMF621registerListener = function tMF621registerListener (req, res, next) {
  TMF621TroubleTicket.tMF621registerListener(req, res, next);
};

module.exports.tMF621retrieveTroubleTicket = function tMF621retrieveTroubleTicket (req, res, next) {
  TMF621TroubleTicket.tMF621retrieveTroubleTicket(req, res, next);
};

module.exports.tMF621unregisterListener = function tMF621unregisterListener (req, res, next) {
  TMF621TroubleTicket.tMF621unregisterListener(req, res, next);
};
