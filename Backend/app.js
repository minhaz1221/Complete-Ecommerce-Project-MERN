const express = require('express');
//Router Import
const product = require("./routes/products.routes");
const user = require("./routes/user.routes")
const cookieParser = require("cookie-parser")
//Datbase Import
require("./config/database");
const errorMiddleWare = require("./middleware/error");

const app = express();
app.use(express.json());
app.use(cookieParser())

app.use("/api/v1", product);
app.use("/api/v1", user);

//MiddleWare for Error
app.use(errorMiddleWare);

module.exports = app;