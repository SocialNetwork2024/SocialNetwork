import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea, CardActions } from '@mui/material';
import FormDialog from '../functions/Something'
const LeftCard=({user})=>{
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          User Name : 
           
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Email : 
           gitHub : 
           LinkedIn :
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <FormDialog  />
      </CardActions>
    </Card>
  );
}
export default LeftCard