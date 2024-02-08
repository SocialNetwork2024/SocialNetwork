import React,{useState} from 'react'
import axios from 'axios'
const Posts = ({post}) => {


    const[body,setBody]=useState('')
    const[file,setFile]=useState('')

const handleUpdate=(id,content)=>{
    axios.put(`http://localhost:3000/post/update/${id}`,content)
    .then((res)=>{console.log("updated")})
    .catch((error)=>{console.log("error")})
}

const handleDelete=(id)=>{
  axios.delete(`http://localhost:3000/post/delete/${id}`)
  .then((res)=>{console.log("deleted")})
    .catch((error)=>{console.log("error")})
}


  return (
    <div  className='posts'>
                <h3>{post.body}</h3>
               <img src={post.file} alt="" style={{"width":"480","height":"240px"}}/> 

      
<input type="text" onChange={(e)=>{setBody(e.target.value)}}/>
<input type="file" onChange={(e)=>{setFile(e.target.value)}}/>
<button onClick={(id)=>{handleUpdate(post.id,{
    body:body
    // file:file
})}}> Update  </button>


<button onClick={()=>{handleDelete(post.id)}}> Delete </button>


    </div>
  )
}

export default Posts
