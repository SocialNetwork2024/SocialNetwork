import React from 'react'
import Posts from './Posts.jsx'
import Main from '../Sections/Main'
import Middle from '../Sections/Middle'
const PostDetails = ({posts}) => {
  return (
    <div className='postss'>
      {posts.map((post,index)=>{
        return (
            <Posts key={index} post={post}/>
        )
      })}
    </div>
  )
}

export default PostDetails
