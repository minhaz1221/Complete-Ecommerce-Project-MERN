const express = require('express');
//Router Import
const product = require("./routes/products.routes");
//Datbase Import
require("./config/database");

const app = express();
app.use(express.json());

app.use("/api/v1", product);

module.exports = app;