import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import ContainedButtons from '../Homepage resurces/Homepage/ViewContainedButtons';
import BuyIt from './Buy NowButtons';
import BuyNowBasic from './BuyNowBasic';
import BuyNowPremium from './BuyNowPremium';

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
}));

export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={4}>
          HD High definition Pack
      </Grid>
      <Grid item xs={4}>
          Xstream Basic
      </Grid>
      <Grid item xs={4}>
          Xstream premium
      </Grid>
      <Grid item xs={4}>
          ₹1500
      </Grid>
      <Grid item xs={4}>
          ₹2498
      </Grid>
      <Grid item xs={4}>
          ₹3298
      </Grid>
      <Grid item xs={4}>
          Img
      </Grid>
      <Grid item xs={4}>
          Img
      </Grid>
      <Grid item xs={4}>
          Img
      </Grid>
      <Grid item xs={4}>
          Img
      </Grid>
      <Grid item xs={4}>
          Img
      </Grid>
      <Grid item xs={4}>
          Img
      </Grid>
      <Grid item xs={4}>
          Img
      </Grid>
      <Grid item xs={4}>
          Img
      </Grid>
      <Grid item xs={4}>
          Img
      </Grid>
      <Grid item xs={4}>
          Img
      </Grid>
      <Grid item xs={4}>
          Img
      </Grid>
      <Grid item xs={4}>
          Img
      </Grid>
      <Grid item xs={4}>
          103 Channel Pack
      </Grid>
      <Grid item xs={4}>
          132 Channel Pack
      </Grid>
      <Grid item xs={4}>
          132 Channel Pack
      </Grid>
      <Grid item xs={4}>
          <BuyIt/>
      </Grid>
      <Grid item xs={4}>
          <BuyNowBasic/>
      </Grid>
      <Grid item xs={4}>
          <BuyNowPremium/>
      </Grid>
    </Grid>
  );
}
