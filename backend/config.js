const dotenv = require('dotenv');
dotenv.config(); //loading environment variables

const JWT_SECRET = process.env.JWT_SECRET //getting jwt secret from environment variables

module.exports = JWT_SECRET; //exporting jwt secret