import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import LogoH from'../../Assets/logo half.png'
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    background: 'linear-gradient(to right bottom, #181d2b,#222c43, #4a5b83 )',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
    color:'#fff8c5'
  },
  pos: {
    marginBottom: 12,
    color:'#fff8c5'
  },
});

export default function OutlinedCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>

        <Grid item xs={8} sm={8} md={8} lg={8} xl={8} align='Left'>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
        </Typography>
        </Grid>
        <Grid item xs={8} sm={8} md={8} lg={8} xl={8} align='Left'>
        <Typography className={classes.pos} variant="h7" component="h4" align='left'>
        Flat 10% off on DTH Box and Pack
        </Typography>
        </Grid>
        <Grid item xs={8} sm={8} md={8} lg={8} xl={8} align='Left'>
        <Typography className={classes.pos} color="textSecondary" align='left'>
        Use code ADTV10 AND SAVE MORE TODAY!
        </Typography>
        </Grid>
        <Grid item xs={8} sm={8} md={8} lg={8} xl={8} align='Left'>
        <Typography className={classes.pos} variant="body2" component="p" >
          Get exclusive and new orders
        </Typography>
        </Grid>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
  );
}
