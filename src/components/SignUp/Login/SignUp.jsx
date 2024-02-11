import React, 
{ useState } from 'react'
// import Button from '@mui/material/Button';
import axios from 'axios'



const SignUp = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleCreate = (obj) => {
    axios.post('http://localhost:3000/signup', obj)
      .then((res) => { console.log("created") })
      .catch((error) => { console.log("error") })
  }


  return (
    <>
      <div className='bg2'>
        <div className="shape2 one"></div>
        <div className="shape2 tow"></div>
        <div className="shape2 ther"></div>
        <div className="shape2 four"></div>
      </div>
      <form className='form2'>
        <h3 style={{"color":"black"}}>SignUp</h3>
        <label className='l1'>User Name</label>
        <input className="input2" type="text" placeholder="Name" onChange={(e) => { setName(e.target.value) }} required />

        <label className='l1'>Email Adress</label>
        <input className="input2" type="email" placeholder="Email" onChange={(e) => { setEmail(e.target.value) }} required />

        <label className='l1'>Passowrd</label>
        <input className="input2" type="password" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} minLength={8} required />

        <button className="btn2" onClick={() => {
          handleCreate({
            name: name,
            email: email,
            password: password,
          })
        }}  ><a href="/login">SingUp</a> </button>

        <div style={{"display":"flex","alignItems":"center","gap":"5px"}}>
        <p style={{"color":"black"}}>Alredy Sign In ?</p>
        <a className="a2" style={{"textDecoration":"underline"}}href="/login">Login</a>
        </div>
     
      </form>
    </>
  )
}

export default SignUp