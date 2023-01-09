const express = require('express');
//Router Import
const product = require("./routes/products.routes");
//Datbase Import
require("./config/database");
const errorMiddleWare = require("./middleware/error");

const app = express();
app.use(express.json());

app.use("/api/v1", product);

//MiddleWare for Error
app.use(errorMiddleWare);

module.exports = app;