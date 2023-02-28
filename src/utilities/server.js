const mongoose = require('mongoose');
const { app } = require('./app');

main().catch((err) => console.log(err));

async function main() {
  console.log('Connect to DB & start server');
  mongoose.set('strictQuery', true);

  await mongoose.connect('mongodb+srv://Alexandra:3DnB6NKrnqLEF6vr@cluster0.fomqwh0.mongodb.net/?retryWrites=true&w=majority');
  
  
  app.listen(3000, () => console.log('Server is running on http://localhost:3000'));
}

//await mongoose.connect('mongodb://127.0.0.1:27017/rest-api-db');