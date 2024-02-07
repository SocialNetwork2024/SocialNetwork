import React from 'react'
import Button from '@mui/material/Button';
const Users = () => {
  return (
    <div className="container">
       <h1>Edit Your Profile</h1>
<div className='edit'>
     
<label>User Name</label>
<input type="text" />

<label>Email Adress</label>
<input type="email" />

<label>OldPassword</label>
<input type="passord" />
<label>Type Your New Passowrd</label>
<input type="passord" />
<label>Confirm Your Password</label>
<input type="password" />

<Button>Update</Button>


    </div>
    </div>
    
  )
}

export default Users
