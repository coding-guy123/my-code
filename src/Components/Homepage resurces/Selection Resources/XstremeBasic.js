import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ContainedButtons from './ContainedButtons';
import BasicStepper from './XBasicStepper';

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

export default function OutlinedCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Get 10% off
        </Typography>
        <Typography variant="h5" component="h2">
          ₹2489
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Xstreme Basic
        </Typography>
        <Typography variant="body2" component="p">
          132 Channel Pack
          <br />
          <BasicStepper/>
        </Typography>
      </CardContent>
      <CardActions>
       <ContainedButtons/>
      </CardActions>
    </Card>
  );
}
