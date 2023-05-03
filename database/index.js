const mongoose = require('mongoose');

exports.clientPromise = mongoose
  .connect(
    'mongodb+srv://alex:qwe@cluster0-l4izx.gcp.mongodb.net/test?retryWrites=true'
  )
  .then((client) => {
    console.log('Connected to MongoDB');
    return client;
  })
  .catch((err) => {
    console.log(err);
  });
