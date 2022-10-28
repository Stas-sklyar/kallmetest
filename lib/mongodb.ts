import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    throw new Error("Incorect MONGODB_URI!");
}

const connectMongo = async () => mongoose.connect(MONGODB_URI);

export default connectMongo