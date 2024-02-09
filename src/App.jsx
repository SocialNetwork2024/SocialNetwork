
import React, {useState,useEffect} 
from 'react'

import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import Sign from './components/SignUp/Login/SignUp.jsx'
import Login from './components/SignUp/Login/Login.jsx';
import Main from './components/Sections/Main.jsx';
import Profil from './components/Profile/Main.jsx'
import Users from './components/functions/Users.jsx'
// import PostDetails from './components/functions/PostDetails.jsx'
import axios from 'axios'



const App = () =>{
  
  
  const [posts, setPosts] = useState([]);
  // const [comments, setComments] = useState([]);
  
  
  useEffect(()=>{
    axios.get('http://localhost:3000/post/getAll')
    .then((res)=>{console.log(res.data);
      setPosts(res.data)})
    .catch((error)=>{console.log("error")})    
  },[])
  


 
  //   useEffect(()=>{
    //     axios.get("url")
    // .then((res)=>{setComments(res.data),console.log(res.data)})
    // .catch((error)=>{console.log("error")})    
    //   })
  
  
  
  
  

      
      

      return (
        <div className="App">
      
      <header className="App-header">
      <BrowserRouter>
      <Routes>
        {/* <Route path="users" element={<UsersDetails  setSingle={setSingle} users={users} single={single}       />}/> */}
        <Route path ="/" element={<Sign/>}/>
        <Route path ="/home" element={<Main  posts={posts}/> }/>
        {/* <Route path ="/posts" element={<PostDetails posts={posts}/>}/> */}
        <Route path ="/profil" element={<Profil/>}/>
        {/* <Route path="User" element={<SingleProfile single={single}/>}/> */}
        
        <Route path="/edit" element={<Users/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
      </BrowserRouter>
     
      
      </header> 
      
    </div>
    
    );
  }
  
  export default App;
  
  // import UsersDetails from './components/UsersDetails.jsx';
  // import SingleProfile from './components/SingleProfile.jsx';
//   const [users, setUsers] = useState([]);
