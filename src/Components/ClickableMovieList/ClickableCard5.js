import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import image5 from '../../Assets/Movie5.png'

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
  },
  media: {
    height: '100%',
  },
  image5: {
  height: 500
},
CardContent: {
  height: 500
}
});



export default function HerapheriCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          
        />
        <CardContent>
          <img src={image5} width= "100%" height= "100%" />
        </CardContent>
      </CardActionArea>
    </Card>
  );
}