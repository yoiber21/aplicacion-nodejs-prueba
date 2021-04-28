"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _pg = require("pg");

var pool = new _pg.Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'pruebaApiRest',
  password: '1001032661',
  port: 5432
});
var _default = pool;
exports["default"] = _default;