/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from '@material-ui/core/Link';
import { Typography } from '@material-ui/core';

export default function ImportantLink() {
  return (
    <Link style={{color:'#ffffff'}}

      component="button"
      variant="body2"
      onClick={() => {
        console.info("I'm a button.");
      }}
    >
      <Typography > Important Alerts </Typography>
    </Link>
    
  );
}
