"use strict";

var express = require('express');
var mongoose = require('mongoose');
var cors = require('cors');
var bodyParser = require("body-parser");
require("dotenv").config(); // Load .env variables
var feedManagementRoutes = require("./routes/feedManagementRoutes"); // Feed Management routes
var path = require('path'); // Import path module
var labTestRoutes = require('./routes/labTestRoutes');
var medicationRoutes = require('./routes/medicationRoutes');
var reproductiveHealthRoutes = require('./routes/reproductiveHealthRoutes');
var vaccinationRoutes = require('./routes/vaccinationRoutes');
var healthCheckRoutes = require('./routes/healthCheckRoutes');
var authRoutes = require('./routes/authRoutes');
var geminiRoutes = require('./routes/geminiRoutes');

// Create express app
var app = express();

// Load environment variables
var mongoURI = process.env.MONGO_URI;
var port = process.env.PORT || 5000;

// Connect to MongoDB Atlas
mongoose.connect(mongoURI).then(function () {
  return console.log("MongoDB Atlas connected successfully");
})["catch"](function (err) {
  return console.error("MongoDB connection error:", err);
});

// Middleware to parse JSON
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

// Middleware
app.use(cors({
  origin: 'http://localhost:3000',
  // Your frontend URL
  credentials: true
}));
app.use(bodyParser.json()); // Parse JSON request bodies

app.post("/test", function (req, res) {
  console.log("Request received from frontend:", req.body);
  res.json({
    message: "Hello from backend!"
  });
});

// Serve images from the "images" folder under the "/images" endpoint
app.use('/images', express["static"](path.join(__dirname, 'uploads')));

// Use animal routes
app.use("/api/animals", require("./routes/animalRoutes"));

// Use milk production routes
app.use("/api/milk-production", require("./routes/milkProductionRoutes"));

//Use feed management routes
app.use('/api', feedManagementRoutes);

//Use health records routes 
app.use('/api/labTests', labTestRoutes);
app.use('/api/medications', medicationRoutes);
app.use('/api/reproductiveHealth', reproductiveHealthRoutes);
app.use('/api/vaccinations', vaccinationRoutes);
app.use('/api/healthChecks', healthCheckRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/gemini', geminiRoutes);

// Routes
app.get("/", function (req, res) {
  res.send("Welcome to the Dairy Farm Management System API!");
});

// Error handling middleware
app.use(function (err, req, res, next) {
  console.error('Global error:', err);
  res.status(500).json({
    success: false,
    message: 'Server error',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// Start Server
var PORT = process.env.PORT || 5000;
var server = app.listen(PORT, function () {
  console.log("Server running on port ".concat(PORT));
}).on('error', function (err) {
  if (err.code === 'EADDRINUSE') {
    console.log("Port ".concat(PORT, " is busy, trying ").concat(PORT + 1));
    server.listen(PORT + 1);
  } else {
    console.error('Server error:', err);
  }
});