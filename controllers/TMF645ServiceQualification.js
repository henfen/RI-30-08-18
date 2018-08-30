'use strict';

var url = require('url');

var TMF645ServiceQualification = require('../service/TMF645ServiceQualificationService');

module.exports.tMF645hubCreate = function tMF645hubCreate (req, res, next) {
  TMF645ServiceQualification.tMF645hubCreate(req, res, next);
};

module.exports.tMF645hubDelete = function tMF645hubDelete (req, res, next) {
  TMF645ServiceQualification.tMF645hubDelete(req, res, next);
};

module.exports.tMF645serviceQualificationCreate = function tMF645serviceQualificationCreate (req, res, next) {
  TMF645ServiceQualification.tMF645serviceQualificationCreate(req, res, next);
};

module.exports.tMF645serviceQualificationDelete = function tMF645serviceQualificationDelete (req, res, next) {
  TMF645ServiceQualification.tMF645serviceQualificationDelete(req, res, next);
};

module.exports.tMF645serviceQualificationFind = function tMF645serviceQualificationFind (req, res, next) {
  TMF645ServiceQualification.tMF645serviceQualificationFind(req, res, next);
};

module.exports.tMF645serviceQualificationGet = function tMF645serviceQualificationGet (req, res, next) {
  TMF645ServiceQualification.tMF645serviceQualificationGet(req, res, next);
};

module.exports.tMF645serviceQualificationPatch = function tMF645serviceQualificationPatch (req, res, next) {
  TMF645ServiceQualification.tMF645serviceQualificationPatch(req, res, next);
};
