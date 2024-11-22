import mongoose from "mongoose";


const movieSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, },
    title: { type: String, required: true, },
    genre: { type: String },
    poster: { type: String },
    year: { type: Number },
    plot: { type: String },
    createdAt: { type: Date, default: Date.now, },
});

movieSchema.index({ category: 1 }); //this index should be created in ascending order
// movieSchema.index({ category: -1 }); //this index should be created in descending order

export default mongoose.model('Movie', movieSchema);
