import React from "react"; 

const NavBar=()=>{
return (
    <nav style={{"backgroundColor":"lightblue"}}> 
        <ul style={{"display":"flex","listStyleType":"none","justifyContent":"space-around"}}>
          <li><a href="/home">Home</a></li>
          <li><input type="text" /><button>Search</button></li>
          <li><a href="/profil">Profil</a></li>
            <li><img src="https://media.istockphoto.com/id/1388253782/photo/positive-successful-millennial-business-professional-man-head-shot-portrait.jpg?s=1024x1024&w=is&k=20&c=v0FzN5RD19wlMvrkpUE6QKHaFTt5rlDSqoUV1vrFbN4=" alt="propict" className='propic'/></li>
          {/* <li><a href="/posts">Posts</a></li> */}
          <li><a href="/login">Login</a></li>
          {/* <li><div>
      <input type="text" placeholder='User Name'/>
      <input type="password" placeholder='Password'/>
      <button type='submit'>LogIn</button>

  </div></li> */}
      

         
   
        </ul>
      </nav>
)
}

export default NavBar