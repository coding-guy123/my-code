import React from 'react';
import Container from '@material-ui/core/Container';
import OutlinedCard from '../Components/SelectionResources/SimpleCard';
import ContainedButtons from '../Components/SelectionResources/ContainedButtons';
import ImgMediaCard from '../Components/SelectionResources/HD pack';
import BasicCard from '../Components/SelectionResources/XstremeBasic';
import PremiumCard from '../Components/SelectionResources/XstremePremium';
import Grid from '@material-ui/core/Grid';
;

export default function Selection() {
  return (
    <React.Fragment>
        <Container fixed>
          <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={4}>
            <OutlinedCard/>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4} xl={4}> 
            <ImgMediaCard/>
            </Grid>

            <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
            <BasicCard/>
            </Grid>
          
            <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
            <PremiumCard/>
            </Grid>

            </Grid>
        </Container>
    </React.Fragment>
  );
}