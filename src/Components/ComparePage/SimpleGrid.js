import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import ContainedButtons from '../Homepageresurces/Homepage/ViewContainedButtons';
import BuyIt from './Buy NowButtons';
import BuyNowBasic from './BuyNowBasic';
import BuyNowPremium from './BuyNowPremium';
import img1 from '../../Assets/PremiumQual.png'
import img2 from '../../Assets/Record and Play.png'
import img3 from '../../Assets/DigitalSound.png'
import img4 from '../../Assets/550 Tv channels.png'
import img5 from '../../Assets/Android.png'
import img6 from '../../Assets/Chrome.png'
import img7 from '../../Assets/Playstore.png'
import img8 from '../../Assets/Prime.png'
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
   
   
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },

  text: {
    color: '#ff0000de'
  },
  channel: {
    color:'#00a1ff'
  },
}));

export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={4} md={4} lg={4} xl={4}>
          HD High definition Pack
      </Grid>
      <Grid item xs={4} md={4} lg={4} xl={4}>
          Xstream Basic
      </Grid>
      <Grid item xs={4} md={4} lg={4} xl={4}>
          Xstream premium
      </Grid>
      <Grid item xs={4} md={4} lg={4} xl={4} className ={classes.text}>
          <Typography><h2>₹1500</h2></Typography>
      </Grid>
      <Grid item xs={4} md={4} lg={4} xl={4} className ={classes.text}>
      <Typography><h2>₹2498</h2></Typography>
      </Grid>
      <Grid item xs={4} md={4} lg={4} xl={4} className ={classes.text}>
      <Typography><h2>₹3298</h2></Typography>
      </Grid>
      <Grid item xs={4} md={4} lg={4} xl={4}>
      <img src={img1} width= "100%" height= "100%" />
      </Grid>
      <Grid item xs={4} md={4} lg={4} xl={4}>
      <img src={img5} width= "100%" height= "100%"/>
      </Grid>
      <Grid item xs={4} md={4} lg={4} xl={4}>
      <img src={img5} width= "100%" height= "100%"/>
      </Grid>
      <Grid item xs={4} md={4} lg={4} xl={4}>
      <img src={img2} width= "100%" height= "100%"/>
      </Grid>
      <Grid item xs={4} md={4} lg={4} xl={4}>
      <img src={img4} width= "100%" height= "100%"/>
      </Grid>
      <Grid item xs={4} md={4} lg={4} xl={4}>
      <img src={img4} width= "100%" height= "100%"/>
      </Grid>
      <Grid item xs={4} md={4} lg={4} xl={4}>
      <img src={img3} width= "100%" height= "100%"/> 
      </Grid>
      <Grid item xs={4} md={4} lg={4} xl={4}>
      <img src={img6} width= "100%" height= "100%" />
      </Grid>
      <Grid item xs={4} md={4} lg={4} xl={4}>
      <img src={img6} width= "100%" height= "100%" />
      </Grid>
      <Grid item xs={4} md={4} lg={4} xl={4}>
      <img src={img4} width= "100%" height= "100%"/>
      </Grid>
      <Grid item xs={4} md={4} lg={4} xl={4}>
      <img src={img7} width= "100%" height= "100%"/>
      </Grid>
      <Grid item xs={4} md={4} lg={4} xl={4}>
      <img src={img8} width= "100%" height= "100%"/>
      </Grid>
      <Grid item xs={4} md={4} lg={4} xl={4} className ={classes.channel}>
      <Typography><h20> 103 Channel Pack</h20></Typography>
      </Grid>
      <Grid item xs={4} md={4} lg={4} xl={4}className ={classes.channel}>
         <Typography><h20> 132 Channel Pack</h20></Typography>
      </Grid>
      <Grid item xs={4} md={4} lg={4} xl={4}className ={classes.channel}>
        <Typography><h20> 132 Channel Pack</h20></Typography>
      </Grid>
      <Grid item xs={4} md={4} lg={4} xl={4}>
          <BuyIt width= "100%" height= "100%"/>
      </Grid>
      <Grid item xs={4} md={4} lg={4} xl={4}>
          <BuyNowBasic width= "100%" height= "100%"/>
      </Grid>
      <Grid item xs={4} md={4} lg={4} xl={4}>
          <BuyNowPremium width= "100%" height= "100%"/>
      </Grid>
    </Grid>
  );
}
