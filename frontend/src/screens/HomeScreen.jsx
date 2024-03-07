import React from 'react'
import { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import NewsCard from '../components/NewsCard';
// import news from '../news';
import axios from 'axios';

const HomeScreen = () => {

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
      <h1>Latest News</h1>
      <Row>
        {news.map((article)=>(
          <NewsCard key={article._id} article={article} />
        ))}
      </Row>
    </>
  )
}

export default HomeScreen