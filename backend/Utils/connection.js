const mongoose = require("mongoose");
const connectMongoDB = async (connectionUrl) => {
  await mongoose.connect(connectionUrl);
};
//jb bi kisi function ko export krte to usse curly brackets k andr krte hai
module.exports = { connectMongoDB };
