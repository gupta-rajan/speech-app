import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NewsCard = ({ article }) => {
  // Extracting the date part from the ISO string
  const date = new Date(article.date);
  const datePart = date.toISOString().split('T')[0];

  return (
    <Card>
      <Card.Body>
        <Link to={article.link}>
          <Card.Title>{article.headline}</Card.Title>
        </Link>
        <Card.Text>Date: {datePart}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default NewsCard;