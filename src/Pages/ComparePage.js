import React from 'react';
import Container from '@material-ui/core/Container';
import BasicTable from '../Components/ComparePage/Table';

export default function Compare() {
  return (
    <React.Fragment>
      <Container fixed>
        <BasicTable/>
      </Container>
    </React.Fragment>
  );
}