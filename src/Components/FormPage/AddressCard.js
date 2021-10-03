import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MultilineTextFields from './ChooseCity';
import AddressTextFields from './AddressTextField';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function AddressCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
      <Grid container spacing={3} justifyContent="center">
        City
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
        <MultilineTextFields/>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
        <AddressTextFields/>
        </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        
      </CardActions>
    </Card>
  );
}
