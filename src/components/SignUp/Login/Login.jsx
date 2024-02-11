import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
// import Button from '@mui/material/Button';

const Login = () => {

const [email,setEmail]=useState('')
const [password,setPassWord]=useState('')
const navigate=useNavigate()
const Log=(obj)=>{
  axios.post("http://localhost:3000/user/login",obj)
  .then((res)=>{console.log("logged in")
  localStorage.setItem("userInfo",JSON.stringify(res.data))
  navigate('/home')
  })
  .catch((error)=>{console.log(error)})
  
}

  return (
    <div className='signin'>
     <label>Email</label>
      <input type="email" required onChange={(e)=>{setEmail(e.target.value)}}/>
      <label>Passowrd</label>
      <input type="password" required onChange={(e)=>{setPassWord(e.target.value)}}/>
      <button onClick={()=>{
        Log({
          email:email,
          password:password
        })
      }} type='submit'>Login</button>
      {/* <Button variant="contained" color="success" size='small'>Submit</Button> */}
  </div>
  )
}

export default Login

