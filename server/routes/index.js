'use strict';

var express = require('express'),
  router = express.Router();

var Controller = require("../controller");

module.exports = function () {

  var controller = new Controller();

  router.get('/getUsers', controller.getUsers);
  router.post('/addUser', controller.addUser);
  router.get('/validateUser', controller.validateUser);

  return router;
};
