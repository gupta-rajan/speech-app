// researchModel.js
import mongoose from "mongoose";

const researchSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  imagePath: {
    type: String,
    required: true
  },
  content: {
    type: [
      {
        type: mongoose.Schema.Types.Mixed // Allow mixed type for nested arrays
      }
    ],
    required: true
  }
});

const Research = mongoose.model('Research', researchSchema);

export default Research;