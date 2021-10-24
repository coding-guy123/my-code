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
import Prepaid from'../../../Assets/prepaid.png'

const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
    width: "100%", 
    height: "100%"
  },
  media: {
    height:'100%',
    width:'100%'
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        
        <CardContent style={{ backgroundColor: '#720001' }}>
        <CardMedia>
        <img src={Prepaid} width= "100%" height= "100%" />
          <ContainedButtons/>
          </CardMedia>
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
