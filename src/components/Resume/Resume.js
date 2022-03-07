import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";

import Resumecontent from "./ResumeContent";

import pdf from "../../Assets/Shariful-Islam.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {




  return (
    <Container fluid className="resume-section">

      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Technical Opertion Intern [Storrea.com]"
              date="September 2021 - Present"
              content={[
                "Developing the e-commerce website store for the different clients",
                " Critically evaluating the client queries & suggestions and adopt them accordingly.",
                " Testing SQA for Different types of website.",
                " Design User Interface and graphics for ads campaign on different platforms and visualization more for products and services.",
                " Web technology analysis, explore the existing POS & E-commerce system, Features extraction & feasibility study",
              ]}
            />
           
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Educational Background</h3>
            <Resumecontent
              title="Daffodil International Unvivsersity, Dhaka "
              date="2017 - 2021"
              content={
                [
                  "BSc in Computer Science & Engineering",
                  "CGPA-3.17 OUT OF 4.00",
                ]
              }
     
            />
             <Resumecontent
              title="Moulabi Samsul Karim College, Feni "
              date="2014 - 2016"
              content={
                [
                  "Hsc in Science",
                  "GPA-4.17 OUT OF 5.00",
                ]
              }
     
            />
 <Resumecontent
              title="Chhagalnaiya Academy, Feni "
              date="2008 - 2014"
              content={
                [
                  "SSc in Science",
                  "GPA-4.81 OUT OF 5.00",
                ]
              }
     
            />
           

          </Col>
        </Row>
      
      </Container>
    </Container>
  );
}

export default Resume;