const express = require("express");
const rootRouter = require("./routes/index");
const db = require('./config/db');
const PORT = process.env.PORT || 3000; 

const app = express(); //initializing express application

//CORS middleware for allowing cross-origin requests (different ports, domains)
const cors = require('cors')
app.use(cors())

app.use(express.json()); //body parser

db(); //connecting to database

app.use("/api/v1", rootRouter); //using root router for /api/v1 path


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
