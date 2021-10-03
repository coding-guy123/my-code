import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import HDStepper from './HDstepper';
import ContainedButtons from './ContainedButtons';
import HdSwipeableTextMobileStepper from './HDstepper';
import { Grid } from '@material-ui/core';

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
      <CardContent>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12} align='Left'>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Buy HD Xstream Now
        </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} align='Left'>
        <Typography variant="h4" component="h2">
          ₹1500
        </Typography>
        </Grid>
        <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} align='Left'>
        <Typography className={classes.pos} color="textSecondary">
          HD High Definition Pack
        </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} align='Left'>
        <Typography variant="body2" component="p">
          103 Channel Pack
          </Typography>
          </Grid>
          </Grid>
          <HdSwipeableTextMobileStepper/>
        
      </CardContent>
      <CardActions>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <ContainedButtons/>
        </Grid>
      </CardActions>
    </Card>
  );
}
