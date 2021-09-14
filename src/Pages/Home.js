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

export default function Home() {
  return (
    <React.Fragment>
        <Container Fixed>
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
            <SwipeableTextMobileStepper/>
            <br/>
            <AirtelThanks/>
            <br/>
            <ButtonLink/>
            <br/>
        </Container>
    </React.Fragment>
  );
}