const express = require('express');
const { z } = require('zod');
const User = require('../config/db');
const jwt = require('jsonwebtoken');
const JWT_SECRET = require('../config');
const router = express.Router(); //initializing express router

// Signup Schema Validation Using Zod
const signupSchema = z.object({
    username: z.string().trim().lowercase().min(4).max(20),
    password: z.string(),
    firstName: z.string().trim().min(3).max(20),
    lastName: z.string().trim().min(3).max(20),
})

// Signup Route and Logic
router.post('/signup', async (req, res) => {
    const { success } = signupSchema.safeParse(req.body);
    if (!success) {
        return res.status(411).json({ message: 'Invalid inputs' });
    }
    // checking if the user already exists
    const existingUser = await User.findOne({
        username: req.body.username
    })
    if (existingUser._id) {
        return res.status(411).json({ message: 'Username already exists' });
    }

    // Creat ing a new user and generating a JWT token
    const dbUser = await User.create(req.body);
    const token = jwt.sign({
        userId: dbUser._id,
    }, { JWT_SECRET });

    // Sending the token in response
    res.json({
        message: 'User created successfully !',
        token,
    })
})

module.exports = router;