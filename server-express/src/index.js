import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import routes from './routes.js';
import { MONGODB_URI_LOCAL, MONGODB_URI_ONLINE } from '../constants.js';

const app = express();

// Setup DB mongoose
const onlineUri = MONGODB_URI_ONLINE;
const localUri = MONGODB_URI_LOCAL;

try {
    await mongoose.connect(onlineUri, { dbName: "moto-krastev-softuni" });
    console.log("✅ Connected to MongoDB Atlas (Online)");
} catch (err) {
    console.warn("⚠️ Cannot connect to MongoDB Atlas. Trying local MongoDB...");
    try {
        await mongoose.connect(localUri);
        console.log("✅ Connected to Local MongoDB");
    } catch (localErr) {
        console.error("❌ Cannot connect to any database!");
        console.error(localErr.message);
        process.exit(1); // stop app
    }
}

// Express Setup
app.use(express.json());
app.use(cors({
    origin: '*', 
    credentials: true
}));
app.use(express.urlencoded({extended: false}));
app.use(routes);

const port = process.env.PORT || 3000;
// Start Express
app.listen(port, () => console.log(`Server is listening on port ${port}...`));