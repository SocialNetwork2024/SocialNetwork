import React, 
{ useState } from 'react'
import Button from '@mui/material/Button';
import axios from 'axios'



const SignUp = () => {

  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  const handleCreate=(obj)=>{
    axios.post('http://localhost:3000/signup',obj)
    .then((res)=>{console.log("created")})
    .catch((error)=>{console.log("error")})
  }
  

  return (
    <div className='signin'>
    <label>User Name</label>
    <input type="text" onChange={(e)=>{setName(e.target.value)}} required/>
    
    <label>Email Adress</label>
    <input type="email" onChange={(e)=>{setEmail(e.target.value)}} required/>
    
    <label >Passowrd</label>
    <input type="password" onChange={(e)=>{setPassword(e.target.value)}}  minLength={8} required/>

     <Button  onClick={()=>{handleCreate({
      name:name,
      email:email,
      password:password,
    })}}   variant="contained" color="success" size='small'
   
 
      >SignUp</Button> 
   
  </div>
  )
}

export default SignUp
