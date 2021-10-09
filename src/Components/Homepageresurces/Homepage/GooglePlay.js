import React from 'react';
import Button from '@material-ui/core/Button';

export default function GooglePlay() {
  return (
    <Button variant="contained" color="primary" style={{ backgroundColor: '#000000' }} 
    disableElevation href="https://play.google.com/store/apps/details?id=com.myairtelapp">
      Google Play
    </Button>
  );
}
