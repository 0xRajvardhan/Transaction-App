const express = require('express');
const userRouter = require('./user');

const router = express.Router(); //initializing express router

router.use('/user', userRouter); //using user router for /user path

module.exports = router;