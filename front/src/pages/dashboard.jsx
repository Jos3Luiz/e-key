import {
  makeStyles
 } from '@material-ui/core';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import TopBar from '../components/topBar';
import LeftDrawer from '../components/leftDrawer';
import Main from '../components/main';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    display: 'flex',
  },
  content: {
    marginTop: 40,
    flexGrow: 1,
    padding: theme.spacing(6),
  },

}));

const DashBoard = () => {
  const history = useHistory();
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [page,setPage] = useState('')
  //const [location, setLocation] = React.useState('');

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleExit = () => {
    //apagar o jwt
    history.push(`/`)
  }
  const goDashboard = () => {

    setPage('')
    /*history.push(`/dashboard`)*/
  }

  const handleDataBases = () => {
    setPage('dataBase')
    //history.push(`/dashboard`)
  }

  const handleUsers = () => {
    setPage('users')
    //history.push(`/dashboard`)
    
  }
  const handleLogs = () => {
    setPage('logs')
    //history.push(`/dashboard`)
  }
  const handleProfile = () => {
    history.push(`/profile`)
  }

  return (
      
    <div className={classes.root}>

      <TopBar 
        open = {open} 
        handleDrawerOpen={handleDrawerOpen}
        handleDrawerClose={handleDrawerClose} 
        goDashboard = {goDashboard}
        handleExit = {handleExit}
        handleProfile = {handleProfile}
      />

      <LeftDrawer
        open = {open}
        handleDrawerOpen={handleDrawerOpen}
        handleDrawerClose={handleDrawerClose}
        handleDataBases={handleDataBases}
        handleUsers={handleUsers}
        handleLogs={handleLogs}
      />


      
      <main className={classes.content}>
        <Main page = {page}/>
      </main>
    
    </div>
    
    );
}
 
export default DashBoard;
