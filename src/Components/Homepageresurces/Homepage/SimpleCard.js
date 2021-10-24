import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AirtelBlack from './AirtelBlack';
import { Grid, Hidden } from '@material-ui/core';
import Bimg from'../../../Assets/ABlackimg.png'
import ABlogo from'../../../Assets/Airtel Black.png';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function OutlinedCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
     
      <CardContent style={{ backgroundColor: '#000000' }}>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
      <img src={ABlogo} width= "40%" height= "40%"/>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Typography style={{color:'#ffffff'}} >
          Enjoy first 30 days free of a new service with 
          Airtel Black
                 </Typography>
        </Grid>
        
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} justifyContent = 'right'>
        <AirtelBlack/>
        </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
      <img src={Bimg} width= "100%" height= "100%"/>
      </Grid>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
  );
}
