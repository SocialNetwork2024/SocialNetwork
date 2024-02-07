import React,{useState} from 'react'
import axios from 'axios'
const Posts = ({post}) => {


    const[body,setBody]=useState('')
    const[file,setFile]=useState('')

const handleUpdate=(id,content)=>{
    axios.put(`http:/localhost:3000/post/update/${id}`)
    .then((res)=>{console.log("updated")})
    .catch((error)=>{console.log("error")})
}

const handleDelete=(id)=>{
axios.delete(`http://localhost:3000/post/delete/${id}`)
.then((res)=>{console.log("updated")})
.catch((error)=>{console.log("error")})
}



  return (
    <div>
                <h3>{post.body}</h3>
                {post.file}

      
<input type="text" onChange={(e)=>{setBody(e.target.value)}}/>
<input type="file" onChange={(e)=>{setFile(e.target.value)}}/>
<button onClick={(id)=>{handleUpdate({
    body:body,
    file:file
})}}> Update  </button>


<button onClick={(id)=>{handleUpdate()}}> Delete </button>


    </div>
  )
}

export default Posts
