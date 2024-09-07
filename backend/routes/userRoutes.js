const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', (req, res, next) => {
  console.log('GET /api/users');
  userController.getAllUsers(req, res, next);
});

router.post('/', (req, res, next) => {
  console.log('POST /api/users', req.body);
  userController.createUser(req, res, next);
});

router.post('/signin', userController.signinUser);

module.exports = router;

