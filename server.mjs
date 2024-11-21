import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import Movie from './models/movieSchema.mjs';


//Setups
const app = express(); //Initialize app variable with Express
dotenv.config();

// DB Connection
connectDB();

// Middleware to parse JSON requests
app.use(express.json());
app.use(morgan("tiny"));
app.use(cors());


//Routes
app.get("/", (req, res) => {
    res.send(`<h1>Hello Ashley</h1>`);
  });
  







  //Environmetal Variables
  const PORT = process.env.PORT || 3000;

  //Listen
  app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });





//   //REFERENCE
//   // Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/movie-api', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log('MongoDB connected'))
// .catch(err => console.error('MongoDB connection error:', err));

// // Route to create a new movie
// app.post('/movies', async (req, res) => {
//   try {
//       const movie = new Movie(req.body);
//       await movie.save();
//       res.status(201).json(movie);
//   } catch (error) {
//       res.status(400).json({ error: error.message });
//   }
// });

// // Route to get all movies
// app.get('/movies', async (req, res) => {
//   try {
//       const movies = await Movie.find();
//       res.status(200).json(movies);
//   } catch (error) {
//       res.status(500).json({ error: error.message });
//   }
// });