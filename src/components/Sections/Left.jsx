import React from "react";
import LeftCard from "./LeftCard";


const Left =({user})=> {

    return (
        <section className="sidel" style={{"display":"flex","alignContent":"center"}}>
       {console.log(user,"user")}
        <div style={{"boder":"1px solid black","backgroundColor":"blue","height":"120px","margin":"20px"}}>

        </div>
        <LeftCard />
        
        <div>
      
        </div>
        
      </section>
    )
}
export default Left