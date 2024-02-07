import React from "react";
import Left from "./Left";
import Middle from "./Middle";
import Right from "./Right"
const Main =()=> {
    return (
        <div style={{"display":"flex"}} >
            <Left/>
            <Middle/>
            <Right/>
        </div>
    )
}
export default Main