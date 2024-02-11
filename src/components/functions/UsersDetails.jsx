import React from 'react'
import Main from '../Sections/Main'
import LeftCard from '../Sections/LeftCard'

const UsersDetails = ({users}) => {

  return (
    <div>
      {users.map((user)=>{
        return (
          
<>
<Main user={user}/>
<LeftCard user={user}/>
</>

       
          
        )
      })}
      
    </div>
  )
}

  


export default UsersDetails
