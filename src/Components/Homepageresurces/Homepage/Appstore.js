import React from 'react';
import Button from '@material-ui/core/Button';
import apple from '../../../Assets/apple store.jpg'
import { Typography } from '@material-ui/core';
import { Grid } from '@material-ui/core';

export default function Appstore() {
  return (
    <Button variant="contained" color="primary" style={{ backgroundColor: '#000000' }} disableElevation 
    href="https://apps.apple.com/in/app/airtel-thanks-recharge-upi/id543184334">
      <img src={apple} width= "20%" height= "20%" justifycontent ='left'/> 
      <Grid container spacing={8}align='left'
>
        <Grid item xs={12}sm={12}md={12}xl={12} >


        <Typography variant="h10"style={{color:'#ffffff'}}>Download on the</Typography>

       <Typography variant="h5">App Store</Typography>
       </Grid>
        </Grid>
    </Button>
  );
}
