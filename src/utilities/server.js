//const express = require("express");
const mongoose = require('mongoose');
const { app } = require('./app');
//app.use(express.json())
require('dotenv').config();

main().catch((err) => console.log(err));


async function main() {
  console.log('Connect to DB & start server');
  mongoose.set('strictQuery', true);

  await mongoose.connect(process.env.CONNECTION_STRING);
    app.listen(process.env.PORT, () => console.log(`The application is listening on port ${process.env.PORT}!`));
}