import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SwipeableTextMobileStepperPlan from './Stepper';
import LinkButton from './SelectLink';
import HdSwipeableTextMobileStepper from '../SelectionResources/HDstepper';
import { Divider, Grid } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  text: {
    width: '100%',
    color: '#E40001'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleAccordion() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Plan Summary</Typography>
          <Grid container spacing={0} align="right">
                    <Grid item xs={12} sm={12} md={12} xl={12}>
          <LinkButton/>
          </Grid>
          </Grid>
        </AccordionSummary>
        <Divider/>
        <Typography align ='left'>HD High Definition Box</Typography>
        <AccordionDetails>
          <HdSwipeableTextMobileStepper/>
        </AccordionDetails>
        <Grid container spacing={0} align="left">
                    <Grid item xs={6} sm={12} md={12} xl={12}>
                <Typography variant="h10"> Total(Excl GST)  </Typography> 
                </Grid>

              
                    <Grid item xs={6} sm={12} md={12} xl={12}>
                <Typography variant="h5" color="textSecondary" className={classes.text} align="right">₹1500</Typography>
                </Grid>
                </Grid>
      </Accordion>
    </div>
  );
}
