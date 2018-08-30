'use strict';

var url = require('url');

var TMF663ShoppingCart = require('../service/TMF663ShoppingCartService');

module.exports.tMF663createShoppingCart = function tMF663createShoppingCart (req, res, next) {
  TMF663ShoppingCart.tMF663createShoppingCart(req, res, next);
};

module.exports.tMF663deleteShoppingCart = function tMF663deleteShoppingCart (req, res, next) {
  TMF663ShoppingCart.tMF663deleteShoppingCart(req, res, next);
};

module.exports.tMF663listShoppingCart = function tMF663listShoppingCart (req, res, next) {
  TMF663ShoppingCart.tMF663listShoppingCart(req, res, next);
};

module.exports.tMF663patchShoppingCart = function tMF663patchShoppingCart (req, res, next) {
  TMF663ShoppingCart.tMF663patchShoppingCart(req, res, next);
};

module.exports.tMF663registerListener = function tMF663registerListener (req, res, next) {
  TMF663ShoppingCart.tMF663registerListener(req, res, next);
};

module.exports.tMF663retrieveShoppingCart = function tMF663retrieveShoppingCart (req, res, next) {
  TMF663ShoppingCart.tMF663retrieveShoppingCart(req, res, next);
};

module.exports.tMF663unregisterListener = function tMF663unregisterListener (req, res, next) {
  TMF663ShoppingCart.tMF663unregisterListener(req, res, next);
};
