import React from 'react';
import Button from '@material-ui/core/Button';
import google from '../../../Assets/google play.jpg'
import { Typography } from '@material-ui/core';
import { Grid } from '@material-ui/core';

export default function GooglePlay() {
  return (
    <Button variant="contained" color="primary" style={{ backgroundColor: '#000000' }} 
    disableElevation href="https://play.google.com/store/apps/details?id=com.myairtelapp">
       <img src={google} width= "20%" height= "20%" justifycontent ='left'/> 
       <Grid container spacing={8}align='left'
>
        <Grid item xs={12}sm={12}md={12}xl={12} >


       <Typography variant="h10">Get it on</Typography>
       <Typography variant="h5">Google Play</Typography>
       </Grid>
        </Grid>

        
       
    </Button>
  );
}
