import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import DeskCustomizedMenus from './Menu List';


const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    padding: '2%',
    width: '100%'
  },
});

export default function DeskCenteredTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    
      <Tabs className={classes.root}
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="PREPAID" style={{ color: '#ff0000' }} />
        <DeskCustomizedMenus style={{ color: '#ff0000' }}/>
        <Tab label="POSTPAID" style={{ color: '#ff0000' }} />
        <Tab label="BROADBAND" style={{ color: '#ff0000' }}/>
        <Tab label="BANK" style={{ color: '#ff0000' }}/>
        <Tab label="AIRTEL BLACK" style={{ color: '#ff0000' }}/>
        <Tab label="HELP" style={{ color: '#ff0000' }}/>
      </Tabs>
      
  );
}
