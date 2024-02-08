import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

const Middle =()=> {
    return (
      
      <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
        <h3 style={{"textAlign":"center"}}>Feed</h3>
        <textarea name="New Post" onResize={"none"} id="" cols="30" rows="10" placeholder="New Post" style={{"height":"100px","width":"500px","marginLeft":"20px"}}></textarea>
        <Button>Upload</Button>
    
        
       
        </Box>
      </Container>
    </React.Fragment>
    )
}

export default Middle
      //   <section className='main' >
      //     <h3 style={{"textAlign":"center"}}>Feed</h3>
      //   <div className='container'>
      //       <div >

      //       <textarea name="New Post" onResize={"none"} id="" cols="30" rows="10" placeholder="New Post" style={{"height":"100px"}}></textarea>
            
      //       <div>
      //        <Button>Upload</Button>
      //       </div>
            
      //       {/* <DeleteRoundedIcon /> */}
      //       </div>
           

            
          
        
      //   </div>
      // </section>