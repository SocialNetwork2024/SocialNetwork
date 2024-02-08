import React,{useState} from 'react'
import axios from 'axios'
import Button from '@mui/material/Button';

const CreatePost = () => {

    const[body,setBody]=useState('')
    const[file,setFile]=useState("C:/Users/assir/OneDrive/Desktop/pexels-photo-19797253.webp")


const handleCreate=(obj)=>{
    axios.post('http://localhost:3000/post/add',obj)
    .then((res)=>{console.log("created")})
    .catch((error)=>{console.log("error")})
}

  return (
    <div>
      <h2>Create a Post</h2>

      <label>Add something</label>
      <input type="text" onChange={(e)=>{setBody(e.target.value)}} />
      
      <label>add a Pic</label>
      <input type="file" onChange={(e)=>{setFile(e.target.value)}}/>

      <Button onClick={()=>{
        handleCreate({
            body:body,
            file:file
        })
      }}>Create</Button>
    </div>
  )
}

export default CreatePost
