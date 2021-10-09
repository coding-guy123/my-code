import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import image from '../../Assets/Loki.png'

const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
  },
  media: {
    height: '300%',
  },
});



export default function LokiCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          
        />
        <CardContent>
          <img src={image} width= "100%" height= "100%" />
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
