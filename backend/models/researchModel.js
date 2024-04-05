// researchModel.js
import mongoose from "mongoose";

const researchSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  images: [{
    imagePath: {
      type: String,
    },
    content: {
      type: [
        {
          type: mongoose.Schema.Types.Mixed // Allow mixed type for nested arrays
        }
      ],
      required: true
    }
  }]
});

const Research = mongoose.model('Research', researchSchema);

export default Research;