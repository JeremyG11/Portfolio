import mongoose from "mongoose";

export const mongoConnect = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    if (connect) {
      console.log("Database Connected!");
    }
  } catch (err) {
    console.error(err);
    throw new Error(err);
  }
};
