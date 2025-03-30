"use strict";

var express = require("express");
var authController = require("../controllers/authController");
var router = express.Router();
var _require = require('../middleware/auth'),
  protect = _require.protect;

// Public routes
router.post("/register", authController.register);
router.post("/login", authController.login);
router.post("/forgot-password", authController.forgotPassword);
router.post("/verify-otp", authController.verifyOTP);
router.patch("/reset-password/:token", authController.resetPassword);

// Protected routes
router.get("/verify", protect, authController.verifyToken);
router.get("/profile", protect, authController.getProfile);
router.put("/profile", protect, authController.updateProfile);
router["delete"]('/delete-account', protect, authController.deleteAccount);
module.exports = router;