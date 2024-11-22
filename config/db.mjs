import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectionString = process.env.mongoURI;

async function connectDB() {
  try {
    //Connect to DB
    await mongoose.connect(connectionString);

    console.log("Connected to MongoDB...");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

export default connectDB;
