const mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config();

const MONGODB_URL = process.env.MONGODB_URL

const db = async () => {
    try {
        await mongoose.connect(MONGODB_URL);
        console.log('Connected to the database');
    } catch (error) {
        console.error('Error connecting to the database: ', error);
    }
}

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 4,
        maxLength: 20
    },
    password: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        minLength: 3,
        maxLength: 20
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        minLength: 3,
        maxLength: 20
    }
})

const User = mongoose.model('User', userSchema);

module.exports = db;
module.exports.User = User;
