"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = require("body-parser");

var _morgan = _interopRequireDefault(require("morgan"));

var _cors = _interopRequireDefault(require("cors"));

var _preguntasRoutes = _interopRequireDefault(require("./routes/preguntasRoutes"));

var _respuestasRoutes = _interopRequireDefault(require("./routes/respuestasRoutes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
/* middlewares */

app.use((0, _morgan["default"])('dev')); //para ver las petiociones que llegan al servidor

app.use((0, _bodyParser.json)()); // para procesar datos en formato json

app.use((0, _cors["default"])()); //Rutas

app.use('/api/preguntas', _preguntasRoutes["default"]);
app.use('/api/respuestas', _respuestasRoutes["default"]);
var _default = app;
exports["default"] = _default;