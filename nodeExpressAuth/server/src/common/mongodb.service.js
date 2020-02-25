const mongoose = require('mongoose');
const debug = require('debug')('mongodb');

let count = 0;

const options = {
  poolSize: 10,
  bufferMaxEntries: 0,
  useNewUrlParser: true,
  useUnifiedTopology: true
};

const connectWithRetry = () => {
  mongoose.connect(process.env.DATABASE_URL, options)
    .then(() => {
      debug('MongoDB is connected.');
    })
    .catch((err) => {
      debug(`MongoDB connection unsuccessful, retry: ${count += 1}: ${err.message}`);
      setTimeout(connectWithRetry, 5000);
    });
  mongoose.set('useCreateIndex', true);
};

connectWithRetry();

exports.mongoose = mongoose;
