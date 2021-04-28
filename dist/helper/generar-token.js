"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var generateJwt = function generateJwt(id, nombre) {
  var SECRET_JWT_SEED = "Esto-Es-UnA-PaLabr@-SeCReta";
  return new Promise(function (resolve, reject) {
    var payload = {
      id: id,
      nombre: nombre
    };

    _jsonwebtoken["default"].sign(payload, SECRET_JWT_SEED, {
      expiresIn: '8h'
    }, function (err, token) {
      if (err) {
        console.log(err);
        reject('No se pudo generar el token');
      }

      resolve(token);
    });
  });
};

var _default = generateJwt;
exports["default"] = _default;