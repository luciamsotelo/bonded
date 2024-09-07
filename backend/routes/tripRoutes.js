// routes/tripRoutes.js
const express = require('express');
const router = express.Router();
const tripController = require('../controllers/tripController');
const authenticate = require('../middleware/authenticate'); // Middleware to authenticate user

// Route to create a new trip
router.post('/', authenticate, tripController.createTrip);

module.exports = router;
