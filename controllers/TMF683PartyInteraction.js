'use strict';

var url = require('url');

var TMF683PartyInteraction = require('../service/TMF683PartyInteractionService');

module.exports.tMF683createPartyInteraction = function tMF683createPartyInteraction (req, res, next) {
  TMF683PartyInteraction.tMF683createPartyInteraction(req, res, next);
};

module.exports.tMF683modifyPartyInteractionStatus = function tMF683modifyPartyInteractionStatus (req, res, next) {
  TMF683PartyInteraction.tMF683modifyPartyInteractionStatus(req, res, next);
};

module.exports.tMF683retrievePartyInteraction = function tMF683retrievePartyInteraction (req, res, next) {
  TMF683PartyInteraction.tMF683retrievePartyInteraction(req, res, next);
};

module.exports.tMF683retrievePartyInteractions = function tMF683retrievePartyInteractions (req, res, next) {
  TMF683PartyInteraction.tMF683retrievePartyInteractions(req, res, next);
};
