import React from "react";
import Left from "./Left";
import Middle from "./Middle";
import Right from "./Right"
const Main =({post})=> {
    return (
        <div style={{"display":"flex"}} >
            <Left/>
            <Middle post={post}/>
            <Right/>
        </div>
    )
}
export default Main