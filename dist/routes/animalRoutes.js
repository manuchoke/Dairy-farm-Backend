"use strict";

var express = require('express');
var router = express.Router();
var _require = require('../controllers/animalController'),
  getAllAnimals = _require.getAllAnimals,
  addAnimalWithImage = _require.addAnimalWithImage,
  updateAnimal = _require.updateAnimal,
  deleteAnimal = _require.deleteAnimal,
  getAnimalById = _require.getAnimalById,
  getImage = _require.getImage;
var _require2 = require('../middleware/authMiddleware'),
  protect = _require2.protect;

// Fetch all animals
router.get('/', protect, getAllAnimals);

// Add a new animal with image upload
router.post('/add-with-image', protect, require('../middleware/upload').single('image'), addAnimalWithImage);

// Serve images
router.get('/images/:filename', getImage);

// Fetch an animal by ID
router.get('/:id', protect, getAnimalById);

// Update an animal
router.put('/:id', protect, updateAnimal);

// Delete an animal
router["delete"]('/:id', protect, deleteAnimal);
module.exports = router;