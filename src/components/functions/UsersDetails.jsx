import React from 'react'
import Main from '../Sections/Main'


const UsersDetails = ({users}) => {
  console.log(users,"users")
  return (
    <div>
      {users.map((user)=>{
        
        return (

<Main user={user}/>




        )
      })}
      
    </div>
  )
}

  


export default UsersDetails
