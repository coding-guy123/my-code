import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function FormPropsTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        
      </div>
      <div>
          <br/>
         Mobile Number
         <br/>
        <TextField
          id="outlined-helperText"
          label="Enter Your Mobile Number"
          defaultValue="Enter Number"
          variant="outlined"
        />
        <br/>
          Full Name
          <br/>
        <TextField
          required
          id="outlined-required"
          label="Enter Your Full Name"
          defaultValue="Enter your name"
          variant="outlined"
        />
        <br/>
          Email ID
          <br/>
        <TextField
          required
          id="outlined-required"
          label="Enter Your Email ID"
          defaultValue="Enter ID"
          variant="outlined"
        />
        <br/>
         Alternate Number
         <br/>
        <TextField
        required
        id="outlined-required"
        label="Alternate Mobile Number"
        defaultValue="Enter Number"
        variant="outlined"
      />
      </div>
    </form>
  );
}
