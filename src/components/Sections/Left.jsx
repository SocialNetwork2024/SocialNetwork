import React from "react";
import ActionAreaCard from "../../Post.jsx";
// import Button from '@mui/material/Button';
const Left =()=> {
    return (
        <section className="sidel" style={{"display":"flex","alignContent":"center"}}>
       
        <div style={{"boder":"1px solid black","backgroundColor":"blue","height":"120px","margin":"20px"}}>

        </div>
        <ActionAreaCard />
        {/* <Button><a href="/edit">Edit profile</a></Button> */}
        <div>
      
        </div>
        
      </section>
    )
}
export default Left