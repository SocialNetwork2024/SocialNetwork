
import React, {useState,useEffect} 
from 'react'

import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import Sign from './components/SignUp/Login/SignUp.jsx'
import Login from './components/SignUp/Login/Login.jsx';
import Main from './components/Sections/Main.jsx';
import Profil from './components/Profile/Main.jsx'
import Users from './components/functions/Users.jsx'
import PostDetails from './components/functions/PostDetails.jsx'
import axios from 'axios'
import CreatePost from './components/functions/CreatePost.jsx'

const App = () =>{
  
  
  const [posts, setPosts] = useState([]);
  
  
  useEffect(()=>{
    axios.get('http://localhost:3000/post/getAll')
    .then((res)=>{console.log(res.data);
      setPosts(res.data)})
    .catch((error)=>{console.log("error")})    
  },[])
  
  
  
  
  
  
  
  //   useEffect(()=>{
    //     axios.get("url")
    // .then((res)=>{setPosts(res.data),console.log(res.data)})
    // .catch((error)=>{console.log("error")})    
    //   })
    
    //   useEffect(()=>{
      //     axios.get("url")
      // .then((res)=>{setComments(res.data),console.log(res.data)})
      // .catch((error)=>{console.log("error")})    
      //   })
      
      
      
      
      
      return (
        <div className="App">
      <nav style={{"backgroundColor":"lightblue"}}> 
        <ul style={{"display":"flex","listStyleType":"none","justifyContent":"space-around"}}>
          <li><a href="/home">Home</a></li>
          <li><input type="text" /><button>Search</button></li>
          <li><a href="/profil">Profil</a></li>
            <li><img src="https://media.istockphoto.com/id/1388253782/photo/positive-successful-millennial-business-professional-man-head-shot-portrait.jpg?s=1024x1024&w=is&k=20&c=v0FzN5RD19wlMvrkpUE6QKHaFTt5rlDSqoUV1vrFbN4=" alt="propict" className='propic'/></li>
          <li><a href="/login">LogIn</a></li>
          <li><a href="/posts">Posts</a></li>
          <li><a href="/createpost">Create a Post</a></li>

         
   
        </ul>
      </nav>
      
      <header className="App-header">
      <BrowserRouter>
      <Routes>
        {/* <Route path="users" element={<UsersDetails  setSingle={setSingle} users={users} single={single}       />}/> */}
        <Route path ="/" element={<Sign/>}/>
        <Route path ="/home" element={<Main/>}/>
        <Route path ="/posts" element={<PostDetails posts={posts}/>}/>
        <Route path='/createpost' element={<CreatePost />}/>
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
//   const [comments, setComments] = useState([]);
// const [single,setSingle]=useState({})
//   const getSingle=("id")=>{
//     axios.get('http://localhost:3000/post/getAll')
//     .then((res)=>{setSingle(res.data), console.log("deleted")})
//     .catch((error)=>{console.log("error")})   
// }
 