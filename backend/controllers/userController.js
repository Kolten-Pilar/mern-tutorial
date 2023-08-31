const asyncHandler = require('express-async-handler');

const User = require('../models/userModel');

//@desc: Authenticate user & get token
//@route: POST /api/users/login
//access: public
const loginUser = (req, res) => {
  res.json({message: 'Login User'});
};

// @desc: get users
//@route: GET /api/users
//access: public
const getMe = (req, res) => {
  res.json({message: 'Get Users'});
};


// @desc: register user
//@route: POST /api/users
//access: public
const registerUser = (req, res) => {
  res.json({message: 'Register User'});
};



module.exports = {
  getMe,
  registerUser,
  loginUser
};