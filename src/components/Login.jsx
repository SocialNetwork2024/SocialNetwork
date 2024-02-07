import React from 'react'
import Button from '@mui/material/Button';

const Login = () => {
  return (
    <div className='signin'>
     <label>User Name</label>
      <input type="text" />
      <label>Passowrd</label>
      <input type="password" />
      <button type='submit'>LogIn</button>
      <Button variant="contained" color="success" size='small'>Submit</Button>
  </div>
  )
}

export default Login

