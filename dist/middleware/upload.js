"use strict";

var multer = require('multer');
var path = require('path');

// Configure multer for file uploads
var storage = multer.diskStorage({
  destination: function destination(req, file, cb) {
    cb(null, 'uploads/'); // Specify the folder where images will be stored
  },
  filename: function filename(req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // Generate a unique filename
  }
});
var upload = multer({
  storage: storage
});
module.exports = upload;