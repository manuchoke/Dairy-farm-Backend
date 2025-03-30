"use strict";

var express = require("express");
var router = express.Router();
var _require = require("../controllers/milkProductionController"),
  addMilkProduction = _require.addMilkProduction,
  getMilkRecordsByDate = _require.getMilkRecordsByDate,
  getAllMilkRecords = _require.getAllMilkRecords,
  getMilkProductionData = _require.getMilkProductionData,
  updateMilkProduction = _require.updateMilkProduction,
  deleteMilkProduction = _require.deleteMilkProduction;
var MilkProduction = require("../models/MilkProduction");
var _require2 = require('../middleware/authMiddleware'),
  protect = _require2.protect;
// Add a new milk production record
router.post("/", protect, addMilkProduction);

// Get milk production records by date
router.get("/by-date", protect, getMilkRecordsByDate);

// Get all milk production records
router.get("/all", protect, getAllMilkRecords);

// Get milk production data (optional route)
router.get("/data", protect, getMilkProductionData);

// Update route for editing a record
router.put("/:id", protect, updateMilkProduction);

// Delete route for removing a record
router["delete"]("/:id", protect, deleteMilkProduction);
module.exports = router;