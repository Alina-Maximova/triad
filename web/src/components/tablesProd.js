import React, { Component, useState,useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {getAllPr} from "../api"

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});



export default function DenseTable() {
    const classes = useStyles();
    const [data,setData] = useState([])

      useEffect(async()=>{
        setData( await getAllPr())
      },[data.length])
    
      console.log(data)

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="right" >Услуга</TableCell>
            <TableCell align="right" >Цена</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((data) => (
            <TableRow key={data.id}>
              
              <TableCell align="right" >{data.name}</TableCell>
              <TableCell align="right">{data.price}</TableCell>
            
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
