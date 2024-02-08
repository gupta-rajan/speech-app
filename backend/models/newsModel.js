import mongoose from "mongoose";

const newsSchema = new mongoose.Schema({
    date:{
        type: Date,
        required:true
    },
    headline:{
        type: String,
        required: true,
    },
    link:{
        type: String
    },
},{
    timestamps: true,
});

const News = mongoose.model("news",newsSchema);

export default News;