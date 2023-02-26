const mongoose = require('mongoose');
const { app } = require('./app');

main().catch((err) => console.log(err));

async function main() {
  console.log('Connect to DB & start server');
  mongoose.set('strictQuery', true);
  await mongoose.connect('mongodb+srv://jernberg.alexandra@gmail.com:gfn2dC8T@2FWG@d@cluster0.fomqwh0.mongodb.net/?retryWrites=true&w=majority'); 
  app.listen(3000, () => console.log('Server is running on http://localhost:3000'));
}