import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Recharge from './Recharge Button';

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

        <TextField
          id="outlined-number"
          label="Enter Your Mobile Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
      </div>
      <Recharge/>
    </form>
  );
}
