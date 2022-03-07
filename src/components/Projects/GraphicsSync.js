import React from 'react';
import {Gallery, Item} from "react-photoswipe-gallery";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";

const GraphicsSync = (props) => {
    const {imgPath,description} = props.projects;
    return (
        <Col md={3} className="project-card">


            <Card className="project-card-view ">

            <Item
                tag="logo"
                original={imgPath}
                thumbnail={imgPath}
                width="1000"
                height="1000"
                title="For more information about my design knock me inbox"

            >
                {({ref, open}) => (
                    <img ref={ref} onClick={open} src={imgPath}  />
                )}
            </Item>





            </Card>
        </Col>
    );
};

export default GraphicsSync;