import React from 'react';
import Container from '@material-ui/core/Container';
import OutlinedCard from '../Components/Selection Resources/SimpleCard';
import ContainedButtons from '../Components/Selection Resources/ContainedButtons';
import ImgMediaCard from '../Components/Selection Resources/HD pack';
import BasicCard from '../Components/Selection Resources/XstremeBasic';
import PremiumCard from '../Components/Selection Resources/XstremePremium';
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