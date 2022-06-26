import React from 'react';
import {Card as MuiCard, Button, Typography, CardMedia, CardContent, Box} from '@mui/material';
import '../components/Card.css';


export default function Card({component, height, image, alt, title, body, button}) {
  return (
    <MuiCard className="card">
        <CardMedia 
        component={component}
        height={height}
        image={image}
        alt={alt}
        className="image">
        </CardMedia>
        <CardContent className="content">
        <Typography variant='h5' className="title">{title}</Typography>
        <Box className="bodytext">
        <Typography variant='body2'>{body}</Typography>
        </Box>
        <Box className='button'>
        <Button variant="contained">{button}</Button>
        </Box>
        </CardContent>
    </MuiCard>
    )
}
