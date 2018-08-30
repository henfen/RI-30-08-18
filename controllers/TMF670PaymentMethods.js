'use strict';

var url = require('url');

var TMF670PaymentMethods = require('../service/TMF670PaymentMethodsService');

module.exports.tMF670createPaymentMethod = function tMF670createPaymentMethod (req, res, next) {
  TMF670PaymentMethods.tMF670createPaymentMethod(req, res, next);
};

module.exports.tMF670deletePaymentMethod = function tMF670deletePaymentMethod (req, res, next) {
  TMF670PaymentMethods.tMF670deletePaymentMethod(req, res, next);
};

module.exports.tMF670retrieveAssociatedPaymentMethods = function tMF670retrieveAssociatedPaymentMethods (req, res, next) {
  TMF670PaymentMethods.tMF670retrieveAssociatedPaymentMethods(req, res, next);
};

module.exports.tMF670retrievePaymentMethod = function tMF670retrievePaymentMethod (req, res, next) {
  TMF670PaymentMethods.tMF670retrievePaymentMethod(req, res, next);
};

module.exports.tMF670retrievePaymentMethods = function tMF670retrievePaymentMethods (req, res, next) {
  TMF670PaymentMethods.tMF670retrievePaymentMethods(req, res, next);
};
