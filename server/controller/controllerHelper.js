var ControllerHelper = function (res) {

  /********
  sendErrorResponse is used to send the error response message
  ********/

  var sendErrorResponse = function (err) {
    err.code = isNaN(err.code) ? 500 : err.code;
    res.status(err.code || 500).send(err.message || err);
  };

  /********
  sendResponse is used to send response and result if available
  ********/

  var sendResponse = function (code, result) {
    res.status(code || 200).send(result);
  };


  return {
    sendResponse: sendResponse,
    sendErrorResponse: sendErrorResponse,
  };
};

module.exports = ControllerHelper;
