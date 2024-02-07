import React from 'react'
import { Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const NewsCard = ({ article }) => {
  return (
    <Card>
      <Card.Body>
        <Link to={article.link}>
        <Card.Title>{article.headline}</Card.Title>
        </Link>
        <Card.Text>Date: {article.date}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default NewsCard;
