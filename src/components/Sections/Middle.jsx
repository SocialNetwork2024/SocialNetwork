import {useState} from 'react'
import * as React from 'react';
// import CssBaseline from '@mui/material/CssBaseline'
// import Box from '@mui/material/Box'
// import Container from '@mui/material/Container'
// import Button from '@mui/material/Button';
import axios from 'axios'
import Create from '../../components/UploadWiget'
// import { useEffect } from 'react';
import ChatBubbleOutlineTwoToneIcon from '@mui/icons-material/ChatBubbleOutlineTwoTone';
import ThumbUpAltTwoToneIcon from '@mui/icons-material/ThumbUpAltTwoTone';
// import ClearTwoToneIcon from '@mui/icons-material/ClearTwoTone';
import AddCircleOutlineTwoToneIcon from '@mui/icons-material/AddCircleOutlineTwoTone';
import DeleteOutlineTwoToneIcon from '@mui/icons-material/DeleteOutlineTwoTone';


const Middle =({posts,users})=> {
  console.log(users)
  const connectedUser=JSON.parse(localStorage.getItem("userInfo"))
  console.log(connectedUser.user.id)
  // const [lik,setLik]=useState(true)
  const [jame,setJame]=useState()

  const[content,setContent]=useState('')
  const[show,setHide]=useState(true)
 
const addComment=(id,content)=>{
  axios.post(`http://localhost:3000/comment/add/${id}`,content)
  .then((res)=>{console.log("comment added")})
  .catch((error)=>{console.log("error")})

}

const deleteComment=(id)=>{
  axios.delete(`http://localhost:3000/comment/delete/${id}`)
  .then((res)=>{console.log("comment deleted")})
  .catch((error)=>{console.log("error")})

}

const handleDelete=(id)=>{
  axios.delete(`http://localhost:3000/post/delete/${id}`)
  .then((res)=>{console.log("deleted")})
    .catch((error)=>{console.log("error")})
}

console.log(show)
const like=(id,userId)=>{
  axios.post(`http://localhost:3000/like/add/${id}`,{userId})
  .then((res)=>{console.log("liked")
  setJame(res.data)}
  )
    .catch((error)=>{console.log("error")
    })
    setHide(false)
}
const deslike=(id)=>{
  axios.delete(`http://localhost:3000/like/delete/${id}`)
  .then((res)=>{console.log("desliked")})
    .catch((error)=>{console.log("error")})
    setHide(true)
}  

const [showw,setShoww]=useState(false)

    return (
      <div className='middle'>
                  
                          <h3 style={{"textAlign":"center"}}>Feed</h3>
                  <Create />
                  {users?.map((user)=>(
                       user?.posts?.map((post,index)=>{
                          console.log("post by user"+post?.body)
                       
                  
                    return (
                      <div className='posts' key={index}>
                        {user?.name}
                        <div style={{"display":"flex","width":"100%"}}>
                          <span style={{"marginRight":"auto"}}>
                        {post?.body}
                          </span>
                          <DeleteOutlineTwoToneIcon color="primary" sx={{fontSize:20}} onClick={()=>{handleDelete(post?.id);window.location.reload()}}/> 
                          <img src={post?.file} alt="postimage"  style={{"width":"360px","height":"240px"}} />
                        </div>
                      
                     
                     
                     <div style={{"display":"flex","width":"360px"}}>
                      <span>

                      { show?
                        <ThumbUpAltTwoToneIcon color="primary" sx={{fontSize:20}} onClick={()=>{like(post?.id,connectedUser.user.id);window.location.reload()}}/>:
                        <ThumbUpAltTwoToneIcon color="primary" sx={{fontSize:20}} onClick={()=>{deslike(jame.id)}}/>
                      }
                                <ChatBubbleOutlineTwoToneIcon  onClick={()=>{setShoww(!showw)}} color="primary" sx={{fontSize:20}} />
                              </span>

                      <p style={{"fontSize":"10px","textAlign":"right"}}>{post?.createdAt}</p>
                      </div>
                      <div style={{"display":"flex","gap":"50px"}}>  <p>{post?.comments?.length} comments</p> <p> {post?.likes?.length} Likes</p></div>

                      <textarea name="New Post"  id="" cols="30" rows="10" placeholder="New Comment" style={{"height":"40px","width":"500px","marginLeft":"20px","backgroundColor":"#b6bbc4"}} 
                    onChange={(e)=>{setContent(e.target.value)}}></textarea>
                    <div>

       
                    <AddCircleOutlineTwoToneIcon style={{"marginLeft":"auto"}}onClick={(id)=>{addComment(post?.id,
                          {
                            content:content
                          }
                        )
                                          ;window.location.reload()}}/>

                        
                       
                  
                                      <p style={{"fontSize":"16px","textAlign":"left"}}>{post?.comments?.map((comment)=>{
                                        return (

                                          <div style={{"display":"flex","gap":"50px"}}>
                                              <p style={{"margin":"0.5px"}}>{comment?.content}</p>
                                              
                                              <DeleteOutlineTwoToneIcon color="primary" sx={{fontSize:20}} onClick={()=>{deleteComment(comment?.id);window.location.reload()}}/> 
                                                                    </div>
                                                                  )
                                      })}</p>
                                    
                                
                                      </div>
                                      </div>
                                    )
                                  })
                                  ))}



                  







      </div>
     
    )
}

export default Middle


            
          
        
   