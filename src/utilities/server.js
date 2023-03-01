const mongoose = require('mongoose');
const { app } = require('./app');

require('dotenv').config();
//const dotenv = require("dotenv");
//dotenv.config();

main().catch((err) => console.log(err));


//console.log(process.env) // remove this after you've confirmed it is working

async function main() {
  console.log('Connect to DB & start server');
  mongoose.set('strictQuery', true);

  await mongoose.connect(process.env.CONNECTION_STRING);
  // mongodb+srv://Alexandra:3DnB6NKrnqLEF6vr@cluster0.fomqwh0.mongodb.net/?retryWrites=true&w=majority
  // `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.fomqwh0.mongodb.net/?retryWrites=true&w=majority`
  app.listen(PORT, () => console.log(`The application is listening on port ${process.env.PORT}!`));
}


