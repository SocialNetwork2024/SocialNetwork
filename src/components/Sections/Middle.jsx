import React from "react";
import Button from '@mui/material/Button';
// import DeleteRoundedIcon   from '@mui/icons-material/DeleteRounded';
const Middle =()=> {
    return (
        <section className='main' >
          <h3 style={{"textAlign":"center"}}>Feed</h3>
        <div className='container'>
            <div >

            <textarea name="New Post" onResize={"none"} id="" cols="30" rows="10" placeholder="New Post" style={{"height":"100px"}}></textarea>
            
            <div>
             <Button>Upload</Button>
            </div>
            
            {/* <DeleteRoundedIcon /> */}
            </div>
           

            
          
        
        </div>
      </section>
    )
}

export default Middle