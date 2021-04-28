"use strict";

var _express = require("express");

var _connection = _interopRequireDefault(require("../database/connection"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var crearPreguntas = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req) {
    var res,
        data,
        _args = arguments;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            res = _args.length > 1 && _args[1] !== undefined ? _args[1] : _express.response;
            data = [req.body.descripcion];
            _context.prev = 2;
            _context.next = 5;
            return _connection["default"].query("INSERT into preguntas(descripcion)  VALUES($1) ON CONFLICT DO NOTHING", data, function (error, results) {
              if (error) {
                // console.log(error);
                throw error;
              }
            });

          case 5:
            return _context.abrupt("return", res.status(200).json({
              message: "Exito al registrar"
            }));

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](2);
            console.log(_context.t0);
            return _context.abrupt("return", res.status(400).json({
              err: _context.t0
            }));

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 8]]);
  }));

  return function crearPreguntas(_x) {
    return _ref.apply(this, arguments);
  };
}();

var actualizarPreguntas = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req) {
    var res,
        id,
        data,
        _args2 = arguments;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            res = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : _express.response;
            id = req.params.id;
            data = [req.body.descripcion];
            _context2.prev = 3;
            _context2.next = 6;
            return _connection["default"].query("update  preguntas set descripcion = $1 where id = ".concat(id), data, function (error, results) {
              if (error) {
                // console.log(error);
                throw error;
              }

              res.status(200).json({
                message: "Actualizacion correcta"
              });
            });

          case 6:
            _context2.next = 12;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](3);
            console.log(_context2.t0);
            return _context2.abrupt("return", res.status(400).json({
              err: _context2.t0
            }));

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[3, 8]]);
  }));

  return function actualizarPreguntas(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

var eliminarPreguntas = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req) {
    var res,
        id,
        _args3 = arguments;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            res = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : _express.response;
            id = req.params.id;
            _context3.prev = 2;
            _context3.next = 5;
            return _connection["default"].query("DELETE FROM preguntas where id = ".concat(id), function (error, results) {
              if (error) {
                // console.log(error);
                throw error;
              }

              res.status(200).json({
                message: "Eliminada"
              });
            });

          case 5:
            _context3.next = 11;
            break;

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](2);
            console.log(_context3.t0);
            return _context3.abrupt("return", res.status(400).json({
              err: _context3.t0
            }));

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[2, 7]]);
  }));

  return function eliminarPreguntas(_x3) {
    return _ref3.apply(this, arguments);
  };
}();

var obtenerPreguntas = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req) {
    var res,
        _args4 = arguments;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            res = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : _express.response;
            _context4.next = 3;
            return _connection["default"].query('SELECT * FROM preguntas', function (error, results) {
              if (error) {
                console.log(error);
                throw error;
              }

              res.status(200).json(results.rows);
            });

          case 3:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function obtenerPreguntas(_x4) {
    return _ref4.apply(this, arguments);
  };
}();

var obtenerPreguntaId = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req) {
    var res,
        id,
        _args5 = arguments;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            res = _args5.length > 1 && _args5[1] !== undefined ? _args5[1] : _express.response;
            id = req.params.id;
            _context5.next = 4;
            return _connection["default"].query("SELECT * FROM preguntas where id = ".concat(id), function (error, results) {
              if (error) {
                console.log(error);
                throw error;
              }

              res.status(200).json(results.rows);
            });

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function obtenerPreguntaId(_x5) {
    return _ref5.apply(this, arguments);
  };
}();

module.exports = {
  crearPreguntas: crearPreguntas,
  obtenerPreguntas: obtenerPreguntas,
  actualizarPreguntas: actualizarPreguntas,
  eliminarPreguntas: eliminarPreguntas,
  obtenerPreguntaId: obtenerPreguntaId
};