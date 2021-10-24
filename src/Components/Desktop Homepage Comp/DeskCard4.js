import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Bajirao from '../../Assets/Bajirao.png'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function DeskImgMediaCard4() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
      <img src={Bajirao} width= "100%" height= "100%" />
        
      </CardActionArea>
    </Card>
  );
}
