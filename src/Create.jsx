import axios from 'axios'
import React, { useEffect, useState, useRef } from 'react'

const Create = () => {
  
  const cloudinaryRef = useRef()
  const widgetRef = useRef()
  const [file, setFile] = useState("")
  const [body, setBody] = useState("")
  const [view, setView] = useState(false)
  const [refresh, setRefresh] = useState(false)
  
  const add = (data) => {
    axios.post('http://localhost:3000/post/add', data)
    .then(()=>{
      console.log('succes');
      setRefresh(!refresh)
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary
    widgetRef.current = cloudinaryRef.current.createUploadWidget({
      cloudName: "dixniotyg",
      uploadPreset: "iexr9rlx"
    }, (error, result) => {
      if(error){
        console.log(error);
      }
      else{
        if(!!result.info.secure_url){
          setView(true)
          setFile(result.info.secure_url)
          console.log(result.info.secure_url);
        }
      }
    })
  }, [refresh]) 

  return (
    <div>
      <textarea 
      name="body"
      id="post_body" 
      cols="30" 
      rows="10"
      onChange={(e)=> setBody(e.target.value)}
      ></textarea><br />

      <button onClick={()=> widgetRef.current.open()}>image||video</button><br />
      
      { view ? <img src={file} alt="file" width={100} height={100}/> : <></>}
      
      <button
        onClick={()=>{
          add({
            body: body,
            file: file
          })
        }}
      >add
      </button>
    </div>
  )
}

export default Create