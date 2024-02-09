import React from "react";
import Left from "./Left";
import Middle from "./Middle";
import Right from "./Right"
import NavBar from "./Navbar";

const Main =()=> {
    return (
        <>
        <NavBar/>
        <div style={{"display":"flex"}} >
            
            <Left/>
            <Middle />
            <Right/>
        </div>
        </>
        
    )
}
export default Main