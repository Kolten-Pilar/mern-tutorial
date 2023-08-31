const express = require('express');
const router = express.Router();
const { getMe, registerUser, loginUser } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

//create user
router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me', protect, getMe)

module.exports = router;