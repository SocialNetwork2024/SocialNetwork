
import React from 'react'
// import ReactDOM from 'react-dom'
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
// import Button from '@mui/material/Button';
// import Trial from './Trial.jsx';
// import Otherr from './Otherr.jsx';
// import Users from './components/Users.jsx';
import SignUp from './components/SignUp.jsx';
import Login from './components/Login.jsx';
// import TextField from '@mui/material/TextField';
import Main from './Sections/Main.jsx';


const App = () =>{
  return (
    <div className="App">
      <nav style={{"backgroundColor":"lightblue"}}> 
        <ul style={{"display":"flex","listStyleType":"none","justifyContent":"space-around"}}>
          <li><a href="/home">Home</a></li>
          <li><label>Search</label><input type="text" /><button>Search</button></li>
          {/* <li><a href="/edit">Edit</a></li> */}
          <li><a href="/login">LogIn</a></li>
          <li></li>
        </ul>
      </nav>
      
      <header className="App-header">
      <BrowserRouter>
      <Routes>
        <Route path ="/" element={<SignUp/>}/>
        <Route path ="/home" element={<Main/>}/>
        {/* <Route path="/edit" element={<Users/>}/> */}
        <Route path="/login" element={<Login/>}/>
      </Routes>
      </BrowserRouter>
      </header> 
          
    </div>
    
  );
}

export default App;

 