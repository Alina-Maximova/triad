
import Maps from '../components/map'
import '../App.css'
import React, { Component, useState,useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {getAllStaff} from "../api"
import '../App.css'

const useStyles = makeStyles({
    root: {
      maxWidth: "md",
      margin: '2%',
      float:'left',
      width:'30%',
  
  
  
    },
  });
  

export default function Inform () {
   
        const classes = useStyles();
        const [data,setData] = useState([])
      
        useEffect(async()=>{
          setData( await getAllStaff())
        },[data.length])
      
        console.log(data)
        return (
            <>
            <div div className = "fon">
              
                <p> Наши сотрудники:</p>
                {data.map((data) => (
                    <Card className={classes.root} xs={12} sm={6} md={4}>
        
        
                      <CardActionArea>
                        
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">{data.FIO}</Typography>
                          <Typography variant="body2" color="textSecondary" component="p"> {data.post}</Typography>
                        </CardContent>
                      </CardActionArea>
                    
                    
                  </Card> ))}
                  
                  <p>Вы можете подписаться на нас в социальных сетях</p>
              <p><a href='/vk'>в контакте "ИТЦ ТРИАДА"</a></p>
              <p><a href='/ok'>в однокласниках "ИТЦ ТРИАДА"</a></p>
                <div style={{float: 'center', width:'30%'}}>
                    <div>
                        <h1></h1>
                    </div>
                    <Maps />
                </div>
                
               

            </div>
            </>
        );
    }
