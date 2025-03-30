"use strict";

var express = require('express');
var router = express.Router();
var _require = require('../controllers/medicationController'),
  createMedication = _require.createMedication,
  getMedications = _require.getMedications,
  updateMedication = _require.updateMedication,
  deleteMedication = _require.deleteMedication;
var _require2 = require('../middleware/authMiddleware'),
  protect = _require2.protect;
router.post('/', protect, createMedication); // Create a new medication record
router.get('/', protect, getMedications); // Get all medication records
router.put('/:id', protect, updateMedication); // Update a medication record
router["delete"]('/:id', protect, deleteMedication); // Delete a medication record

module.exports = router;