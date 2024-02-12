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
    <>
    <div className='background'>
         <div className="shape"></div>
         <div className="shape"></div>
       </div>
 
       <form className='form1'>
       <h3 className='h3'>Log in</h3>
         <label className='l1'>Email</label>
         <input className="input1" type="email" placeholder="Email" required onChange={(e) => { setEmail(e.target.value) }} />
         <label className='l1'>Passowrd</label>
         <input className="input1" type="password" placeholder="Password" required onChange={(e) => { setPassWord(e.target.value) }} />
         <button className="btn2" onClick={() => {
           Log({
             email: email,
             password: password
           })
         }} type='submit'><a className='a' href="/home">Login</a></button>
       </form> 
       
        </>
  )
}

export default Login

