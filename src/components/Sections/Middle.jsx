import {useState} from 'react'
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import axios from 'axios'
// import Post from '../functions/Posts'
// import UploadWigdet from '../UploadWiget.jsx'

const Middle =({post})=> {
  const[body,setBody]=useState('')
  const[file,setFile]=useState(null)


const handleCreate=(obj)=>{
  axios.post('http://localhost:3000/post/add',obj)
  .then((res)=>{console.log("created")})
  .catch((error)=>{console.log("error")})
}


    return (
      <>
       <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
        <h3 style={{"textAlign":"center"}}>Feed</h3>
        <textarea name="New Post" onResize="none" id="" cols="30" rows="10" placeholder="New Post" style={{"height":"100px","width":"500px","marginLeft":"20px"}}
        onChange={(e)=>{setBody(e.target.value)}}></textarea>
        <input type="file"  onChange={(e)=>{setFile(e.target.files[0]);console.log(e.target.files[0])}}/>
        <Button onClick={()=>{
        handleCreate({
            body:body,
            file:file
        })
      }}>Upload</Button>

      
       
        </Box>
      </Container>
    </React.Fragment>
    
      </>
     
    )
}

export default Middle
      //   <section className='main' >
      //     <h3 style={{"textAlign":"center"}}>Feed</h3>
      //   <div className='container'>
      //       <div >

      //       <textarea name="New Post" onResize={"none"} id="" cols="30" rows="10" placeholder="New Post" style={{"height":"100px"}}></textarea>
            
      //       <div>
      //        <Button>Upload</Button>
      //       </div>
            
      //       {/* <DeleteRoundedIcon /> */}
      //       </div>
           

            
          
        
      //   </div>
      // </section>