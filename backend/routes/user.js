const express = require('express');
const { z } = require('zod');
const { User } = require('../config/db');
const { Account } = require('../config/db');
const jwt = require('jsonwebtoken');
const JWT_SECRET = require('../config');
const router = express.Router(); //initializing express router
const { authMiddleware } = require('../middleware');

// Signup Schema Validation using Zod
const signupSchema = z.object({
    username: z.string().trim().min(4).max(20),
    password: z.string(),
    firstName: z.string().trim().min(3).max(20),
    lastName: z.string().trim().min(3).max(20),
})

// Signin Schema Validation using Zod
const signinSchema = z.object({
    username: z.string().trim().min(4).max(20),
    password: z.string(),
})

// Update Body Validation using Zod
const updateBody = z.object({
    password: z.string().optional(),
    firstName: z.string().optional(),
    lastName: z.string().optional(),
});

// Signup Route and Logic
router.post("/signup", async (req, res) => {
    const { success } = signupSchema.safeParse(req.body); //validating the request body using zod
    if (!success) {
        return res.status(411).json({ message: 'Invalid inputs' });
    }

    // checking if the user already exists
    const existingUser = await User.findOne({
        username: req.body.username
    })

    // If the user already exists, return an error
    if (existingUser) {
        return res.status(411).json({ message: 'Username already exists' });
    }

    // Creating a new user and generating a JWT token
    const user = await User.create({
        username: req.body.username,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
    })
    const userId = user._id;

    // Creating an account for the user
    await Account.create({
        userId,
        firstName: req.body.firstName,
        balance: 1 + Math.random() * 10000
    })

    const token = jwt.sign({
        userId
    }, JWT_SECRET);

    // Sending the token in response
    res.json({
        message: "User created successfully",
        token: token
    })
});

// Signin Route and Logic
router.post("/signin", async (req, res) => {
    const { success } = signinSchema.safeParse(req.body); //validating the request body using zod
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

    // If the user does not exist, return an error
    res.status(411).json({
        message: "Error while logging in"
    })

});

// Update Route and Logic
router.put("/", authMiddleware, async (req, res) => {
    const { success } = updateBody.safeParse(req.body); //validating the request body using zod
    if (!success) {
        res.status(411).json({
            message: "Error while updating information"
        })
    }

    await User.updateOne({ _id: req.userId }, req.body) //updating the user information

    res.json({
        message: "Updated Successfully"
    })
})

router.get("/bulk", async (req, res) => {
    const filter = req.query.filter || ""; //getting the filter query parameter

    // Finding the users based on the filter
    const users = await User.find({
        $or: [{
            firstName: {
                "$regex": filter
            }
        }, {
            lastName: {
                "$regex": filter
            }
        }]
    })

    // Sending the user information in response
    res.json({
        user: users.map(user => ({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            id: user._id
        }))
    })
})

module.exports = router;