import React from 'react'
import Button from '@mui/material/Button';




const SignUp = () => {
  return (
    <div className='signin'>
    <label>First Name</label>
    <input type="text" onChange={(e)=>{console.log(e.target.value)}} required/>
    
    <label>Last Name</label>
    <input type="text" onChange={(e)=>{console.log(e.target.value)}} required/>
    
    <label>Email Adress</label>
    <input type="email" onChange={(e)=>{console.log(e.target.value)}} required/>
    
    <label>User Name</label>
    <input type="text" onChange={(e)=>{console.log(e.target.value)}} required/>
    
    <label>Age</label>
    <input type="number" min="20" onChange={(e)=>{console.log(e.target.value)}} required/>
    
    <label >Passowrd</label>
    <input type="password" onChange={(e)=>{console.log(e.target.value)}} required/>

     <Button variant="contained" color="success" size='small'
    
 
      >SignUp</Button> 
   
  </div>
  )
}

export default SignUp
