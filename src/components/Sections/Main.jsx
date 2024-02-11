import React from "react";
import Left from "./Left";
import Middle from "./Middle";
import Right from "./Right"
import NavBar from "./Navbar";

const Main =({posts,users,user})=> {
    return (
        <>
        <NavBar/>
        <div style={{"display":"flex"}} >
            
            <Left user={user}/>
            <Middle posts={posts} users={users}/>
            <Right/>
        </div>
        </>
        
    )
}
export default Main