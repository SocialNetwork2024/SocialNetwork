  import * as React from 'react';
  import Card from '@mui/material/Card';
  import CardContent from '@mui/material/CardContent';
  import CardMedia from '@mui/material/CardMedia';
  import Typography from '@mui/material/Typography';
  import { CardActionArea } from '@mui/material';
// import Button from '@mui/material';
import Button from '@mui/material/Button';

  export default function ActionAreaCard() {
    return (
      <Card sx={{ maxWidth: 140 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            width="140"
            style={{"borderRadius":"50%"}}
            image="https://images.inc.com/uploaded_files/image/1920x1080/getty_509107562_2000133320009280346_351827.jpg"
          
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
             UserName
          <Button><a href="/edit">Edit profile</a></Button>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          
        </CardActionArea>
      </Card>
    );
  }