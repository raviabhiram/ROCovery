"use strict";

var express = require("express"),
  app = express(),
  http = require("http"),
  bodyParser = require("body-parser");

var Routes = require("./routes"),
  serverConfig = require("./systemConfig.json");

var routes = new Routes(),
  server = http.createServer(app);

server.timeout = 0; //set server timeout to infinity.

app.use(bodyParser.json());
app.use("/", routes);

server.listen(serverConfig.port, function (err) {
  if (err) {
    console.error('Error while starting server...', err);
  } else {
    console.error('Server started and listening on Port:', serverConfig.port);
  }
});
