import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import imageTest from './images/contemplative-reptile.jpg'

export default function PostCard(props) {
  console.log(imageTest);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={imageTest}
        alt="post image "
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.post.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.post.body}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

