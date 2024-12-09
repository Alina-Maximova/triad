import React, { Component, useState,useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {getAllProd} from "../api"
import data from "../data/Prod.json"
import "../App.css"

const useStyles = makeStyles({
  root: {
    maxWidth: "md",
    margin: '2%',
    position:"relative",
    float:'left',
    width:'20%',
    maxHeight:'md'



  },
});

export default function CardProd() {
  const classes = useStyles();


  // const [data,setData] = useState([])

  // useEffect(async()=>{
  //   setData( await getAllProd())
  // },[data.length])

  console.log(data)
  return (
      <div className = "fon">
      
      
    {/* {data.map((data) => ( */}
    {Object.keys(data).map(item => (
    <Card className={classes.root} xs={12} sm={6} md={4}>
        
        
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="20%"
          image={data[item].img}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">{data[item].name}</Typography>
          <Typography variant="h2" color="textSecondary" component="p"> {data[item].price}</Typography>
        </CardContent>
      </CardActionArea>
       
      
    </Card> 
     ))}
    </div>
    


  );
}