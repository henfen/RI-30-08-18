'use strict';

var url = require('url');

var TMF651AgreementManagement = require('../service/TMF651AgreementManagementService');

module.exports.tMF651createAgreement = function tMF651createAgreement (req, res, next) {
  TMF651AgreementManagement.tMF651createAgreement(req, res, next);
};

module.exports.tMF651createAgreementSpecification = function tMF651createAgreementSpecification (req, res, next) {
  TMF651AgreementManagement.tMF651createAgreementSpecification(req, res, next);
};

module.exports.tMF651deleteAgreement = function tMF651deleteAgreement (req, res, next) {
  TMF651AgreementManagement.tMF651deleteAgreement(req, res, next);
};

module.exports.tMF651deleteAgreementSpecification = function tMF651deleteAgreementSpecification (req, res, next) {
  TMF651AgreementManagement.tMF651deleteAgreementSpecification(req, res, next);
};

module.exports.tMF651listAgreement = function tMF651listAgreement (req, res, next) {
  TMF651AgreementManagement.tMF651listAgreement(req, res, next);
};

module.exports.tMF651listAgreementSpecification = function tMF651listAgreementSpecification (req, res, next) {
  TMF651AgreementManagement.tMF651listAgreementSpecification(req, res, next);
};

module.exports.tMF651patchAgreement = function tMF651patchAgreement (req, res, next) {
  TMF651AgreementManagement.tMF651patchAgreement(req, res, next);
};

module.exports.tMF651patchAgreementSpecification = function tMF651patchAgreementSpecification (req, res, next) {
  TMF651AgreementManagement.tMF651patchAgreementSpecification(req, res, next);
};

module.exports.tMF651registerListener = function tMF651registerListener (req, res, next) {
  TMF651AgreementManagement.tMF651registerListener(req, res, next);
};

module.exports.tMF651retrieveAgreement = function tMF651retrieveAgreement (req, res, next) {
  TMF651AgreementManagement.tMF651retrieveAgreement(req, res, next);
};

module.exports.tMF651retrieveAgreementSpecification = function tMF651retrieveAgreementSpecification (req, res, next) {
  TMF651AgreementManagement.tMF651retrieveAgreementSpecification(req, res, next);
};

module.exports.tMF651unregisterListener = function tMF651unregisterListener (req, res, next) {
  TMF651AgreementManagement.tMF651unregisterListener(req, res, next);
};
