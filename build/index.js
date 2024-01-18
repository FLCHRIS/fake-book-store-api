"use strict";

var _app = _interopRequireDefault(require("./app"));
require("./database");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var PORT = process.env.PORT;
_app["default"].listen(PORT, function () {
  console.log("Server listen on port ".concat(PORT));
});