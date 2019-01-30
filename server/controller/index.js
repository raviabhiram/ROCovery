var ControllerHelper = require('./controllerHelper'),
  DataAccess = require('../DataAccess'),
  util = require('util'),
  queryHelper = require('./queryHelper');

var Controller = function () {

  var getUsers = function (req, res) {
    var controllerHelper = new ControllerHelper(res),
      connection = new DataAccess();
    console.log('Getting users...');
    connection.executeQuery(queryHelper.getUsers)
      .then(function (result) {
        console.log('Successfully got users: ', result);
        controllerHelper.sendResponse(200, result);
      })
      .catch(function (err) {
        console.error('Error getting users!', err);
        controllerHelper.sendErrorResponse({
          "message": err
        });
      });
  };

  var addUser = function (req, res) {
    var controllerHelper = new ControllerHelper(res),
      connection = new DataAccess();
    console.log('Adding user...');
    var user = req.body;
    connection.executeQuery(util.format(queryHelper.addUser, user.username, user.password, user.first_name, user.last_name, user.email_id))
      .then(function (result) {
        console.log('Successfully added the user.');
        controllerHelper.sendResponse(200, "");
      })
      .catch(function (err) {
        console.error('Error getting users!', err);
        controllerHelper.sendErrorResponse({
          "message": err
        });
      });
  };

  var validateUser = function (req, res) {
    var controllerHelper = new ControllerHelper(res),
      connection = new DataAccess();
    console.log('Validating user...');
    var user = req.query;
    connection.executeQuery(util.format(queryHelper.getUser, user.username, user.password))
      .then(function (result) {
        if (result && result.length == 1) {
          console.log('Successfully validated the user.');
          controllerHelper.sendResponse(200, "");
        } else {
          console.error("Invalid username or password!");
          throw new Error("Invalid username or password!");
        }
      })
      .catch(function (err) {
        console.error('Error getting users!', err);
        controllerHelper.sendErrorResponse({
          "message": err
        });
      });
  };

  return {
    getUsers: getUsers,
    addUser: addUser,
    validateUser: validateUser
  };

};

module.exports = Controller;
