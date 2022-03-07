import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";



import data from '../Projectsdata';

function Projects() {

  
  
  const [selectedProjectType, setSelectedProjectType] = useState("All");


  
  let selectedprojects =  data.filter(data =>data.tag == selectedProjectType || data.All === selectedProjectType );
  const handleChange = event => {
    setSelectedProjectType(event.target.value );
  };

console.log();

  return (
    
    <Container fluid className="project-section">

      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <form>
         
          <label>
           <h4 style={{color: "white"}}>Filter By Type</h4>


            <select onChange={handleChange} >
                 <option value="All" >
                    All
                </option>
        
                <option value="Web Development" >
                    Web Developement
                </option>
                <option value="Web Design"  >
                   Web Design
                </option>
                <option value="React"  >
                   React
                </option>
      
            </select>
          </label>

        </form>
        
        
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                 
                 { 
                   selectedprojects.map(projects => <ProjectCard   projects={projects} />)
                 }
        

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
