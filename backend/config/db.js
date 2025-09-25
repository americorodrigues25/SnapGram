const mongoose = require("mongoose");
const dbUser = process.env.DB_USER;
const dbPassWord = encodeURIComponent(process.env.DB_PASS);

const conn = async () => {
  try {
    const dbConn = await mongoose.connect(
      `mongodb+srv://${dbUser}:${dbPassWord}@cluster0.byfwgsu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
    );

    console.log("Conectou ao banco!");

    return dbConn;
  } catch (error) {
    console.log(error);
  }
};

conn();

module.exports = conn;

// connection
