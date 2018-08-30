'use strict';

var url = require('url');

var TMF671Promotion = require('../service/TMF671PromotionService');

module.exports.tMF671createPromotion = function tMF671createPromotion (req, res, next) {
  TMF671Promotion.tMF671createPromotion(req, res, next);
};

module.exports.tMF671deletePromotion = function tMF671deletePromotion (req, res, next) {
  TMF671Promotion.tMF671deletePromotion(req, res, next);
};

module.exports.tMF671listPromotion = function tMF671listPromotion (req, res, next) {
  TMF671Promotion.tMF671listPromotion(req, res, next);
};

module.exports.tMF671patchPromotion = function tMF671patchPromotion (req, res, next) {
  TMF671Promotion.tMF671patchPromotion(req, res, next);
};

module.exports.tMF671registerListener = function tMF671registerListener (req, res, next) {
  TMF671Promotion.tMF671registerListener(req, res, next);
};

module.exports.tMF671retrievePromotion = function tMF671retrievePromotion (req, res, next) {
  TMF671Promotion.tMF671retrievePromotion(req, res, next);
};

module.exports.tMF671unregisterListener = function tMF671unregisterListener (req, res, next) {
  TMF671Promotion.tMF671unregisterListener(req, res, next);
};
