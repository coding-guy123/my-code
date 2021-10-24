import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      height:'100%',
      width:'100%'
    },
  },
}));

export default function ConfirmButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="contained" color="secondary" style={{ backgroundColor: '#E40001' }}>
        Confirm
      </Button>
    </div>
  );
}
