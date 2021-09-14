import React from 'react';
import Container from '@material-ui/core/Container';
import OutlinedCard from '../Components/Homepage resurces/Selection Resources/SimpleCard';
import ContainedButtons from '../Components/Homepage resurces/Selection Resources/ContainedButtons';
import ImgMediaCard from '../Components/Homepage resurces/Selection Resources/HD pack';
import BasicCard from '../Components/Homepage resurces/Selection Resources/XstremeBasic';
import PremiumCard from '../Components/Homepage resurces/Selection Resources/XstremePremium';
;

export default function Selection() {
  return (
    <React.Fragment>
        <Container fixed>
            <OutlinedCard/>
            <br/>
            <ImgMediaCard/>
            <br/>
            <BasicCard/>
            <br/>
            <PremiumCard/>
            <br/>
        </Container>
    </React.Fragment>
  );
}