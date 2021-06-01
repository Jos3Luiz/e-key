import { Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, makeStyles, useTheme } from '@material-ui/core';
import React from 'react';
import clsx from 'clsx';
import { ChevronLeft, ChevronRight, ListAlt, People, Storage } from '@material-ui/icons';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 2 ,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9) + 10,
      },
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
    },
    listItem: {

    },
    listItemText: {

    },


}));
const LeftDrawer = ({
  open,handleDrawerOpen,handleDrawerClose,handleDataBases,
  handleUsers,handleLogs}) => {

    const classes = useStyles();
    const theme = useTheme();

    return (

      <Drawer
      variant="permanent" 
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        }),
      }}
    >
      <div className={classes.toolbar}>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'rtl' ? <ChevronRight /> : <ChevronLeft />}
        </IconButton>
      </div>
      <Divider />
      <List>
        <ListItem button classes = {{root: classes.listItem}} >
          <ListItemIcon
            onClick = {handleDataBases}
          >
            {<Storage />}
          </ListItemIcon>

          <ListItemText
            classes={{
              primary: classes.listItemText,
            }}
            primary={'Data Bases'} 
            onClick={handleDataBases}
          />
        </ListItem>

        <ListItem button classes = {{root: classes.listItem}}>
          <ListItemIcon
            onClick = {handleUsers}
          >
            {<People />}
          </ListItemIcon>

          <ListItemText
            classes={{
              primary: classes.listItemText,
            }}
            primary={'Users'} 
            onClick = {handleUsers}
          />
        </ListItem>

        <ListItem button classes = {{root: classes.listItem}}>
          <ListItemIcon
            onClick = {handleLogs}
          >
            {<ListAlt />}
          </ListItemIcon>

          <ListItemText
            classes={{
              primary: classes.listItemText,
            }}
            primary={'logs'} 
            onClick = {handleLogs}
          />
        </ListItem>
      </List>
    </Drawer>




    );
}
 
export default LeftDrawer;