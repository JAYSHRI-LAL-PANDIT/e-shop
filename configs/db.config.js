const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `Connected to mongoDB database successfully : ${conn.connection.host}`
        .bgGreen.white
    );
  } catch (error) {
    console.log(`Error in mongoDB connection ${error}`.bgRed.white);
  }
};

module.exports = connectDB;
