import React from 'react';
import Button from '@material-ui/core/Button';
import {Link, Router} from "react-router-dom";


export default function BuyNowPremium() {
  return (
    <Link to={process.env.PUBLIC_URL + '/formpremium'}>
    <Button variant="contained" color="primary" style={{ backgroundColor: '#E40001' }} width= "100%" height= "100%"disableElevation>
      Buy Now
    </Button>
    </Link>
  );



}