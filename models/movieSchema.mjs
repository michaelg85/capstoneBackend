import mongoose from "mongoose";


const movieSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, },
    title: { type: String, required: true, },
    genre: { type: [String], required: true, }, //Array of strings for multiple genres
    poster: { type: String, required: true, },
    year: { type: Number, required: true, },
    createdAt: { type: Date, defatilt: Date.now, },

})

const Movie = mongoose.model('Movie', movieSchema);

export default Movie;