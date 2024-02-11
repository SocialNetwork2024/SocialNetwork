import {useState} from 'react'
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
// import Button from '@mui/material/Button';
import DeleteOutlineTwoToneIcon from '@mui/icons-material/DeleteOutlineTwoTone';
import axios from 'axios'
import Create from '../../components/UploadWiget'
import ChatBubbleOutlineTwoToneIcon from '@mui/icons-material/ChatBubbleOutlineTwoTone';
import ThumbUpAltTwoToneIcon from '@mui/icons-material/ThumbUpAltTwoTone';
import ClearTwoToneIcon from '@mui/icons-material/ClearTwoTone';
import AddCircleOutlineTwoToneIcon from '@mui/icons-material/AddCircleOutlineTwoTone';





const Middle =({posts})=> {

  const[content,setContent]=useState('')
const[show,setShow]=useState(false)

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


const like=(id)=>{
  axios.post(`http://localhost:3000/like/add/${id}`)
  .then((res)=>{console.log("liked")})
    .catch((error)=>{console.log("error")})
}
const deslike=(id)=>{
  axios.delete(`http://localhost:3000/like/delete/${id}`)
  .then((res)=>{console.log("desliked")})
    .catch((error)=>{console.log("error")})
}



    return (
      <section className="middle">
<React.Fragment>
      <CssBaseline />
  <Container maxWidth="sm">
   <Box sx={{ bgcolor: '#cfe8fc' }}>
        <h3 style={{"textAlign":"center"}}>Feed</h3>
<Create />




                  {posts.map((post,index)=>{
                    return (

                      <div className='posts' key={index}>
                        <div style={{"display":"flex","width":"100%"}}>
                          <span style={{"marginRight":"auto"}}>
                          {post.body}
                          </span>
                          <DeleteOutlineTwoToneIcon color="primary" sx={{fontSize:20}} onClick={()=>{handleDelete(post.id);window.location.reload()}}/>
                        </div>
                                <img src={post.file} alt="postimage"  style={{"width":"360px","height":"240px"}} />
                            <div style={{"display":"flex","width":"360px"}}>
                              <span>
                            <ThumbUpAltTwoToneIcon color="primary" sx={{fontSize:20}} onClick={()=>{like(post.id)}}/>
                            <ChatBubbleOutlineTwoToneIcon  onClick={()=>{setShow(!show)}} color="primary" sx={{fontSize:20}} />
                              </span>
                            <p style={{"fontSize":"10px","marginLeft":"auto"}}>{post.createdAt}</p>
                            </div>
                     
                      <div style={{"display":"flex","gap":"10px"}}>
                     <p style={{"heigth":"fit-content","fontSize":"14px","marginTop":"0px"}}>{post.likes.length} Likes</p>
                      <p style={{"heigth":"fit-content","fontSize":"14px","marginTop":"0px"}}>{post.comments.length} Comments</p> 
                      </div>
                     



{
  show?
  <div> 
  <textarea className="textarea-container" name="New Post"  id="" cols="30" rows="2" placeholder="New Comment" style={{"height":"40px","width":"80%"}}
        onChange={(e)=>{setContent(e.target.value)}}></textarea>
        
        <AddCircleOutlineTwoToneIcon style={{"marginLeft":"auto"}}onClick={(id)=>{addComment(post.id,
          {
            content:content
          }
        );window.location.reload()
          
        }}/>

</div>
        :null
}
   



<textarea className="textarea-container" name="New Post"  id="" cols="30" rows="2" placeholder="New Comment" style={{"height":"40px","width":"80%"}}
        onChange={(e)=>{setContent(e.target.value)}}></textarea>
        
        <AddCircleOutlineTwoToneIcon style={{"marginLeft":"auto"}}onClick={(id)=>{addComment(post.id,
          {
            content:content
          }
        );window.location.reload()
          
        }}/>

                      
    
      <button onClick={()=>{deslike(post.id)}}>Dislike</button>
       


  
                      <div style={{"width":"90%"}}>{post.comments.map((comment,index)=>{
                        return (
                          <div style={{"display":"flex","border":"1px solid black"}} key={index}>
    <p style={{"heigth":"fit-content","fontSize":"14px","marginRight":"auto"}}>{comment.content}</p>
    <ClearTwoToneIcon  sx={{fontSize:20}} onClick={()=>{deleteComment(comment.id);window.location.reload()}}/>
    {/* <button style={{"backgroundColor":"transparent"}} onClick={()=>{deleteComment(comment.id);window.location.reload()}}>X</button> */}
                          </div>
                        )
                      })}</div>
                  
                      
                      </div>
                    )
                  })}



    </Box>
  </Container>
</React.Fragment>







      </section>
     
    )
}

export default Middle


            
          
        
   