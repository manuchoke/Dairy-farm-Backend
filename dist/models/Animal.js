"use strict";

// models/Animal.js
var mongoose = require('mongoose');
var animalSchema = new mongoose.Schema({
  tagId: {
    type: String,
    required: true,
    unique: true
  },
  breed: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});
var Animal = mongoose.model('Animal', animalSchema);
module.exports = Animal;