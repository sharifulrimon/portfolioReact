import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus, } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiHtml5,
  DiCss3,
  DiBootstrap,
  DiGit,
  DiPhp,
  DiLaravel,
  DiMysql,
} from "react-icons/di";
import { SiPytorch, SiTensorflow, SiFirebase, SiMysql, SiLaravel } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">

        <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
     
      
     
      <Col xs={4} md={2} className="tech-icons">
        <DiPhp />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiLaravel/>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>

      

      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
    </Row>
  );
}

export default Techstack;
