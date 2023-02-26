const mongoose = require('mongoose');
const { app } = require('./app');

main().catch((err) => console.log(err));

async function main() {
  console.log('Connect to DB & start server');
  mongoose.set('strictQuery', true);

  await mongoose.connect('mongodb://127.0.0.1:27017/rest-api-db');
  // mongodb+srv://<username>:<password>@cluster0.fomqwh0.mongodb.net/?retryWrites=true&w=majority  username:jernberg.alexandra@gmail.com password: gfn2dC8T@2FWG@d
  app.listen(3000, () => console.log('Server is running on http://localhost:3000'));
}


//mongodb://Alexandra:gfn2dC8T%402FWG%40d@cluster0.fomqwh0.mongodb.net/?retryWrites=true&w=majority
// mongorestore --uri mongodb+srv://Alexandra:gfn2dC8T@2FWG@d@cluster0.fomqwh0.mongodb.net 
