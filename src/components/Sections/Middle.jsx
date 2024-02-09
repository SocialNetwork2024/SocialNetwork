import {useState} from 'react'
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button';
import axios from 'axios'


// const[body,setBody]=useState('')
//   const[file,setFile]=useState('')

// const handleUpdate=(id,content)=>{
//     axios.put(`http://localhost:3000/post/edit/${id}`,content)
//     .then((res)=>{console.log("updated")})
//     .catch((error)=>{console.log("error")})
// }

const handleDelete=(id)=>{
  axios.delete(`http://localhost:3000/post/delete/${id}`)
  .then((res)=>{console.log("deleted")})
    .catch((error)=>{console.log("error")})
}

const Middle =({posts})=> {
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
   <Box sx={{ bgcolor: '#cfe8fc' }}>
        <h3 style={{"textAlign":"center"}}>Feed</h3>
        <textarea name="New Post"  id="" cols="30" rows="10" placeholder="New Post" style={{"height":"100px","width":"500px","marginLeft":"20px"}}
        onChange={(e)=>{setBody(e.target.value)}}></textarea>
        <input type="file"  onChange={(e)=>{setFile(e.target.files[0]);console.log(e.target.files[0])}}/>
          <Button onClick={()=>{
        handleCreate({
            body:body,
            file:file
        })
      }}>Upload</Button>

                  {posts.map((post,index)=>{
                    return (
                      <div className='posts' key={index}>
                      {post.body}
                      <img src={post.file} alt="postimage"  style={{"width":"360px","height":"240px"}} />
                      <p style={{"fontSize":"10px","textAlign":"right"}}>{post.createdAt}</p>
                      <button onClick={()=>{handleDelete(post.id);window.location.reload()}}> Delete </button> 
                      </div>
                    )
                  })}
    </Box>
  </Container>
</React.Fragment>

    {/* <input type="text" onChange={(e)=>{setBody(e.target.value)}}/>
<input type="file" onChange={(e)=>{setFile(e.target.value)}}/>
<button onClick={(id)=>{handleUpdate(post.id,{
    body:body,
    file:file
});window.location.reload()}}> Update  </button>*/}






      </>
     
    )
}

export default Middle


            
          
        
   