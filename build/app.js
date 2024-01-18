"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _morgan = _interopRequireDefault(require("morgan"));
require("dotenv/config");
var _cors = _interopRequireDefault(require("cors"));
var _path = _interopRequireDefault(require("path"));
var _user = _interopRequireDefault(require("./routes/user.routes"));
var _auth = _interopRequireDefault(require("./routes/auth.routes"));
var _book = _interopRequireDefault(require("./routes/book.routes"));
var _category = _interopRequireDefault(require("./routes/category.routes"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var app = (0, _express["default"])();
app.use((0, _cors["default"])());
app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].json());
app.use('/images', _express["default"]["static"](_path["default"].resolve(__dirname, '../public/images')));
app.use('/api/users', _user["default"]);
app.use('/api/auth', _auth["default"]);
app.use('/api/books', _book["default"]);
app.use('/api/categories', _category["default"]);
var _default = exports["default"] = app;