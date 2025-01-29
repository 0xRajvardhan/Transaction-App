const express = require('express');
const { z } = require('zod');
const User = require('../config/db');
const jwt = require('jsonwebtoken');
const JWT_SECRET = require('../config');
const router = express.Router(); //initializing express router

// Signup Schema Validation using Zod
const signupSchema = z.object({
    username: z.string().trim().lowercase().min(4).max(20),
    password: z.string(),
    firstName: z.string().trim().min(3).max(20),
    lastName: z.string().trim().min(3).max(20),
})
// Signin Schema Validation using Zod
const signinSchema = Zod.object({
    username: Zod.string().trim().lowercase().min(4).max(20),
    password: Zod.string(),
})

// Signup Route and Logic
router.post("/signup", async (req, res) => {
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

    // Creating a new user and generating a JWT token
    const dbUser = await User.create(req.body);
    const token = jwt.sign({
        userId: dbUser._id,
    }, JWT_SECRET);

    // Sending the token in response
    res.json({
        message: 'User created successfully !',
        token,
    })
});

// Signin Route and Logic
router.post("/signin", async (req, res) => {
    const { success } = signinSchema.safeParse(req.body);
    if (!success) {
        res.status(411).json({ message: 'invalid inputs' })
    }

    // checking if the user exists
    const user = await User.findOne({
        username: req.body.username,
        password: req.body.password
    })

    // Generating a jwt token for the user
    if (user) {
        const token = jwt.sign({
            userId: user._id
        }, JWT_SECRET)

        res.json({
            message: "User logged-in successfully",
            token
        })
        return;
    }

    res.status(411).json({
        message: "Error while logging in"
    })

});

module.exports = router;