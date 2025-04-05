import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()


const mongodb = process.env.MONGODB;
const connectDB = async () => {
  mongoose.connection.on('connected', () =>
    console.log("Server has successfully connected to mongodb")
  );
  await mongoose.connect(mongodb);
};

export default connectDB;
