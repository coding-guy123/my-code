import React from 'react';
import Container from '@material-ui/core/Container';
import SimpleAccordion from '../Components/FormPage/Accordion';
import OutlinedCard from '../Components/FormPage/PersonalDetails';
import AddressCard from '../Components/FormPage/AddressCard';
import ConfirmButtons from '../Components/FormPage/ConfirmButton';

export default function FormBasic() {
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
       <br/>
       <ConfirmButtons/>
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