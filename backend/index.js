const express = require("express");
const rootRouter = require("./routes/index");
const db = require('./config/db');
const PORT = 3000;
const app = express();

db();

app.use("/api/v1", rootRouter);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
