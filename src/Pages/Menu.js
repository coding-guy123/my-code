import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function HMenu() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
        </ListSubheader>
      }
      className={classes.root}
    >
      <ListItem button>
        <ListItemIcon>
        </ListItemIcon>
        <ListItemText primary="PREPAID" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
        </ListItemIcon>
        <ListItemText primary="POSTPAID" />
      </ListItem>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
        </ListItemIcon>
        <ListItemText primary="DTH" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Recharge" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Buy New DTH Connection" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="View Plans" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Upgrade Box" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Xstream" />
          </ListItem>
        </List>
      </Collapse>
      <ListItem button>
        <ListItemIcon>
        </ListItemIcon>
        <ListItemText primary="BROADBAND" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
        </ListItemIcon>
        <ListItemText primary="BANK" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
        </ListItemIcon>
        <ListItemText primary="AIRTEL BLACK" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
        </ListItemIcon>
        <ListItemText primary="HELP" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
        </ListItemIcon>
        <ListItemText primary="XSTREAM" />
      </ListItem><ListItem button>
        <ListItemIcon>
        </ListItemIcon>
        <ListItemText primary="SIGN IN" />
      </ListItem>
    </List>
  );
}
