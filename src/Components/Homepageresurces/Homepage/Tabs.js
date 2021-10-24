import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import FormPropsTextFields from './Number text';
import { Grid } from '@material-ui/core';
import Recharge from './Recharge Button';
import NestedGrid from './Nested List';
import CSSGrid from './CSS grid';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: '100%', 
    padding : '2%'
    
  },
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="ffffff">
        <Tabs 
          value={value}
          onChange={handleChange}
          indicatorColor="primary" 
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
          color="ffffff"
        >
          <Tab  label="Prepaid" style={{ color: '#720001' }}{...a11yProps(0)} />
          <Tab label="Postpaid" style={{ color: '#720001' }} {...a11yProps(1)} />
          <Tab label="DTH"style={{ color: '#720001' }} {...a11yProps(2)} />
          <Tab label="Broadband" style={{ color: '#720001' }} {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
        <Grid item xs={6} sm={12} md={12} lg={12} xl={12} align='left'>
          <CSSGrid/>
          
          </Grid>
          
        </TabPanel>
        
        <TabPanel value={value} index={1} dir={theme.direction}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} align='left'>
        <CSSGrid/>
          
          
          </Grid>
        </TabPanel>

        <TabPanel value={value} index={2} dir={theme.direction}>
        <Grid item xs={6} sm={12} md={12} lg={12} xl={12} justifyContent='left'>
        <CSSGrid/>
          
          
          </Grid>
        </TabPanel>

        <TabPanel value={value} index={3} dir={theme.direction}>
        <Grid item xs={6} sm={12} md={12} lg={12} xl={12} justifyContent='left'>
        <CSSGrid/>
          
          </Grid>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
