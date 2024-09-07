// controllers/tripController.js
const { Trip } = require('../models');

exports.createTrip = async (req, res, next) => {
  try {
    const userId = req.user.id; // Assuming you are extracting the user ID from the token
    const { title, description, date, participants, rating, images } = req.body;

    const newTrip = await Trip.create({
      title,
      description,
      date,
      participants,
      rating,
      images,
      userId
    });

    res.status(201).json(newTrip);
  } catch (error) {
    console.error('Error creating trip:', error);
    next(error); // Pass error to the error handler middleware
  }
};