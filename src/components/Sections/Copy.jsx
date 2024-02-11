import {useState} from 'react'
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import axios from 'axios'
import Create from '../../components/UploadWiget'
import ChatBubbleOutlineTwoToneIcon from '@mui/icons-material/ChatBubbleOutlineTwoTone';
import ThumbUpAltTwoToneIcon from '@mui/icons-material/ThumbUpAltTwoTone';
import ClearTwoToneIcon from '@mui/icons-material/ClearTwoTone';
import AddCircleOutlineTwoToneIcon from '@mui/icons-material/AddCircleOutlineTwoTone';
import DeleteOutlineTwoToneIcon from '@mui/icons-material/DeleteOutlineTwoTone';



const Middle =({posts,users})=> {
  
  const[show,setShow]=useState(false)
  const[content,setContent]=useState('')
  console.log(users)

 
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


const like=(id,userId)=>{
  axios.post(`http://localhost:3000/like/add/${id}`,{userId})
  .then((res)=>{console.log("liked")})
    .catch((error)=>{console.log("error")})
}
// const deslike=(id)=>{
//   axios.delete(`http://localhost:3000/like/delete/${id}`)
//   .then((res)=>{console.log("desliked")})
//     .catch((error)=>{console.log("error")})
// }



    return (
      <>
  <React.Fragment>
        <CssBaseline />
    <Container maxWidth="sm">
    <Box sx={{ bgcolor: '#cfe8fc' }}>
          <h3 style={{"textAlign":"center"}}>Feed</h3>
  <Create />
  {users?.map((user)=>(
       user?.posts?.map((post,index)=>{
         
       
  
    return (
      // <div className='posts' key={index}>
       
      //   <div style={{"display":"flex"}}>
      //   {post?.body}
        
        <div className='posts' key={index}>
        <div style={{"display":"flex","width":"100%"}}>
          <span style={{"marginRight":"auto"}}>  {user?.name}  </span>
           
           <DeleteOutlineTwoToneIcon color="primary" sx={{fontSize:20}} onClick={()=>{handleDelete(post.id);window.location.reload()}}/>
         </div>
         <span style={{"marginRight":"auto","marginLeft":"auto"}}>
           {post.body}
           </span>
        
      {/* <button onClick={()=>{handleDelete(post?.id);window.location.reload()}}> Delete </button> 
        </div> */}
      
      <img src={post?.file} alt="postimage"  style={{"width":"360px","height":"240px"}} />
      {/* <p style={{"fontSize":"10px","textAlign":"right"}}>{post?.createdAt}</p> */}
      <div style={{"display":"flex","width":"360px"}}>
              <span>
            <ThumbUpAltTwoToneIcon color="primary" sx={{fontSize:20}} onClick={()=>{like(post.id)}}/>
            <ChatBubbleOutlineTwoToneIcon  onClick={()=>{setShow(!show)}} color="primary" sx={{fontSize:20}} />
              </span>
            <p style={{"fontSize":"10px","marginLeft":"auto"}}>{post.createdAt}</p>
            </div>


      <div style={{"display":"flex","gap":"50px"}}>  <p>{post?.comments?.length} comments</p> <p> {post?.likes?.length} Likes</p></div>







    <textarea name="New Post"  id="" cols="30" rows="10" placeholder="New Comment" style={{"height":"40px","width":"500px","marginLeft":"20px"}}
    onChange={(e)=>{setContent(e.target.value)}}></textarea>
    <div>







       
    <button onClick={(id)=>{addComment(post?.id,
      {
        content:content
      }
    );window.location.reload()
                          
    }}>add a Comment</button>
    <button onClick={()=>{like(post?.id,user.id)}}>Like </button>


                  
                  <p style={{"fontSize":"16px","textAlign":"left"}}>{post.comments?.map((comment)=>{
                    return (

                      <div style={{"display":"flex","gap":"50px","border":"1px solid black"}}>
                          <p style={{"margin":"0.5px"}}>{comment?.content}</p>
                          <button onClick={()=>{deleteComment(comment?.id);window.location.reload()}}>X</button>
                                                </div>
                                              )
                  })}</p>
                
                  <button onClick={()=>{handleDelete(post?.id);window.location.reload()}}> Delete </button> 
                  </div>
                  </div>
                )
              })
              ))}



        </Box>
    </Container>
    </React.Fragment>







      </>
     
    )
}

export default Middle