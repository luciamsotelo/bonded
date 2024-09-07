const { User } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.getAllUsers = async (req, res, next) => {
  try {
    console.log('Fetching all users');
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    next(error);
  }
};

exports.createUser = async (req, res, next) => {
  try {
    const { firstName, lastName, familyName, email, password } = req.body;
    console.log('Creating user with data:', req.body);
    const newUser = await User.create({
      firstName,
      lastName,
      familyName,
      email,
      password
      // Add other fields as needed
    });
    res.status(201).json(newUser); // Respond with the created user object
  } catch (error) {
    console.error('Error creating user:', error);
    next(error); // Pass error to the error handler middleware
  }
};

exports.signinUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token, firstName: user.firstName });
  } catch (error) {
    next(error);
  }
};


