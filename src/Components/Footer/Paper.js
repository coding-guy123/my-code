import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CookieLink from './CookieLink';
import Facebook from './Icon';
import DLTLink from './DLTLink';
import ContactLink from './ContactLink';
import ImportantLink from './FooterLinks';
import { Grid } from '@material-ui/core';
import PrivacyLink from './PrivacyLink';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    backgroundColor : '#971919'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function FooterCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
      <Grid container spacing={3}>
<Grid item xs={12} sm={12} md={12}>
<Facebook/>
</Grid>
</Grid>
<br/>
<br/>
<ImportantLink/>
<br/>
<PrivacyLink/>
<br/>
<CookieLink/>
<br/>
<DLTLink/>
<br/>
<ContactLink/>
<br/>
<br/>
Copy Right Information
<br/>
<br/>
      </CardContent>
    </Card>
  );
}
