import React from 'react';
import Container from '@material-ui/core/Container';
import BasicTable from '../Components/ComparePage/Table';
import Typography from '@material-ui/core/Typography';
import SpacingGrid from '../Components/ComparePage/SimpleGrid';

export default function Compare() {
  return (
    <React.Fragment>
      <Container fixed>
        <br/>
      <Typography gutterBottom variant="h5" component="h2">
            Compare Your DTH Xstream Plans
          </Typography>
        <br/>
        <SpacingGrid/>
      </Container>
    </React.Fragment>
  );
}