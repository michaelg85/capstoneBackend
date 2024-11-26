import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  userId: { type: Number, required: true },
  title: { type: String, required: true },
  genre: { type: String },
  poster: { type: String },
  year: { type: Number },
  plot: { type: String },
  createdAt: { type: Date, default: Date.now },
  listType: { type: String ,}
});

movieSchema.index({ category: 1 }); //this index will be created in ascending order
// movieSchema.index({ category: -1 }); //this index will be created in descending order

export default mongoose.model("Movie", movieSchema);
