import React from 'react'
import CoffeCard from '../CoffeCard';
import { Container, Grid } from '@material-ui/core';
import coffeMakerList from '../constants';

const Content = () => {
    const getCoffeMakerList = (coffeMakerObj) =>{
        return  ( <Grid item xs={12} sm={4}>
                    <CoffeCard {...coffeMakerObj}/> 
                </Grid>)
    };

    
    return(
        <Grid container spacing={2}>      
              
            {coffeMakerList.map(coffeMakerObj => getCoffeMakerList(coffeMakerObj) )}
           
        </Grid>
       
        
    )

}; export default Content;