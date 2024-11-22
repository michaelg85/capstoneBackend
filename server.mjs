import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import connectDB from './config/db.mjs';
import movieRoutes from './routes/movieRoutes.mjs';


//Setups
const app = express(); //Initialize app variable with Express
dotenv.config();

//DB Connection
connectDB();

//Middleware to parse JSON requests
app.use(express.json());
app.use(morgan("tiny"));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

//Routes
app.use('/api/movies', movieRoutes);
  
//Environmetal Variables
const PORT = process.env.PORT || 3000;

//Listen
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
