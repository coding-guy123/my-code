import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AlarmIcon from '@material-ui/icons/Alarm';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      backgroundcolor: '#fff',
    },
  },
}));

export default function Facebook() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
      <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
      <IconButton aria-label="Facebook"  href="https://www.facebook.com/pg/AirtelIndia/community/">
        <FacebookIcon/>
      </IconButton>
      </Grid>
       
      <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
      <IconButton aria-label="LinkedIn" href="https://www.linkedin.com/company/airtel/?originalSubdomain=in">
        <LinkedInIcon />
      </IconButton>
      </Grid>

      <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
      <IconButton aria-label="Twitter" href="https://mobile.twitter.com/airtelindia">
        <TwitterIcon />
      </IconButton>
      </Grid>

      <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
      <IconButton aria-label="Youtube" href="https://youtube.com/c/airtel">
        <YouTubeIcon/>
      </IconButton>
      </Grid>
      </Grid>
    </div>
  );
}
