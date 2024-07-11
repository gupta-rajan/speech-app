import React from 'react'
import { Row} from 'react-bootstrap';
import NewsCard from '../components/NewsCard';
import { useGetNewsQuery } from '../slices/newsApiSlice';
import Loader from '../components/Loader';
import Message from '../components/Message';

const NewsScreen = () => {
  const {data: news,isLoading,error} = useGetNewsQuery();
  
  return (
    <>
      {isLoading? (
        <Loader/>
      ): error? (<Message variant='danger'>{error?.data?.message || error.error}</Message>):
      (<>
        <h1 className="text-center mb-4">News</h1>
        <Row>
        {news.map((article)=>(
            <NewsCard key={article._id} article={article}/>
        ))}
        </Row>
      </>)}
    </>
  )
}

export default NewsScreen