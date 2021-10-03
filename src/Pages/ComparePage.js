import React from 'react';
import Container from '@material-ui/core/Container';
import BasicTable from '../Components/ComparePage/Table';
import Typography from '@material-ui/core/Typography';
import SpacingGrid from '../Components/ComparePage/SimpleGrid';
import { Grid } from '@material-ui/core';

export default function Compare() {
  return (
    <React.Fragment>
      <Container fixed>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
      <Typography gutterBottom variant="h5" component="h2">
            Compare Your DTH Xstream Plans
          </Typography>
          </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}></Grid>
        <SpacingGrid/>
        </Grid>
      </Container>
    </React.Fragment>
  );
}