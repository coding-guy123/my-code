import React from 'react';
import Container from '@material-ui/core/Container';
import OutlinedCard from '../Components/SelectionResources/SimpleCard';
import ContainedButtons from '../Components/SelectionResources/ContainedButtons';
import ImgMediaCard from '../Components/SelectionResources/HD pack';
import BasicCard from '../Components/SelectionResources/XstremeBasic';
import PremiumCard from '../Components/SelectionResources/XstremePremium';
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