import React from 'react';
import Container from '@material-ui/core/Container';
import SimpleAccordion from '../Components/FormPage/Accordion';
import OutlinedCard from '../Components/FormPage/PersonalDetails';
import AddressCard from '../Components/FormPage/AddressCard';
import ConfirmButtons from '../Components/FormPage/ConfirmButton';
import { Grid } from '@material-ui/core';

export default function Form() {
  return (
    <React.Fragment>
      <Container fixed>
      <Grid container spacing={3}>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
       <SimpleAccordion/>
       </Grid>
       
       <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
       Personal Details
       </Grid>

       <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
       <OutlinedCard/>
       </Grid>
       
       <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
       Address
       </Grid>

       <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
       <AddressCard/>
       </Grid>
       
       <Grid item xs={12} sm={12} md={12} lg={12} xl={12} alignItems='center'>
       <ConfirmButtons/>
       </Grid>
      </Grid>
      </Container>
    </React.Fragment>
  );
}