import React, {useState} from 'react';
import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'
import ProjectCard from "./ProjectCards";
import data from './Graphicsdata';


import { Gallery, Item } from 'react-photoswipe-gallery'

import {Row} from "react-bootstrap";
import GraphicsSync from "./GraphicsSync";


const Graphics = () => {


    const [selectedProjectType, setSelectedProjectType] = useState("All");



    let selectedprojects =  data.filter(data =>data.tag == selectedProjectType || data.All === selectedProjectType );
    if (setSelectedProjectType){

    }
    const handleChange = event => {
        setSelectedProjectType(event.target.value );
    };
    return (


    <div style={{paddingTop: '150px', paddingBottom: '50px'}} className="container">

        <form>

            <label>
                <h4 style={{color: "white"}}>Filter By Type</h4>


                <select onChange={handleChange} >
                    <option value="All" >
                        All
                    </option>

                    <option value="Logo Design" >
                        Logo Design
                    </option>
                    <option value="Banner Design"  >
                        Banner Design
                    </option>
                    <option value="Business Card Design"  >
                        Business Card Design
                    </option>
                    <option value=" Social Media AD Design"  >
                        Social Media AD Design
                    </option>
                    <option value=" User Interface Design"  >
                        User Interface Design
                    </option>
                    <option value=" Email Templete"  >
                        Email Templete
                    </option>
                    <option value=" Image Manipulate"  >
                        Image Manipulate
                    </option>



                </select>
            </label>

        </form>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Gallery>


            {
                selectedprojects.map(projects => <GraphicsSync   projects={projects} />)
            }

            </Gallery>

        </Row>



    </div>
)
}



export default Graphics;