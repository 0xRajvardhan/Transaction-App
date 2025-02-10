const express = require('express');
const userRouter = require('./user');
const accountRouter = require("./account");

const router = express.Router(); //initializing express router

router.use('/user', userRouter); //using user router for /user path
router.use('/account', accountRouter); //using account router for /account path

module.exports = router;