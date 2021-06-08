import { AppBar, Button, Fab, IconButton, makeStyles, Toolbar } from '@material-ui/core';
import React from 'react';
import clsx from 'clsx';
import { AccountCircle, ExitToApp, LockOutlined, Menu } from '@material-ui/icons';

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
    grow: {
      flexGrow: 1,
    },
    icon: {
      fontSize: 'large',
      border: 'none',
      height: 10,
    },
    logo: {
      margin: theme.spacing(0, 5, 0),
    }

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

        <Fab 
          fullWidth
          variant="contained"
          color="logo"
          className={classes.logo}
          onClick={goDashboard}
          >
          <LockOutlined/>
        </Fab>
        
        
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