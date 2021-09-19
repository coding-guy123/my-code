import React from 'react';
import Container from '@material-ui/core/Container';
import SimpleAccordion from '../Components/Form Page/Accordion';
import OutlinedCard from '../Components/Form Page/PersonalDetails';
import AddressCard from '../Components/Form Page/AddressCard';

export default function Form() {
  return (
    <React.Fragment>
      <Container fixed>
        <br/>
       <SimpleAccordion/>
       <br/>
       Personal Details
       <OutlinedCard/>
       <br/>
       Address
       <AddressCard/>
      </Container>
    </React.Fragment>
  );
}