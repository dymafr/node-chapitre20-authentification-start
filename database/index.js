const mongoose = require('mongoose');

exports.clientPromise = mongoose
  .connect(
    'mongodb+srv://alex:qwe@cluster0-l4izx.gcp.mongodb.net/test?retryWrites=true'
  )
  .catch((err) => {
    console.log(err);
  });
