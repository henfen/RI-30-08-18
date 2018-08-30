'use strict';

var url = require('url');

var TMF653ServiceTestManagement = require('../service/TMF653ServiceTestManagementService');

module.exports.tMF653createServiceTest = function tMF653createServiceTest (req, res, next) {
  TMF653ServiceTestManagement.tMF653createServiceTest(req, res, next);
};

module.exports.tMF653createServiceTestSpecification = function tMF653createServiceTestSpecification (req, res, next) {
  TMF653ServiceTestManagement.tMF653createServiceTestSpecification(req, res, next);
};

module.exports.tMF653deleteServiceTest = function tMF653deleteServiceTest (req, res, next) {
  TMF653ServiceTestManagement.tMF653deleteServiceTest(req, res, next);
};

module.exports.tMF653deleteServiceTestSpecification = function tMF653deleteServiceTestSpecification (req, res, next) {
  TMF653ServiceTestManagement.tMF653deleteServiceTestSpecification(req, res, next);
};

module.exports.tMF653listServiceTest = function tMF653listServiceTest (req, res, next) {
  TMF653ServiceTestManagement.tMF653listServiceTest(req, res, next);
};

module.exports.tMF653listServiceTestSpecification = function tMF653listServiceTestSpecification (req, res, next) {
  TMF653ServiceTestManagement.tMF653listServiceTestSpecification(req, res, next);
};

module.exports.tMF653patchServiceTest = function tMF653patchServiceTest (req, res, next) {
  TMF653ServiceTestManagement.tMF653patchServiceTest(req, res, next);
};

module.exports.tMF653patchServiceTestSpecification = function tMF653patchServiceTestSpecification (req, res, next) {
  TMF653ServiceTestManagement.tMF653patchServiceTestSpecification(req, res, next);
};

module.exports.tMF653registerListener = function tMF653registerListener (req, res, next) {
  TMF653ServiceTestManagement.tMF653registerListener(req, res, next);
};

module.exports.tMF653retrieveServiceTest = function tMF653retrieveServiceTest (req, res, next) {
  TMF653ServiceTestManagement.tMF653retrieveServiceTest(req, res, next);
};

module.exports.tMF653retrieveServiceTestSpecification = function tMF653retrieveServiceTestSpecification (req, res, next) {
  TMF653ServiceTestManagement.tMF653retrieveServiceTestSpecification(req, res, next);
};

module.exports.tMF653unregisterListener = function tMF653unregisterListener (req, res, next) {
  TMF653ServiceTestManagement.tMF653unregisterListener(req, res, next);
};
