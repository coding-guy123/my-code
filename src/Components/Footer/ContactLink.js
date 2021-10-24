/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from '@material-ui/core/Link';

export default function ContactLink() {
  return (
    <Link style={{color:'#ffffff'}}

      component="button"
      variant="body2"
      onClick={() => {
        console.info("I'm a button.");
        
      }}
    >
      Contact Us
    </Link>
  );
}
