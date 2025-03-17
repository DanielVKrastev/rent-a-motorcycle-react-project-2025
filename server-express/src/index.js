import express from 'express';
import expressSession from 'express-session';
import mongoose from 'mongoose';
import cors from 'cors';

import routes from './routes.js';

const app = express();

// Setup DB mongoose
try{
    const uri = 'mongodb://127.0.0.1/';
    await mongoose.connect(uri, { dbName: 'test-motorcycle' });

    console.log('Success DB connect');
}catch(err){
    console.error('Cannot connect to DB');
    console.log(err.message);
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