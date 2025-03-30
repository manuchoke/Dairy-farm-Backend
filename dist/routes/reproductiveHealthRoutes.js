"use strict";

var express = require('express');
var router = express.Router();
var _require = require('../controllers/reproductiveHealthController'),
  createReproductiveHealth = _require.createReproductiveHealth,
  getReproductiveHealths = _require.getReproductiveHealths,
  updateReproductiveHealth = _require.updateReproductiveHealth,
  deleteReproductiveHealth = _require.deleteReproductiveHealth;
var _require2 = require('../middleware/authMiddleware'),
  protect = _require2.protect;
router.post('/', protect, createReproductiveHealth); // Create a new reproductive health record
router.get('/', protect, getReproductiveHealths); // Get all reproductive health records
router.put('/:id', protect, updateReproductiveHealth); // Update a reproductive health record
router["delete"]('/:id', protect, deleteReproductiveHealth); // Delete a reproductive health record

module.exports = router;