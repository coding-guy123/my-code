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

export default function AddressTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>

        <TextField
          required
          id="outlined-required"
          label="Address Line"
          defaultValue="Enter Your Address"
          variant="outlined"
        />
        <TextField
          required
          id="outlined-required"
          label="House/Flat Number"
          defaultValue="Enter Your Address"
          variant="outlined"
        />
        <TextField
          required
          id="outlined-required"
          label="Pin Code"
          defaultValue="Enter Your Address"
          variant="outlined"
        />
      </div>
    </form>
  );
}
