import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

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
    <Grid container spacing={-8} justifyContent="center">
    <form className={classes.root} noValidate autoComplete="off">
      <div>
      <Grid item xs={12} sm={12} md={2} lg={6} xl={6}>
        <TextField
          required
          id="outlined-required"
          label="Address Line"
          defaultValue="Enter Your Address"
          variant="outlined"
        />
        </Grid>
        <Grid item xs={12} sm={12} md={2} lg={6} xl={6}>
        <TextField
          required
          id="outlined-required"
          label="House/Flat Number"
          defaultValue="Enter Your Flat Number"
          variant="outlined"
        />
        </Grid>
        <Grid item xs={12} sm={12} md={2} lg={6} xl={6}>
        <TextField
          required
          id="outlined-required"
          label="Pin Code"
          defaultValue="Enter Your Pin"
          variant="outlined"
        />
        </Grid>
      </div>
    </form>
    </Grid>
  );
}
