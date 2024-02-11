import React from 'react'
import Button from '@mui/material/Button';
import Widget from '../UploadWiget'
const Users = ({users}) => {
  console.log(users,"from signin")
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
<Widget/>

<Button>Update</Button>


    </div>
    </div>
    
  )
}

export default Users
