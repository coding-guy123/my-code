import React from 'react';
import Container from '@material-ui/core/Container';
import ImgMediaCard from '../Components/Homepageresurces/Homepage/PrepaidClickableCard';
import MediaCard from '../Components/Homepageresurces/Homepage/PostpaidClickableCard';
import OutlinedCard from '../Components/Homepageresurces/Homepage/SimpleCard';
import AirtelThanks from '../Components/Homepageresurces/Homepage/AirtelThanks';
import SwipeableTextMobileStepper from '../Components/Homepageresurces/Homepage/CardCarousle';
import FormPropsTextFields from '../Components/Homepageresurces/Homepage/Number text';
import ButtonLink from '../Components/Homepageresurces/Homepage/Backtotop';
import FullWidthTabs from '../Components/Homepageresurces/Homepage/Tabs';
import MoneyWallet from '../Components/Homepageresurces/Homepage/MoneyWallet';
import DisableElevation from '../Components/Homepageresurces/Homepage/Back';
import SwipeableTextMobileStepperButton from '../Components/Homepageresurces/Homepage/CardCarousle';
import Starting from './../Assets/Starting.png';
import SingleLineImageList from '../Components/ClickableMovieList/MovieImgList';
import PrivacyLink from '../Components/Footer/PrivacyLink';
import CookieLink from '../Components/Footer/CookieLink';
import DLTLink from '../Components/Footer/DLTLink';
import ContactLink from '../Components/Footer/ContactLink';
import ImportantLink from '../Components/Footer/FooterLinks';
import Facebook from '../Components/Footer/Icon';
import TextButtons from '../Components/Homepageresurces/Homepage/Back';
import Grid from '@material-ui/core/Grid';
import Paper from '../Components/Footer/Paper';
import FooterCard from '../Components/Footer/Paper';


export default function Home() {
  return (
    <React.Fragment>
        <Container Fixed>
        <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12}>
            <img src={Starting} />
            </Grid>
            </Grid>
            <br/>
            <br/> 
            <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12}>
            <FullWidthTabs/>
            </Grid>
            </Grid>
            <br/>
            <Grid container spacing={3}>
        <Grid item xs={20} sm={12} md={12}>
            <SwipeableTextMobileStepper/>
            </Grid>
            </Grid>
            <br/>
            <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={6}>
            <ImgMediaCard/>
            <br/>
            <MediaCard/>
            </Grid>
            </Grid>
            <br/>
            <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12}>
            <OutlinedCard/>
            </Grid>
            </Grid>
            <br/>
            <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12}>
            <MoneyWallet/>
            </Grid>
            </Grid>
            <br/>
            <Grid container spacing={0.5}>
        <Grid item xs={12} sm={15} md={18}>
            <SingleLineImageList/>
            </Grid>
            </Grid>
            <br/>
            <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12}>
            <AirtelThanks/>
            </Grid>
            </Grid>
            <br/>
            <TextButtons/>
            <br/>
        </Container>
        <FooterCard/>
    </React.Fragment>
  );
}