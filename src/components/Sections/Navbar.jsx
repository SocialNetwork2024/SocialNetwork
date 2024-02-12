import React from "react"; 



const NavBar=()=>{
  // const logout=()=>{
  //   localStorage.removeItem("userInfo")
  // }
return (


<div class="e17_5" style={{"display":"flex","justifyContent":"space-around"}}>
      <span className="e17_6"> <img src="https://www.svgrepo.com/show/81634/healthy-lifestyle-logo.svg" alt="" style={{"width":"50px","height":"50px","marginTop":"-20px"}}/> </span>
      <span className="e17_7"><a href="/home">Home</a></span>
      <span className="e17_8"><a href="/login" >Logout</a></span>
      <span className="e17_10"><a href="# ">My profile</a></span>
      <div className="e17_11">
        <span className="e17_12">Search</span>
      </div>
      {/* <div ><img className="e17_13" src="https://images.pexels.com/photos/3777952/pexels-photo-3777952.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /></div> */}
      <input className="e17_14" type="text" />
    </div>
  
    
      

         
   
     
)
}

export default NavBar