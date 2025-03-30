"use strict";

var mongoose = require("mongoose");
var FeedSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  unit: {
    type: String,
    required: true
  },
  // Matches frontend
  cost: {
    type: Number,
    required: true
  },
  // Matches frontend
  datePurchased: {
    type: Date,
    "default": Date.now
  }
});

// Explicitly setting collection name as 'feed-management'
var FeedManagement = mongoose.model("FeedManagement", FeedSchema, "feed-management");
module.exports = FeedManagement;