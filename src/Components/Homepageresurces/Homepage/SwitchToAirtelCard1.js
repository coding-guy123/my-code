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
import img9 from '../../Assets/Yellow.png'

const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
  },
});

export default function SwitchCard1() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Airtel"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
        <img src={img9} />
          <Typography gutterBottom variant="h5" component="h2">
            Airtel Prepaid Services
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            With Airtel Unlimited Prepaid Plan
                   Talk Unlimited!!  
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>
  );
}