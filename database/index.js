const mongoose = require('mongoose');

exports.clientPromise = mongoose
  .connect(
    process.env.MONGO_URL
  )
  .then((client) => {
    console.log('Connected to MongoDB');
    return client;
  })
  .catch((err) => {
    console.log(err);
  });
