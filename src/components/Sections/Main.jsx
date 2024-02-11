import React from "react";
import Left from "./Left";
import Middle from "./Middle";
import Right from "./Right"
import NavBar from "./Navbar";

const Main =({posts,user})=> {
    return (
        <>
        <NavBar/>
        <div style={{"display":"flex"}} >
            
            <Left user={user}/>
            <Middle posts={posts} user={user}/>
            <Right/>
        </div>
        </>
        
    )
}
export default Main