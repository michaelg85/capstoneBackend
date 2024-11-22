import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.mjs';
import morgan from 'morgan';
import cors from 'cors';
import movieRoutes from './routes/movieRoutes.mjs'


//Setups
const app = express(); //Initialize app variable with Express
dotenv.config();

//DB Connection
connectDB();

//Middleware to parse JSON requests
app.use(express.json());
app.use(morgan("tiny"));
app.use(cors());


//Routes
app.use('/api/movie', movieRoutes);
  
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

// --------------------

// Step 4: Connecting with Your React App

// To connect your React frontend with the Express backend, you will need to fetch data from the API. Here’s how you can do that in a simple React component.

//     Create a React App (if you haven’t already): If you don’t have a React app set up, you can create one using:

//     npx create-react-app movie-client
//     cd movie-client

//     Fetch Movies in a Component: Create a component named MovieList.js to fetch and display the movies:

// // src/components/MovieList.js
// import React, { useEffect, useState } from 'react';

// const MovieList = () => {
//     const [movies, setMovies] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchMovies = async () => {
//             try {
//                 const response = await fetch('http://localhost:5000/movies');
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 const data = await response.json();
//                 setMovies(data);
//             } catch (err) {
//                 setError(err.message);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchMovies();
//     }, []);

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     if (error) {
//         return <div>Error: {error}</div>;
//     }

//     return (
//         <div>
//             <h1>Movie List</h1>
//             <ul>
//                 {movies.map(movie => (
//                     <li key={movie._id}>
//                         <h2>{movie.title} ({movie.releaseYear})</h2>
//                         <p>Director: {movie.director}</p>
//                         <p>Rating: {movie.rating}</p>
//                         <p>{movie.description}</p>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default MovieList;

// Using the MovieList Component: Finally, you can use the MovieList component in your main application file, typically App.js:

// // src/App.js
// import React from 'react';
// import MovieList from './components/MovieList';

// const App = () => {
//     return (
//         <div>
//             <MovieList />
//         </div>
//     );
// };

// export default App;