import mongoose from 'mongoose';
import secret from './config.js';
export const connectDB = async () => {
    try {
        await mongoose.connect(secret.DB_URL)
        console.log("Database connected successfully");
    } catch (error) {
        console.error(`Connection Failed: ${error.message}`);
        process.exit(1);
    }
};


