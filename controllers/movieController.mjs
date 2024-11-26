import Movie from "../models/movieSchema.mjs";
import movie from "../data/data.mjs";

//Create a new Movie
async function createMovie(req, res) {
  try {
    //Create new movie object
    let newMovie = new Movie(req.body);

    //Save new obj to DB
    await newMovie.save();

    //Return result
    res.json(newMovie);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server Error" });
  }
}

//Get all Movies
async function getAllMovies(req, res) {
  try {
    //Find All {} Movies from DB
    let allMovies = await Movie.find({});

    //Return result
    res.json(allMovies);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server Error" });
  }
}

//Get one Movie by ID
async function getOneMovie(req, res) {
  try {
    //Find One Movie from DB
    let oneMovie = await Movie.findById(req.params.id);

    //Return result
    res.json(oneMovie);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server Error" });
  }
}

//Update one Movie by ID
async function updateOneMovie(req, res) {
  try {
    //Update Movie from DB
    let updateMovie = await Movie.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    //Return result
    res.json(updateMovie);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server Error" });
  }
}

//Delete Movie
async function deleteOneMovie(req, res) {
  try {
    //Delete Movie from DB
    await Movie.findByIdAndDelete(req.params.id);

    //Return result
    res.json({ msg: "Movie Deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server Error" });
  }
}

//Seed DB
async function seedDB(req, res) {
  try {
    await Movie.deleteMany({}); //Delete everything
    await Movie.create(movie); //Reseed with new data

    res.json({ msg: "DB Seeded" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
}

export default {
  createMovie,
  getAllMovies,
  getOneMovie,
  updateOneMovie,
  deleteOneMovie,
  seedDB,
};
