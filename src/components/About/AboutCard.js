import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shariful Islam </span>
            from <span className="purple"> Dhaka, Bangladesh.</span>
            <br />In present, I working as a Technical Operations Intern in storrea.com.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movie
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "#63b7fc" }}>
            "Try again and again, One day you will success."{" "}
          </p>
          <footer className="blockquote-footer">Shariful Islam</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
