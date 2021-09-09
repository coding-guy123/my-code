import React from 'react';
import Container from '@material-ui/core/Container';
import DatePickers from '../Components/DateTimePicker';

export default function Selection() {
  return (
    <React.Fragment>
        <Container fixed>
            <p>
                You can select your plan here!
            </p>
            <p>
                To get started, edit <code>src/App.js</code>, save, and reload this page.
            </p>
            <DatePickers/>
        </Container>
    </React.Fragment>
  );
}