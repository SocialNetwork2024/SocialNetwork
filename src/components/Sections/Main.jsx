import React from "react";
import Left from "./Left";
import Middle from "./Middle";
import Right from "./Right"
import NavBar from "./Navbar";

const Main =({posts,users})=> {
    return (
        <>
        <NavBar/>
        <div style={{"display":"flex","justifyContent":"space-around"}} >
            
            <Left users={users}/>
            <Middle posts={posts} users={users}/>
            <Right/>
        </div>
        </>
        
    )
}
export default Main