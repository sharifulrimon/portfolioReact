import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";

import { Container, Row, Col } from "react-bootstrap";

function ProjectCards(props) {

  const {imgPath,isBlog,link,description,title} = props.projects;

  return (


<Col md={4} className="project-card">
  
   
    <Card className="project-card-view ">
      
      <Card.Img variant="top" src={imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {description}
        </Card.Text>
        <Button variant="primary" href={link} target="_blank">
          <BiLinkExternal /> &nbsp;
          {isBlog ? "View Blog" : "View Project"}
        </Button>
      </Card.Body>
    </Card>
    </Col>

  
  );
}
export default ProjectCards;
