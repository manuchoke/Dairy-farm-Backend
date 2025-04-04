"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
// controllers/authController.js
var User = require("../models/User");
var jwt = require("jsonwebtoken");
var crypto = require('crypto');
var nodemailer = require('nodemailer');

// Create transporter for sending emails
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD
  }
});

// Register a new user
exports.register = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var _req$body, email, password, firstName, lastName, farmName, address, farmSize, numberOfCattle, userExists, user, token;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, email = _req$body.email, password = _req$body.password, firstName = _req$body.firstName, lastName = _req$body.lastName, farmName = _req$body.farmName, address = _req$body.address, farmSize = _req$body.farmSize, numberOfCattle = _req$body.numberOfCattle; // Check if user exists
          _context.next = 4;
          return User.findOne({
            email: email.toLowerCase()
          });
        case 4:
          userExists = _context.sent;
          if (!userExists) {
            _context.next = 7;
            break;
          }
          return _context.abrupt("return", res.status(400).json({
            success: false,
            message: 'Email already registered'
          }));
        case 7:
          _context.next = 9;
          return User.create({
            email: email.toLowerCase(),
            password: password,
            firstName: firstName,
            lastName: lastName,
            farmName: farmName,
            address: address,
            farmSize: {
              value: farmSize.value || farmSize,
              unit: farmSize.unit || 'Acres'
            },
            numberOfCattle: parseInt(numberOfCattle),
            isEmailVerified: true // Set to true by default
          });
        case 9:
          user = _context.sent;
          // Generate token
          token = user.getSignedJwtToken();
          res.status(201).json({
            success: true,
            message: 'Registration successful!',
            token: token,
            user: {
              id: user._id,
              email: user.email
            }
          });
          _context.next = 18;
          break;
        case 14:
          _context.prev = 14;
          _context.t0 = _context["catch"](0);
          console.error('Registration error:', _context.t0);
          res.status(500).json({
            success: false,
            message: 'Error in registration',
            error: _context.t0.message
          });
        case 18:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 14]]);
  }));
  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

// Login user
exports.login = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var _req$body2, email, password, user, isMatch, token;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _req$body2 = req.body, email = _req$body2.email, password = _req$body2.password;
          if (!(!email || !password)) {
            _context2.next = 4;
            break;
          }
          return _context2.abrupt("return", res.status(400).json({
            success: false,
            message: 'Please provide email and password'
          }));
        case 4:
          _context2.next = 6;
          return User.findOne({
            email: email.toLowerCase()
          }).select('+password');
        case 6:
          user = _context2.sent;
          if (user) {
            _context2.next = 9;
            break;
          }
          return _context2.abrupt("return", res.status(401).json({
            success: false,
            message: 'Invalid credentials'
          }));
        case 9:
          _context2.next = 11;
          return user.comparePassword(password);
        case 11:
          isMatch = _context2.sent;
          if (isMatch) {
            _context2.next = 14;
            break;
          }
          return _context2.abrupt("return", res.status(401).json({
            success: false,
            message: 'Invalid credentials'
          }));
        case 14:
          token = user.getSignedJwtToken();
          res.status(200).json({
            success: true,
            token: token,
            user: {
              id: user._id,
              email: user.email
            }
          });
          _context2.next = 22;
          break;
        case 18:
          _context2.prev = 18;
          _context2.t0 = _context2["catch"](0);
          console.error('Login error:', _context2.t0);
          res.status(500).json({
            success: false,
            message: 'An error occurred during login'
          });
        case 22:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 18]]);
  }));
  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

// Add the missing controller functions
exports.verifyToken = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var user;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return User.findById(req.user.id).select('-password');
        case 3:
          user = _context3.sent;
          res.json(user);
          _context3.next = 10;
          break;
        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);
          res.status(500).json({
            message: "Server Error"
          });
        case 10:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 7]]);
  }));
  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
exports.getProfile = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var user, formattedUser;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return User.findById(req.user.id).select('-password');
        case 3:
          user = _context4.sent;
          // Ensure farmSize is properly formatted
          formattedUser = _objectSpread(_objectSpread({}, user.toObject()), {}, {
            farmSize: user.farmSize || {
              value: 0,
              unit: 'Acres'
            }
          });
          res.status(200).json({
            success: true,
            user: formattedUser
          });
          _context4.next = 12;
          break;
        case 8:
          _context4.prev = 8;
          _context4.t0 = _context4["catch"](0);
          console.error('Get profile error:', _context4.t0);
          res.status(500).json({
            success: false,
            message: 'Error fetching profile'
          });
        case 12:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 8]]);
  }));
  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
exports.updateProfile = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var _user$farmSize, _user$farmSize2, user, updateData, updatedUser;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          console.log('Update profile request:', req.body);

          // Find user first
          _context5.next = 4;
          return User.findById(req.user.id);
        case 4:
          user = _context5.sent;
          if (user) {
            _context5.next = 7;
            break;
          }
          return _context5.abrupt("return", res.status(404).json({
            success: false,
            message: 'User not found'
          }));
        case 7:
          // Prepare update data
          updateData = {
            name: req.body.name || user.name,
            email: req.body.email || user.email,
            phoneNumber: req.body.phoneNumber || user.phoneNumber,
            farmSize: {
              value: parseFloat(req.body.farmSize) || ((_user$farmSize = user.farmSize) === null || _user$farmSize === void 0 ? void 0 : _user$farmSize.value),
              unit: req.body.farmSizeUnit || ((_user$farmSize2 = user.farmSize) === null || _user$farmSize2 === void 0 ? void 0 : _user$farmSize2.unit) || 'Acres'
            },
            location: req.body.location || user.location
          };
          console.log('Update data:', updateData);

          // Update user with validation disabled for this operation
          _context5.next = 11;
          return User.findByIdAndUpdate(req.user.id, {
            $set: updateData
          }, {
            "new": true,
            runValidators: false,
            // Only return specific fields
            select: 'name email phoneNumber farmSize location isEmailVerified'
          });
        case 11:
          updatedUser = _context5.sent;
          res.status(200).json({
            success: true,
            message: 'Profile updated successfully',
            user: updatedUser
          });
          _context5.next = 19;
          break;
        case 15:
          _context5.prev = 15;
          _context5.t0 = _context5["catch"](0);
          console.error('Profile update error:', _context5.t0);
          res.status(500).json({
            success: false,
            message: 'Error updating profile',
            error: _context5.t0.message
          });
        case 19:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 15]]);
  }));
  return function (_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
exports.forgotPassword = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var email, user, otp;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          email = req.body.email;
          _context6.next = 4;
          return User.findOne({
            email: email
          });
        case 4:
          user = _context6.sent;
          if (user) {
            _context6.next = 7;
            break;
          }
          return _context6.abrupt("return", res.status(404).json({
            success: false,
            message: "User not found"
          }));
        case 7:
          // Generate OTP
          otp = Math.floor(100000 + Math.random() * 900000).toString(); // Save OTP to user
          user.resetPasswordOTP = otp;
          user.resetPasswordOTPExpires = Date.now() + 10 * 60 * 1000; // 10 minutes
          _context6.next = 12;
          return user.save();
        case 12:
          _context6.prev = 12;
          _context6.next = 15;
          return transporter.sendMail({
            from: "\"Dairy Farm System\" <".concat(process.env.EMAIL_USER, ">"),
            to: email,
            subject: 'Password Reset OTP',
            html: "\n          <div style=\"max-width: 600px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif;\">\n            <h2 style=\"color: #333; text-align: center;\">Password Reset Request</h2>\n            <p style=\"color: #666; font-size: 16px;\">Your OTP for password reset is:</p>\n            <div style=\"text-align: center; margin: 30px 0;\">\n              <h1 style=\"color: #4F46E5; font-size: 36px; letter-spacing: 5px;\">".concat(otp, "</h1>\n            </div>\n            <p style=\"color: #666; font-size: 14px;\">This OTP will expire in 10 minutes.</p>\n            <p style=\"color: #666; font-size: 14px;\">If you didn't request this, please ignore this email.</p>\n          </div>\n        ")
          });
        case 15:
          res.json({
            success: true,
            message: "OTP sent to email successfully"
          });
          _context6.next = 26;
          break;
        case 18:
          _context6.prev = 18;
          _context6.t0 = _context6["catch"](12);
          console.error("Email sending error:", _context6.t0);

          // Clear the OTP if email fails
          user.resetPasswordOTP = undefined;
          user.resetPasswordOTPExpires = undefined;
          _context6.next = 25;
          return user.save();
        case 25:
          res.status(500).json({
            success: false,
            message: "Failed to send OTP email. Please try again later."
          });
        case 26:
          _context6.next = 32;
          break;
        case 28:
          _context6.prev = 28;
          _context6.t1 = _context6["catch"](0);
          console.error("Forgot password error:", _context6.t1);
          res.status(500).json({
            success: false,
            message: "An error occurred. Please try again later."
          });
        case 32:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 28], [12, 18]]);
  }));
  return function (_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
exports.verifyOTP = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var _req$body3, email, otp, user, resetToken;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          _req$body3 = req.body, email = _req$body3.email, otp = _req$body3.otp;
          console.log('Verifying OTP:', {
            email: email,
            otp: otp
          }); // Debug log
          _context7.next = 5;
          return User.findOne({
            email: email,
            resetPasswordOTP: otp,
            resetPasswordOTPExpires: {
              $gt: Date.now()
            }
          });
        case 5:
          user = _context7.sent;
          console.log('User found:', user ? 'Yes' : 'No'); // Debug log
          if (user) {
            _context7.next = 9;
            break;
          }
          return _context7.abrupt("return", res.status(400).json({
            message: "Invalid or expired OTP. Please request a new one."
          }));
        case 9:
          // Generate reset token
          resetToken = jwt.sign({
            id: user._id
          }, process.env.JWT_SECRET, {
            expiresIn: "10m"
          }); // Clear the OTP after successful verification
          user.resetPasswordOTP = undefined;
          user.resetPasswordOTPExpires = undefined;
          _context7.next = 14;
          return user.save();
        case 14:
          res.status(200).json({
            success: true,
            message: "OTP verified successfully",
            resetToken: resetToken
          });
          _context7.next = 21;
          break;
        case 17:
          _context7.prev = 17;
          _context7.t0 = _context7["catch"](0);
          console.error("OTP verification error:", _context7.t0);
          res.status(500).json({
            message: "Error verifying OTP. Please try again."
          });
        case 21:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[0, 17]]);
  }));
  return function (_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();
exports.resetPassword = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var token, password, decoded, user, isSamePassword;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          token = req.params.token;
          password = req.body.password;
          console.log('Attempting password reset with token:', token); // Debug log
          if (!(!token || !password)) {
            _context8.next = 6;
            break;
          }
          return _context8.abrupt("return", res.status(400).json({
            message: "Token and new password are required"
          }));
        case 6:
          _context8.prev = 6;
          decoded = jwt.verify(token, process.env.JWT_SECRET);
          _context8.next = 14;
          break;
        case 10:
          _context8.prev = 10;
          _context8.t0 = _context8["catch"](6);
          console.error('Token verification error:', _context8.t0);
          return _context8.abrupt("return", res.status(400).json({
            message: "Invalid or expired reset token"
          }));
        case 14:
          _context8.next = 16;
          return User.findById(decoded.id);
        case 16:
          user = _context8.sent;
          if (user) {
            _context8.next = 19;
            break;
          }
          return _context8.abrupt("return", res.status(404).json({
            message: "User not found"
          }));
        case 19:
          console.log('User found:', user.email); // Debug log

          // Check if new password is same as old password
          _context8.prev = 20;
          _context8.next = 23;
          return user.comparePassword(password);
        case 23:
          isSamePassword = _context8.sent;
          if (!isSamePassword) {
            _context8.next = 26;
            break;
          }
          return _context8.abrupt("return", res.status(400).json({
            error: "OLD_PASSWORD",
            message: "You cannot use your old password. Please choose a different password."
          }));
        case 26:
          _context8.next = 31;
          break;
        case 28:
          _context8.prev = 28;
          _context8.t1 = _context8["catch"](20);
          console.error('Password comparison error:', _context8.t1);
        case 31:
          _context8.prev = 31;
          user.password = password;
          user.resetPasswordOTP = undefined;
          user.resetPasswordOTPExpires = undefined;
          _context8.next = 37;
          return user.save();
        case 37:
          console.log('Password updated successfully'); // Debug log

          res.json({
            success: true,
            message: "Password reset successful"
          });
          _context8.next = 45;
          break;
        case 41:
          _context8.prev = 41;
          _context8.t2 = _context8["catch"](31);
          console.error('Password save error:', _context8.t2);
          throw _context8.t2;
        case 45:
          _context8.next = 51;
          break;
        case 47:
          _context8.prev = 47;
          _context8.t3 = _context8["catch"](0);
          console.error("Reset password error:", _context8.t3);
          res.status(500).json({
            message: "Error resetting password",
            error: _context8.t3.message // Include error message for debugging
          });
        case 51:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[0, 47], [6, 10], [20, 28], [31, 41]]);
  }));
  return function (_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();
exports.verifyEmail = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
    var token, hashedToken, user;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          token = req.body.token;
          if (token) {
            _context9.next = 4;
            break;
          }
          return _context9.abrupt("return", res.status(400).json({
            success: false,
            message: 'Verification token is required'
          }));
        case 4:
          // Hash the token
          hashedToken = crypto.createHash('sha256').update(token).digest('hex'); // Find user with matching token and token not expired
          _context9.next = 7;
          return User.findOne({
            emailVerificationToken: hashedToken,
            emailVerificationTokenExpires: {
              $gt: Date.now()
            }
          });
        case 7:
          user = _context9.sent;
          if (user) {
            _context9.next = 10;
            break;
          }
          return _context9.abrupt("return", res.status(400).json({
            success: false,
            message: 'Invalid or expired verification token'
          }));
        case 10:
          // Update user verification status
          user.isEmailVerified = true;
          user.emailVerificationToken = undefined;
          user.emailVerificationTokenExpires = undefined;
          _context9.next = 15;
          return user.save();
        case 15:
          res.status(200).json({
            success: true,
            message: 'Email verified successfully'
          });
          _context9.next = 22;
          break;
        case 18:
          _context9.prev = 18;
          _context9.t0 = _context9["catch"](0);
          console.error('Email verification error:', _context9.t0);
          res.status(500).json({
            success: false,
            message: 'Error verifying email'
          });
        case 22:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[0, 18]]);
  }));
  return function (_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}();
exports.resendVerification = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10(req, res) {
    var email, user, verificationToken, hashedToken, verificationUrl;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _context10.prev = 0;
          email = req.body.email;
          console.log('Resending verification email to:', email);
          if (email) {
            _context10.next = 5;
            break;
          }
          return _context10.abrupt("return", res.status(400).json({
            success: false,
            message: 'Please provide an email address'
          }));
        case 5:
          _context10.next = 7;
          return User.findOne({
            email: email.toLowerCase()
          });
        case 7:
          user = _context10.sent;
          if (user) {
            _context10.next = 10;
            break;
          }
          return _context10.abrupt("return", res.status(404).json({
            success: false,
            message: 'User not found'
          }));
        case 10:
          if (!user.isEmailVerified) {
            _context10.next = 12;
            break;
          }
          return _context10.abrupt("return", res.status(400).json({
            success: false,
            message: 'Email is already verified'
          }));
        case 12:
          // Generate new verification token
          verificationToken = crypto.randomBytes(32).toString('hex'); // Hash token before saving
          hashedToken = crypto.createHash('sha256').update(verificationToken).digest('hex'); // Update user with new token
          user.emailVerificationToken = hashedToken;
          user.emailVerificationTokenExpires = Date.now() + 24 * 60 * 60 * 1000; // 24 hours
          _context10.next = 18;
          return user.save({
            validateBeforeSave: false
          });
        case 18:
          // Create verification URL
          verificationUrl = "".concat(process.env.FRONTEND_URL, "/verify-email/").concat(verificationToken);
          _context10.prev = 19;
          _context10.next = 22;
          return sendEmail({
            email: user.email,
            subject: 'Email Verification - Dairy Farm Management System',
            html: "\n          <div style=\"max-width: 600px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif;\">\n            <h1 style=\"color: #333; text-align: center;\">Email Verification</h1>\n            <p style=\"color: #666; font-size: 16px;\">Please click the button below to verify your email address:</p>\n            <div style=\"text-align: center; margin: 30px 0;\">\n              <a href=\"".concat(verificationUrl, "\" \n                 style=\"background-color: #4F46E5; color: white; padding: 12px 24px; \n                        text-decoration: none; border-radius: 5px; font-weight: bold;\">\n                Verify Email Address\n              </a>\n            </div>\n            <p style=\"color: #666; font-size: 14px;\">\n              If the button doesn't work, you can also click this link:\n              <a href=\"").concat(verificationUrl, "\">").concat(verificationUrl, "</a>\n            </p>\n            <p style=\"color: #666; font-size: 14px;\">This link will expire in 24 hours.</p>\n          </div>\n        ")
          });
        case 22:
          res.status(200).json({
            success: true,
            message: 'Verification email sent successfully'
          });
          _context10.next = 33;
          break;
        case 25:
          _context10.prev = 25;
          _context10.t0 = _context10["catch"](19);
          console.error('Email sending error:', _context10.t0);

          // Reset the verification token if email fails
          user.emailVerificationToken = undefined;
          user.emailVerificationTokenExpires = undefined;
          _context10.next = 32;
          return user.save({
            validateBeforeSave: false
          });
        case 32:
          return _context10.abrupt("return", res.status(500).json({
            success: false,
            message: 'Error sending verification email. Please try again later.'
          }));
        case 33:
          _context10.next = 39;
          break;
        case 35:
          _context10.prev = 35;
          _context10.t1 = _context10["catch"](0);
          console.error('Resend verification error:', _context10.t1);
          res.status(500).json({
            success: false,
            message: 'Error resending verification email',
            error: _context10.t1.message
          });
        case 39:
        case "end":
          return _context10.stop();
      }
    }, _callee10, null, [[0, 35], [19, 25]]);
  }));
  return function (_x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}();
exports.deleteAccount = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11(req, res) {
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          _context11.prev = 0;
          _context11.next = 3;
          return User.findByIdAndDelete(req.user.id);
        case 3:
          res.status(200).json({
            success: true,
            message: 'Account deleted successfully'
          });
          _context11.next = 9;
          break;
        case 6:
          _context11.prev = 6;
          _context11.t0 = _context11["catch"](0);
          res.status(500).json({
            success: false,
            message: 'Error deleting account'
          });
        case 9:
        case "end":
          return _context11.stop();
      }
    }, _callee11, null, [[0, 6]]);
  }));
  return function (_x21, _x22) {
    return _ref11.apply(this, arguments);
  };
}();