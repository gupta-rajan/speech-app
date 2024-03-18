import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Row} from 'react-bootstrap';
import NewsCard from '../components/NewsCard';
// import news from '../news';

const NewsScreen = () => {

  const [news, setNews] = useState([]);

  useEffect(()=>{
    const fetchNews = async()=>{
      const {data} = await axios.get('/api/news');
      setNews(data);
    }

    fetchNews();
  },[]);

  return (
    <>
        <h1>News</h1>
        <Row>
        {news.map((article)=>(
            <NewsCard key={article._id} article={article}/>
        ))}
        </Row>
    </>
  )
}

export default NewsScreen