'use strict';

var url = require('url');

var TMF680Recommendation = require('../service/TMF680RecommendationService');

module.exports.tMF680listRecommendation = function tMF680listRecommendation (req, res, next) {
  TMF680Recommendation.tMF680listRecommendation(req, res, next);
};

module.exports.tMF680registerListener = function tMF680registerListener (req, res, next) {
  TMF680Recommendation.tMF680registerListener(req, res, next);
};

module.exports.tMF680retrieveRecommendation = function tMF680retrieveRecommendation (req, res, next) {
  TMF680Recommendation.tMF680retrieveRecommendation(req, res, next);
};

module.exports.tMF680unregisterListener = function tMF680unregisterListener (req, res, next) {
  TMF680Recommendation.tMF680unregisterListener(req, res, next);
};
