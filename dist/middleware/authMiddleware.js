"use strict";

var jwt = require("jsonwebtoken");
exports.protect = function (req, res, next) {
  var _req$headers$authoriz;
  var token = (_req$headers$authoriz = req.headers.authorization) === null || _req$headers$authoriz === void 0 ? void 0 : _req$headers$authoriz.split(" ")[1];
  if (!token) return res.status(401).json({
    error: "Not authorized"
  });
  try {
    var decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({
      error: "Invalid token"
    });
  }
};