import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import ContainedButtons from '../Homepageresurces/Homepage/ViewContainedButtons';
import BuyIt from './Buy NowButtons';
import BuyNowBasic from './BuyNowBasic';
import BuyNowPremium from './BuyNowPremium';
import img1 from '../../Assets/PremiumQual.png'
import img2 from '../../Assets/Record and Play.png'
import img3 from '../../Assets/DigitalSound.png'
import img4 from '../../Assets/550 Tv channels.png'
import img5 from '../../Assets/Android.png'
import img6 from '../../Assets/Chrome.png'
import img7 from '../../Assets/Playstore.png'
import img8 from '../../Assets/Prime.png'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={4} md={4} lg={4} xl={4}>
          HD High definition Pack
      </Grid>
      <Grid item xs={4} md={4} lg={4} xl={4}>
          Xstream Basic
      </Grid>
      <Grid item xs={4} md={4} lg={4} xl={4}>
          Xstream premium
      </Grid>
      <Grid item xs={4} md={4} lg={4} xl={4}>
          ₹1500
      </Grid>
      <Grid item xs={4} md={4} lg={4} xl={4}>
          ₹2498
      </Grid>
      <Grid item xs={4} md={4} lg={4} xl={4}>
          ₹3298
      </Grid>
      <Grid item xs={4} md={4} lg={4} xl={4}>
      <img src={img1} />
      </Grid>
      <Grid item xs={4} md={4} lg={4} xl={4}>
      <img src={img5} />
      </Grid>
      <Grid item xs={4} md={4} lg={4} xl={4}>
      <img src={img5} />
      </Grid>
      <Grid item xs={4} md={4} lg={4} xl={4}>
      <img src={img2} />
      </Grid>
      <Grid item xs={4} md={4} lg={4} xl={4}>
      <img src={img4} />
      </Grid>
      <Grid item xs={4} md={4} lg={4} xl={4}>
      <img src={img4} />
      </Grid>
      <Grid item xs={4} md={4} lg={4} xl={4}>
      <img src={img3} /> 
      </Grid>
      <Grid item xs={4} md={4} lg={4} xl={4}>
      <img src={img6} />
      </Grid>
      <Grid item xs={4} md={4} lg={4} xl={4}>
      <img src={img6} />
      </Grid>
      <Grid item xs={4} md={4} lg={4} xl={4}>
      <img src={img4} />
      </Grid>
      <Grid item xs={4} md={4} lg={4} xl={4}>
      <img src={img7} />
      </Grid>
      <Grid item xs={4} md={4} lg={4} xl={4}>
      <img src={img8} />
      </Grid>
      <Grid item xs={4} md={4} lg={4} xl={4}>
          103 Channel Pack
      </Grid>
      <Grid item xs={4} md={4} lg={4} xl={4}>
          132 Channel Pack
      </Grid>
      <Grid item xs={4} md={4} lg={4} xl={4}>
          132 Channel Pack
      </Grid>
      <Grid item xs={4} md={4} lg={4} xl={4}>
          <BuyIt/>
      </Grid>
      <Grid item xs={4} md={4} lg={4} xl={4}>
          <BuyNowBasic/>
      </Grid>
      <Grid item xs={4} md={4} lg={4} xl={4}>
          <BuyNowPremium/>
      </Grid>
    </Grid>
  );
}
