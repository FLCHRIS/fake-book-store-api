"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var userSchema = new _mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    firstname: {
      type: String,
      required: true
    },
    lastname: {
      type: String,
      required: true
    }
  }
}, {
  versionKey: false
});
var _default = exports["default"] = (0, _mongoose.model)('User', userSchema);