import React from "react";
import ActionAreaCard from "../../Post";
// import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
const Right = ()=>{
    return (
        <section className="sider" >
        <ul className="sectionul">
          <div>
            <h3>Friends List</h3>
            <div style={{"border":"1px solid black","margin":"15px"}}>
           
              <ActionAreaCard/>
           
            </div>
          
          </div>
         
        </ul>
      </section>
    )
}
export default Right