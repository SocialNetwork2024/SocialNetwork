import React,
{ useState } from 'react'
import axios from 'axios'
import "./sign.css"
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
      <div className='background'>
        <div className="shape one"></div>
        <div className="shape tow"></div>
        <div className="shape ther"></div>
        <div className="shape four"></div>
      </div>
      <form>
        <h3>SignUp</h3>
        <label>User Name</label>
        <input type="text" placeholder="Name" onChange={(e) => { setName(e.target.value) }} required />

        <label>Email Adress</label>
        <input type="email" placeholder="Email" onChange={(e) => { setEmail(e.target.value) }} required />

        <label >Passowrd</label>
        <input type="password" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} minLength={8} required />

        <button onClick={() => {
          handleCreate({
            name: name,
            email: email,
            password: password,
          })
        }}  ><a href="/login">SingUp</a> </button>


        <p>Alredy Sign In ?</p>
        <a href="/login">Login</a>
      </form>
    </>
  )
}

export default SignUp