"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _jwt = _interopRequireDefault(require("../middlewares/jwt"));

var _preguntasControllers = _interopRequireDefault(require("../controllers/preguntasControllers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = (0, _express.Router)(); // router.use( validateJwt )

router.get('/', _preguntasControllers["default"].obtenerPreguntas);
router.post('/', _preguntasControllers["default"].crearPreguntas);
router.get('/:id', _preguntasControllers["default"].obtenerPreguntaId);
router["delete"]('/:id', _preguntasControllers["default"].eliminarPreguntas);
router.put('/:id', _preguntasControllers["default"].actualizarPreguntas);
var _default = router;
exports["default"] = _default;