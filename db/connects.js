const mongoose = require("mongoose");

const connectDB = (uri) => {
  console.log("Connect database succesfully");
  return mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
module.exports = connectDB;
