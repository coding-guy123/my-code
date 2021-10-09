import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import GooglePlay from './GooglePlay';
import Appstore from './Appstore';
import Thanks from'../../../Assets/Thanks.png'
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    background: 'linear-gradient(to bottom, #d2001a, #8f0000 ,#000000,#000000)',
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
  img: {
    height: '100%',
    display: 'block',
    maxWidth: 1000,
    overflow: 'hidden',
    width: '50%',
  },
});

export default function AirtelThanks() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent >
      <Grid container spacing={3}>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <img src={Thanks} width= "100%" height= "100%" />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <GooglePlay/>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Appstore/>
          </Grid>
          </Grid>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
  );
}