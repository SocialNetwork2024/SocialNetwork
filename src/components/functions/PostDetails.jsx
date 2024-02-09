import React from 'react'
import Posts from './Posts.jsx'
import NavBar from '../Sections/Navbar.jsx'
import Main from '../Sections/Main'
// import Middle from '../Sections/Middle'
const PostDetails = ({posts}) => {
  return (
    <>
    <NavBar/>
    <div className='postss'>
       
      {posts.map((post,index)=>{
        return (
            <Posts key={index} post={post}/>
        )
      })}
    </div>
    </>
    
  )
}

export default PostDetails
