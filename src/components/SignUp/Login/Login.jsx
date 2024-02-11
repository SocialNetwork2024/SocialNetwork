import React, {useState} from 'react'
import axios from 'axios'
// import Button from '@mui/material/Button';

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassWord] = useState('')

  const Log = (obj) => {
    axios.get("http://localhost:3000/login", obj)
      .then((res) => { console.log("logged in") })
      .catch((error) => { console.log("error") })
  }

  return (
    <>
   <div className='background1'>
        <div className="shape1"></div>
        <div className="shape1"></div>
      </div>

      <form className='form1'>
      <h3 className='h3'>Log in</h3>
        <label className='l'>Email</label>
        <input className="input1" type="email" placeholder="Email" required onChange={(e) => { setEmail(e.target.value) }} />
        <label className='l'>Passowrd</label>
        <input className="input1" type="password" placeholder="Password" required onChange={(e) => { setPassWord(e.target.value) }} />
        <button className="btn1" onClick={() => {
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