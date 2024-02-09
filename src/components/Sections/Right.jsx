import React from "react";
import RightCard from "./RightCard";
// import Button from '@mui/material/Button';
// import { Link } from "react-router-dom";
const Right = ()=>{
    return (
        <section className="sider" >
        <ul className="sectionul">
          <div>
            <h3>Friends List</h3>
            <div style={{"border":"1px solid black","margin":"15px"}}>
           
              <RightCard/>
           
            </div>
          
          </div>
         
        </ul>
      </section>
    )
}
export default Right