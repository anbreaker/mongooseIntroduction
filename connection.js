// getting-started.js
const mongoose = require('mongoose');

const uri = 'mongodb://127.0.0.1:27017/mywebstore';
const db = mongoose.connection;

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((error) => console.log(error));

db.once('open', () => {
  console.log(`Database is connected to ${uri}`);
});

db.on('error', (error) => {
  console.log(error);
});
