import React from "react";
import "./nav.css"
const NavBar = () => {
  return (
    <nav className="navbar" >
      <ul>
        <li><a href="/home">Home</a></li>
        <li><a href="/login">Login</a></li>
        <li><a href="/profil" placeholder="Search">Profil</a></li>
        <li><img src="https://media.istockphoto.com/id/1388253782/photo/positive-successful-millennial-business-professional-man-head-shot-portrait.jpg?s=1024x1024&w=is&k=20&c=v0FzN5RD19wlMvrkpUE6QKHaFTt5rlDSqoUV1vrFbN4=" alt="propict" className='propic' /></li>
        <li className="search-container"><input type="text" />
        <button>Search</button></li>
      </ul>
    </nav>
  )
}

export default NavBar