import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Recharge from './Recharge Button';
import FormPropsTextFields from './Number text';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
}));

export default function NestedGrid() {
  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={4} justifyContent ='left'>
          <FormPropsTextFields/>
        </Grid>
        <Grid item xs={4}>
          <Recharge/>
        </Grid>
        
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={-30}>
        <Grid container item xs={12} spacing={4}>
          <FormRow />
        </Grid>
        
      </Grid>
    </div>
  );
}