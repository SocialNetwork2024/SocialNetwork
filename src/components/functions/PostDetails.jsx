import React from 'react'
import Posts from './Posts.jsx'
const PostDetails = ({posts}) => {
  return (
    <div>
      {posts.map((post,index)=>{
        return (
            <Posts key={index} post={post}/>
        )
      })}
    </div>
  )
}

export default PostDetails
