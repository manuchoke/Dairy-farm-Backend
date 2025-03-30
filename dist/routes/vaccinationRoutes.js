"use strict";

var express = require('express');
var router = express.Router();
var _require = require('../controllers/vaccinationController'),
  createVaccination = _require.createVaccination,
  getVaccinations = _require.getVaccinations,
  updateVaccination = _require.updateVaccination,
  deleteVaccination = _require.deleteVaccination;
var _require2 = require('../middleware/authMiddleware'),
  protect = _require2.protect;
router.post('/', protect, createVaccination); // Create a new vaccination record
router.get('/', protect, getVaccinations); // Get all vaccination records
router.put('/:id', protect, updateVaccination); // Update a vaccination record
router["delete"]('/:id', protect, deleteVaccination); // Delete a vaccination record

module.exports = router;