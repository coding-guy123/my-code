import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import {Link, Router} from "react-router-dom";

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: '#ff0000',
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function DeskCustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
       style={{ color: '#ff0000' }}
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant=""
        onClick={handleClick}
      >
        DTH
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
         backgroundcolor = '#ff0000'
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
         
          <ListItemText primary="Recharge" style={{ color: '#ff0000' }}/>
        </StyledMenuItem>
        <StyledMenuItem>
        <ListItemText primary="Buy A New DTH Connection" style={{ color: '#ff0000' }} />  
        </StyledMenuItem>
        <StyledMenuItem>
        <ListItemText primary="View Plans" style={{ color: '#ff0000' }}/>  
        </StyledMenuItem>
        <StyledMenuItem>
        <ListItemText primary="Upgrade Box" style={{ color: '#ff0000' }}/>  
        </StyledMenuItem>
        <StyledMenuItem>
        <Link to={process.env.PUBLIC_URL + '/selection'}>
        <ListItemText primary="Xstream" style={{ color: '#ff0000' }}/>  
        </Link>
        </StyledMenuItem>
      </StyledMenu>
      
    </div>
  );
}
