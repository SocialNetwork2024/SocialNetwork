import React from "react";
import Left from "./Left";
import Middle from "./Middle";
import Right from "./Right"
import NavBar from "./Navbar";

const Main =({posts})=> {
    return (
        <>
        <NavBar/>
        <div style={{"display":"flex"}} >
            
            <Left/>
            <Middle posts={posts}/>
            <Right/>
        </div>
        </>
        
    )
}
export default Main