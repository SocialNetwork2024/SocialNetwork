import React from 'react'
import Button from '@mui/material/Button';


// const [firstName, setfirstName] = useState();
// const [lastName, setlastName] = useState();
// const [emailAdress, setemailAdress] = useState();
// const [userName, setuserName] = useState();
// const [age, setage] = useState();
// const [passWord, setpassWord] = useState();

// const url = ""
// const handleCreate =()=> {
//   axios.post(url)
//   .then((res)=>console.log("object"))
//   .catch((errorr)=>{console.log("error")})
// }

const SignUp = () => {
  return (
    <div className='signin'>
    <label>First Name</label>
    <input type="text" onChange={(e)=>{console.log(e.target.value)}} required/>
    
    <label>Last Name</label>
    <input type="text" onChange={(e)=>{console.log(e.target.value)}} required/>
    
    <label>Email Adress</label>
    <input type="email" onChange={(e)=>{console.log(e.target.value)}} required/>
    
    <label>User Name</label>
    <input type="text" onChange={(e)=>{console.log(e.target.value)}} required/>
    
    <label>Age</label>
    <input type="number" min="20" onChange={(e)=>{console.log(e.target.value)}} required/>
    
    <label >Passowrd</label>
    <input type="password" onChange={(e)=>{console.log(e.target.value)}} required/>
    <Button variant="contained" color="success" size='small'
    // onClick={()=>{handleCreate(id,
    //   {
    //   firstName:firstName,
    //   lastName:lastName,
    //   userName:userName,
    //   age:age,
    //   emailAdress,emailAdress,
    //   passWord:passWord  
    //   }
    //   )}} 
      >SignUp</Button>
  
  </div>
  )
}

export default SignUp
