import React from "react"; 
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const NavBar=()=>{
return (
    <nav style={{"backgroundColor":"lightblue"}}> 
        <ul style={{"display":"flex","listStyleType":"none","justifyContent":"space-around"}}>
          <li><a href="/home">Home</a></li>
          <li><input type="text" /><button>Search</button></li>
          <li><a href="/profil">Profil</a></li>
            <li><Stack direction="row" spacing={1}>
      <Chip
        avatar={<Avatar alt="Natacha" src="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg" />}
        label="UserName"
        variant="outlined"
      />
    </Stack></li>
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