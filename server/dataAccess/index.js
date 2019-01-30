var Bluebird = require("bluebird"),
  mysql = require("mysql"),
  dbConfig = require("../systemConfig").database;

var DataAccess = function () {
  var executeQuery = function (query) {
    return new Bluebird(function (resolve, reject) {
      console.log('Getting connection...');
      var connection = mysql.createConnection({
        host: dbConfig.host,
        user: dbConfig.username,
        password: dbConfig.password,
        database: dbConfig.name
      });
      console.log('Successfully connected.');
      connection.connect();
      console.log('Successfully created a new connection object.');
      console.log('Running query: ', query);
      connection.query(query, function (err, result) {
        if (err) {
          console.error('Error running query!!\n', err);
          reject(err);
        }
        console.log('Successfully got result: ', result);
        connection.end();
        console.log('Successfully ended connection.');
        resolve(result);
      });
    });
  };

  return {
    executeQuery: executeQuery
  };
};
module.exports = DataAccess;
