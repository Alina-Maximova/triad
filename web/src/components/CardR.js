import React, { Component, useState,useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {getAllReviews} from "../api"

const useStyles = makeStyles({
  root: {
    maxWidth: "md",
    margin: '2%',
    



  },
});

export default function CardR() {
  const classes = useStyles();
  const [data,setData] = useState([])

  useEffect(async()=>{
    setData( await getAllReviews())
  },[data.length])

  console.log(data)
  return (
      <>
      
    {data.map((data) => (
    <Card className={classes.root} xs={12} sm={6} md={4}>
        
        
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">{data.name}</Typography>
          <Typography variant="body2" color="orange" component="p"> {data.text}</Typography>
        </CardContent>
      </CardActionArea>
       
      
    </Card> ))}
    </>
    


  );
}