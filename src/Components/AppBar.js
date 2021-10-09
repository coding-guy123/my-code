import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SwipeableTemporaryDrawer from './Homepageresurces/Homepage/Drawer';
import MenuDrawer from './HMenu/LeftDrawer';
import Logo from '../Assets/Logo.png'
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundcolor: '#ffffff',
    flexGrow: 1,
  },
  AppBar: {
    padding: '3%',
    background: '#ffffff',
  

  },
  IconButton: {
    background: '#f90202' ,
  },


  menuButton: {
    marginRight: theme.spacing(2),
    color:'#ffffff'
  },
  title: {
    flexGrow: 1,
    padding : '2%'
    
    
  },
}));

export default function MenuAppBar() {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      
      <AppBar position="static" className={classes.AppBar}
>

        <Toolbar>
          <MenuDrawer/>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"> */}
            {/* <MenuIcon /> */}
          {/* </IconButton> */}
          <Grid container spacing={-8}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Typography variant="h10" className={classes.title}>
          <img src={Logo} />
          </Typography>
          </Grid>
          </Grid>
          {auth && (
            <div>
              <IconButton 
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
                className={classes.IconButton}
                >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
