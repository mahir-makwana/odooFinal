const mongoose = require("mongoose");

const db = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL);
    console.log("Connect DB successfully");
  } catch (error) {
    console.log("database error: ", error.message);
  }
};

module.exports = db;
