"use strict";

var express = require('express');
var router = express.Router();
var _require = require('../controllers/healthCheckController'),
  createHealthCheck = _require.createHealthCheck,
  getHealthChecks = _require.getHealthChecks,
  updateHealthCheck = _require.updateHealthCheck,
  deleteHealthCheck = _require.deleteHealthCheck;
var _require2 = require('../middleware/authMiddleware'),
  protect = _require2.protect;
router.post('/', protect, createHealthCheck); // Create a new health check record
router.get('/', protect, getHealthChecks); // Get all health check records
router.put('/:id', protect, updateHealthCheck); // Update a health check record
router["delete"]('/:id', protect, deleteHealthCheck); // Delete a health check record

module.exports = router;