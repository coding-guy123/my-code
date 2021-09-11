import React from 'react';
import Container from '@material-ui/core/Container';
import ImgMediaCard from '../Components/Homepage resurces/Homepage/PrepaidClickableCard';
import MediaCard from '../Components/Homepage resurces/Homepage/PostpaidClickableCard';
import ContainedButtons from '../Components/Homepage resurces/Homepage/ViewContainedButtons';
import AirtelBlack from '../Components/Homepage resurces/Homepage/AirtelBlack';
import OutlinedCard from '../Components/Homepage resurces/Homepage/SimpleCard';
import AirtelThanks from '../Components/Homepage resurces/Homepage/AirtelThanks';
import ButtonLink from '../Components/Homepage resurces/Homepage/Backtotop';
import SwipeableTextMobileStepper from '../Components/Homepage resurces/Homepage/CardCarousle';

export default function Home() {
  return (
    <React.Fragment>
        <Container Fixed>
            <SwipeableTextMobileStepper/>
            <ImgMediaCard/>
            <MediaCard/>
            <OutlinedCard/>
            <AirtelThanks/>
            <ButtonLink/>
        </Container>
    </React.Fragment>
  );
}