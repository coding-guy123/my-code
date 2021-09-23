import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CachedIcon from '@material-ui/icons/Cached';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function LinkButton() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button href="#text-buttons" color="primary">
       <CachedIcon/>
      </Button>
    </div>
  );
}
