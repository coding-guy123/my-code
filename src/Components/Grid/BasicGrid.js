import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import FullWidthTabs from '../Homepageresurces/Homepage/Tabs';
import SwipeableTextMobileStepper from '../Homepageresurces/Homepage/CardCarousle';
import LokiCard from '../ClickableMovieList/ClickableCard1';
import SingleLineImageList from '../ClickableMovieList/MovieImgList';
import RangbaazCard from '../ClickableMovieList/ClickableCard2';
import StoriesCard from '../ClickableMovieList/ClickableCard3';
import MoneyWallet from '../Homepageresurces/Homepage/MoneyWallet';
import ImgMediaCard from '../Homepageresurces/Homepage/PrepaidClickableCard';
import MediaCard from '../Homepageresurces/Homepage/PostpaidClickableCard';
import AirtelThanks from '../Homepageresurces/Homepage/AirtelThanks';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12}>
          <FullWidthTabs />
          <SwipeableTextMobileStepper />
          <MoneyWallet/>
          <AirtelThanks/>
          <OutlinedCard/>
          <img src={Starting} />
          <footer/>
          <Facebook/>
        <ImportantLink/>
        <PrivacyLink/>
        <CookieLink/>
        <DLTLink/>
        <ContactLink/>
        Copy Right Information
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={6}>
          <ImgMediaCard />
          <MediaCard />
          </Grid>
          </Grid>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={15} md={18}>
        <SingleLineImageList/>
        </Grid>
        </Grid>
    </div>
  );
}
