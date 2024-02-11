import React from "react";
import Left from "./Left";
import Middle from "./Middle";
import Right from "./Right"
import NavBar from "./Navbar";

const Main =({posts,users})=> {
    return (
        <>
        <NavBar/>
        <div style={{"display":"flex"}} >
            
            <Left users={users}/>
            <Middle posts={posts}/>
            <Right/>
        </div>
        </>
        
    )
}
export default Main