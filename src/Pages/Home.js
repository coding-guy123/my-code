import React from 'react';
import Container from '@material-ui/core/Container';
import ImgMediaCard from '../Components/Homepage resurces/Homepage/PrepaidClickableCard';
import MediaCard from '../Components/Homepage resurces/Homepage/PostpaidClickableCard';
import OutlinedCard from '../Components/Homepage resurces/Homepage/SimpleCard';
import AirtelThanks from '../Components/Homepage resurces/Homepage/AirtelThanks';
import SwipeableTextMobileStepper from '../Components/Homepage resurces/Homepage/CardCarousle';
import FormPropsTextFields from '../Components/Homepage resurces/Homepage/Number text';
import ButtonLink from '../Components/Homepage resurces/Homepage/Backtotop';
import FullWidthTabs from '../Components/Homepage resurces/Homepage/Tabs';
import MoneyWallet from '../Components/Homepage resurces/Homepage/MoneyWallet';
import DisableElevation from '../Components/Homepage resurces/Homepage/Back';
import SwipeableTextMobileStepperButton from '../Components/Homepage resurces/Homepage/CardCarousle';
import Starting from './../Assets/Starting.png';
import SingleLineImageList from '../Components/MovieImgList';


export default function Home() {
  return (
    <React.Fragment>
        <Container Fixed>
            <br/>
            <img src={Starting} />
            <br/>
            <br/>
            <FullWidthTabs/>
            <br/>
            <SwipeableTextMobileStepper/>
            <br/>
            <ImgMediaCard/>
            <br/>
            <MediaCard/>
            <br/>
            <OutlinedCard/>
            <br/>
            <MoneyWallet/>
            <br/>
            <SingleLineImageList/>
            <br/>
            <AirtelThanks/>
            <br/>
            <DisableElevation/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </Container>
    </React.Fragment>
  );
}