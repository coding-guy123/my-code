import React from 'react';
import Button from '@material-ui/core/Button';
import {Link, Router} from "react-router-dom";


export default function BuyIt() {
  return (
    <Link to={process.env.PUBLIC_URL + '/form'}>
    <Button variant="contained" color="primary" disableElevation>
      Buy Now
    </Button>
    </Link>
  );



}
