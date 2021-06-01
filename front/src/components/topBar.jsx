import { AppBar, Button, IconButton, makeStyles, Toolbar } from '@material-ui/core';
import React from 'react';
import clsx from 'clsx';
import { AccountCircle, ExitToApp, Menu } from '@material-ui/icons';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      paddingLeft: 25,
      marginRight: 36,
    },
    hide: {
      display: 'none',
    },
    logo: {
      height: 30,
      border: 'none',
    },
    grow: {
      flexGrow: 1,
    },
    icon: {
      fontSize: 'large',
      border: 'none',
      height: 10,
    },

}));


const TopBar = ({open,handleDrawerOpen,handleDrawerClose,goDashboard,handleExit,handleProfile}) => {

    const classes = useStyles();

    return ( 

      <AppBar
      position="fixed"
      color='primary'
      className={clsx(classes.appBar, {
        [classes.appBarShift]: open,
      })}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          className={clsx(classes.menuButton, {
            [classes.hide]: open,
          })}
        >
          <Menu />
        </IconButton>

        <Button 
          variant="outlined"
          color='inherit'
          startIcon= {<img src="/images/logo.png" alt="logo" className={classes.logo} />}
          className={classes.logo}
          onClick={goDashboard}
          >
        </Button>
        
        
        <div className={classes.grow} />

        <Button 
          variant="outlined"
          color='inherit'
          startIcon={<ExitToApp />}
          className={classes.icon}
          onClick={handleExit}
          >
        </Button>

        <Button 
          variant="outlined"
          color='inherit'
          startIcon={<AccountCircle />}
          className={classes.icon}
          onClick={handleProfile}
          >
        </Button>
        
        
      </Toolbar>
    </AppBar>



     );
}
 
export default TopBar;