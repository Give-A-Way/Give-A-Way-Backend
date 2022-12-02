const express = require('express');
const router = express.Router();
const authentificationControllers = require('../controllers/authenticationControllers.js');
router.post("/register",authentificationControllers.register);
router.post("/login",authentificationControllers.checkLogin);

module.exports = router