"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _jwt = _interopRequireDefault(require("../middlewares/jwt"));

var _respuestasControllers = _interopRequireDefault(require("../controllers/respuestasControllers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = (0, _express.Router)();
router.post('/', _respuestasControllers["default"].crearRespuestas);
router.use(_jwt["default"]);
router.get('/', _respuestasControllers["default"].obtenerRespuestas);
router.get('/:id', _respuestasControllers["default"].obtenerRespuestaId);
router["delete"]('/:id', _respuestasControllers["default"].eliminarRespuestas);
router.put('/:id', _respuestasControllers["default"].actualizarRespuestas);
var _default = router;
exports["default"] = _default;