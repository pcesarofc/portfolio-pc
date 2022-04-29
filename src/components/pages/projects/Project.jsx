import React from "react";
import { Card } from "react-bootstrap";
import Button1 from '../../Button1';
import Tech from "./Tech";

const Project = ({ projects }) => {
  var techs = []
  techs = projects.technologies

  return <Card>
    <Card.Img variant="top" src={projects.image} />
    <Card.Body>
      <Card.Title>{projects.title}</Card.Title>
      <Card.Text>
        {projects.description}
      </Card.Text>
      <div className="tecnologias">
        {techs.map((techs) => (<Tech techs={techs} />))}
      </div>
      <Card.Text id="container-button">
        <a href={projects.url}>
          <Button1 text="ACESSAR" />
        </a>
      </Card.Text>
    </Card.Body>
  </Card>
}

export default Project;