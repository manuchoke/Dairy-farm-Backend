"use strict";

var express = require('express');
var router = express.Router();
var _require = require('../controllers/labTestController'),
  createLabTest = _require.createLabTest,
  getLabTests = _require.getLabTests,
  updateLabTest = _require.updateLabTest,
  deleteLabTest = _require.deleteLabTest;
var _require2 = require('../middleware/authMiddleware'),
  protect = _require2.protect;
router.post('/', protect, createLabTest); // Create a new lab test
router.get('/', protect, getLabTests); // Get all lab tests
router.put('/:id', protect, updateLabTest); // Update a lab test
router["delete"]('/:id', protect, deleteLabTest); // Delete a lab test

module.exports = router;