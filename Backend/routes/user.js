const express = require('express');
const userRoute = express.Router();
const {Signup, login, logout} = require('../controllers/userauthController');

userRoute.post('/register', Signup);
userRoute.post('/login', login);
userRoute.get('/logout', logout);

module.exports = userRoute;