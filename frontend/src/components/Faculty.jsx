import { Card } from "react-bootstrap";

import React from 'react'
import { Link } from "react-router-dom";

const Faculty = ({faculty}) => {
  return (
    <Card className="my-3 p-3 rounded">
        <Card.Img src={faculty.image} variant="top" />
        <Card.Body>
            <Card.Title as="div">
                <strong>{faculty.name}</strong>
            </Card.Title>
            <Card.Text as="h6">
                <Link to={faculty.linkedin}>
                    Linkedin
                </Link>
            </Card.Text>
        </Card.Body>
    </Card>
  )
}

export default Faculty
