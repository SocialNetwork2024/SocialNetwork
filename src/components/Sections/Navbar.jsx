import React from "react"; 
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { Link } from "react-router-dom";

const NavBar=()=>{
return (
    <nav style={{"backgroundColor":"lightblue"}}> 
        <ul style={{"display":"flex","listStyleType":"none","justifyContent":"space-around"}}>
          <li><Link to="/home"> Home </Link></li>
          <li><input type="text" /><button>Search</button></li>

            <li><Stack direction="row" spacing={1} > 
            <Link to='/profil'>
      <Chip 
        style={{"width":"160px","height":"60px","fontSize":"16px"}}
        avatar={<Avatar style={{"width":"50px","height":"50px","marginRight":"auto"}} alt="Natacha" src="https://images.pexels.com/photos/1722198/pexels-photo-1722198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />}
        label="UserName"
        variant="outlined"
      /> 
      </Link>
    </Stack></li>
   
          <li><Link to="/login"> Login </Link></li>
  
    
   
        </ul>
      </nav>
)
}

export default NavBar