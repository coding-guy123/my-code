import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ContainedButtons from './ViewContainedButtons';
import Money from '../../../Assets/MoneyW.png'

const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
  },
  media: {
    height: '100%',
  },
});

export default function MoneyWallet() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent style={{ backgroundColor: '#720001' }}>
        <img src={Money} width= "100%" height= "100%"/>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}