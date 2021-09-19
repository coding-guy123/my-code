import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const currencies = [
  {
    value: 'USD',
    label: 'Chennai',
  },
  {
    value: 'EUR',
    label: 'Delhi',
  },
  {
    value: 'BTC',
    label: 'Kolkata',
  },
  {
    value: 'JPY',
    label: 'Mumbai',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function MultilineTextFields() {
  const classes = useStyles();
  const [currency, setCurrency] = React.useState('EUR');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="outlined-select-currency-native"
          select
          label="Enter Your City"
          value={currency}
          onChange={handleChange}
          SelectProps={{
            native: true,
          }}
          helperText=" "
          variant="outlined"
        >
          {currencies.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
      </div>
    </form>
  );
}
