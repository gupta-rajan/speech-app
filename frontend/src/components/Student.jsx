import { Card } from "react-bootstrap";

import React from 'react'
import { Link } from "react-router-dom";

const Student = ({student}) => {
  return (
    <Card className="my-3 p-3 rounded">
        <Card.Img src={student.image} variant="top" />
        <Card.Body>
            <Card.Title as="div">
                <strong>{student.name}</strong>
            </Card.Title>
            <Card.Text as="h4">
                <Link to={student.linkedin}>
                    Linkedin
                </Link>
            </Card.Text>
        </Card.Body>
    </Card>
  )
}

export default Student
