
import React, {useState,useEffect} 
from 'react'


import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './components/SignUp/Login/Login.jsx';
import Sign from './components/SignUp/Login/SignUp.jsx'
import Main from './components/Sections/Main.jsx';
import Profil from './components/Profile/Main.jsx'
import Users from './components/functions/Users.jsx'
import axios from 'axios'
import UsersDetails from './components/functions/UsersDetails.jsx';

import './App.css';
// import './Login.css'
// import './Signin.css'

const App = () =>{
  
  
  const [posts, setPosts] = useState([]);
  const [users,setUsers] =useState([])
  
  
  useEffect(()=>{
    axios.get('http://localhost:3000/post/getAll')
    .then((res)=>{console.log(res.data,"posts");
      setPosts(res.data)})
    .catch((error)=>{console.log("error")})
    axios.get('http://localhost:3000/user/getAll')
  .then((res)=>{console.log(res.data,"users");
    setUsers(res.data)})
  .catch((error)=>{console.log("error")})        
  },[])
  



  
      return (
        <div className="App">
      
      <header className="App-header">
      <BrowserRouter>
      <Routes>
     
        <Route path="/login" element={<Login/>}/>
        <Route path ="/" element={<Sign/>}/>
        <Route path ="/home" element={<Main  posts={posts} users={users}/> }/>
        <Route path="user" element={<UsersDetails />}/>
        <Route path ="/profil" element={<Profil/>}/>
    
        
        <Route path="/edit" element={<Users/>}/>
      </Routes>
      </BrowserRouter>
     
      
      </header> 
      
    </div>
    
    );
  }
  
  export default App;
  
