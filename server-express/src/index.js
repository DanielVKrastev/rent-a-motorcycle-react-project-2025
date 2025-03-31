import express from 'express';
import expressSession from 'express-session';
import mongoose from 'mongoose';
import cors from 'cors';

import routes from './routes.js';

const app = express();

// Setup DB mongoose
const onlineUri = "mongodb+srv://danielvalentinov01:8OE4dQIjRDx3hu3d@moto-krastev-softuni.lnz5ym4.mongodb.net/?retryWrites=true&w=majority&appName=Moto-Krastev-Softuni";
const localUri = "mongodb://127.0.0.1:27017/moto-krastev-softuni";

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
app.use(expressSession({
    secret: 'dasfr*vHJIdhjio()FB549324',
    resave: false,
    saveUninitialized: false,
  }));
app.use(routes);

// Start Express
app.listen(3000, () => console.log('Server is listening on http://localhost:3000...'));