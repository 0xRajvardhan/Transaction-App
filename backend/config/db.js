const mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config(); //loading environment variables

const MONGODB_URL = process.env.MONGODB_URL //getting mongodb url from environment variables

const db = async () => {
    try {
        await mongoose.connect(MONGODB_URL); //connecting to the database
        console.log('Connected to the database');
    } catch (error) {
        console.error('Error connecting to the database: ', error); //logging error message
    }
}

//mongoose schema for user
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

// mongoose schema for account
const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    balance: {
        type: Number,
        required: true,
    }
})

const Account = mongoose.model('Account', accountSchema); //creating account model
const User = mongoose.model('User', userSchema); //creating user model

module.exports = db; //exporting db function
module.exports.User = User; //exporting User model
module.exports.Account = Account; //exporting Account model
