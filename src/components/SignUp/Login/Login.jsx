import React, { useState } from 'react'
import axios from 'axios'
import "./login.css"

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
   <div className='background'>
        <div className="shape"></div>
        <div className="shape"></div>
      </div>

      <form>
      <h3>Log in</h3>
        <label>Email</label>
        <input type="email" placeholder="Email" required onChange={(e) => { setEmail(e.target.value) }} />
        <label>Passowrd</label>
        <input type="password" placeholder="Password" required onChange={(e) => { setPassWord(e.target.value) }} />
        <button onClick={() => {
          Log({
            email: email,
            password: password
          })
        }} type='submit'><a href="/home">Login</a></button>
      </form> 
      
       </>
  )
}

export default Login

