const express = require('express');
const router = express.Router();
const { getMe, registerUser, loginUser } = require('../controllers/userController');

//create user
router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me', getMe)

module.exports = router;