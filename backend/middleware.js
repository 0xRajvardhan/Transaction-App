const JWT_SECRET = require("./config");
const jwt = require("jsonwebtoken")

// Middleware to check if the user is authenticated
const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization; //getting the authorization header

    //checking if the authorization header is present and starts with 'Bearer'
    if (!authHeader || !authHeader.startsWith('Bearer')) {
        res.status(403).json({});
    }
    const token = authHeader.split('')[1]; //getting the token from the authorization header

    try {
        const decoded = jwt.verify(token, JWT_SECRET); //verifying the token
        
        //checking if the decoded token has a userId
        if (decoded.userId) {
            req.userId = decoded.userId //setting the userId in the request object
            next(); //if the token is valid, call the next middleware
        } else {
            return res.status(403).json({});
        }

    } catch (err) {
        return res.status(403).json({}); //if the token is invalid, return 403
    }
}

module.exports = {
    authMiddleware
}