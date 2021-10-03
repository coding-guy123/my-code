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
import Prepaid from'../../../Assets/PrepaidC.png'

const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        
        <CardContent>
        <img src={Prepaid} />
          <ContainedButtons/>
          {/* <Typography gutterBottom variant="h5" component="h2">
            Airtel Prepaid Services
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            With Airtel Unlimited Prepaid Plan
                   Talk Unlimited!!  
          </Typography> */}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
