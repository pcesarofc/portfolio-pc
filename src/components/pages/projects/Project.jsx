import React from "react";
import { Card } from "react-bootstrap";
import Button1 from '../../Button1';

const Project = ({ projects }) => {

  return <Card>
    <Card.Img variant="top" src={projects.image} />
    <Card.Body>
      <Card.Title>{projects.title}</Card.Title>
      <Card.Text>
        {projects.description}
      </Card.Text>
      <Card.Text id="container-button">
        <a href={projects.url}>
          <Button1 text="ACESSAR" />
        </a>
      </Card.Text>
    </Card.Body>
  </Card>
}

export default Project;