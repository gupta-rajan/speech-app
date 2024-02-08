import asyncHandler from "../middleware/asyncHandler.js";
import News from "../models/newsModel.js"

//@desc Fetch all news
//@route GET/api/news
//@access Public
const getNews = asyncHandler(async(req,res)=>{
    const news = await News.find({});
    res.json(news);
});

export {getNews};