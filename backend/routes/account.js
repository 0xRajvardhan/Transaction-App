const express = require('express');
const { authMiddleware } = require('../middleware');
const { Account } = require('../config/db');
const mongoose = require('mongoose');
const { z } = require('zod');
const router = express.Router(); //initializing express router

/* **ADD ZOD SCHEMA FOR TRANSFER ROUTE AS WELL** */
const depositSchema = z.object({
    to: z.string(),
    amount: z.number().positive(),
});

//route to get account balance
router.get("/balance", authMiddleware, async (req, res) => {
    const account = await Account.findOne({
        userId: req.userId
    });
    res.json({ balance: account.balance, userId: account.userId, firstName: account.firstName });
});

//route to transfer money
router.post("/transfer", authMiddleware, async (req, res) => {
    const { success } = depositSchema.safeParse(req.body); //validating the request body using zod
    if (!success) {
        return res.status(411).json({ message: 'Invalid inputs' });
    }
    
    const session = await mongoose.startSession(); //starting a session
    session.startTransaction(); //starting a transaction
    const { amount, to } = req.body; //getting amount and "to" from request body

    // Fetch the accounts within the transaction
    const account = await Account.findOne({ userId: req.userId }).session(session);

    // Check if the user has enough balance
    if (!account || account.balance < amount) {
        await session.abortTransaction(); //aborting the transaction when user has insufficient balance or account not found
        return res.status(400).json({ message: "Insufficient balance" })
    }

    // Update the balance of the sender
    const toAccount = await Account.findOne({ userId: to }).session(session);
    // Check if the account exists
    if (!toAccount) {
        await session.abortTransaction();
        return res.status(400).json({
            message: "Invalid account"
        });
    }
    // Perform the transfer
    await Account.updateOne({ userId: req.userId }, { $inc: { balance: -amount } }).session(session);
    await Account.updateOne({ userId: to }, { $inc: { balance: amount } }).session(session);

    // Commit the transaction
    await session.commitTransaction();
    
    res.json({
        message: "Transfer successful"
    });
});

module.exports = router;