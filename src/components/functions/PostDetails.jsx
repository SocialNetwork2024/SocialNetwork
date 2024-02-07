import React from 'react'
import Posts from './Posts.jsx'
const PostDetails = () => {
  return (
    <div>
      {PostAddSharp.map((post)=>{
        return (
            <Posts post={post}/>
        )
      })}
    </div>
  )
}

export default PostDetails
