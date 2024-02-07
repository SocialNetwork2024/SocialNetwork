import React from "react";
const Middle =()=> {
    return (
        <section className='main' >
          <h3 style={{"textAlign":"center"}}>Feed</h3>
        <div className='container'>
            <div >

            <textarea name="New Post" onResize={"none"} id="" cols="30" rows="10" placeholder="New Post" style={{"height":"200px"}}></textarea>
            <button>Post</button>
            
            </div>
           
            
          
        
        </div>
      </section>
    )
}

export default Middle