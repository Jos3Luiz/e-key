import React, { useState  } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Toolbar, Typography } from '@material-ui/core';
import Usuarios from '../components/usuarios';
import Api from '../API/routes'


const useStyles = makeStyles({
  root: {
    width: '100%',
		marginTop: 10,
  }
});




const Whitelist = () => {
	const classes = useStyles();
  const [rows,setRows] = useState([]);
  Api.getAllDevices()
  .then((res)=>{
    setRows(res);
  })
  



	return (
    <Box p={8}>
          <Toolbar />
          < Typography
            variant='h5'
            color='textPrimary'
            style={{ fontWeight: 600 }}
          >
            Usuarios
          </Typography>
          <Grid container spacing={4}>
            {
              rows.map((item,index) => (
                <Grid item lg={3} md={4} sm={6} xs={12}>
                  <Box>
                    <Usuarios name= {item.name} uid = {item.uid} createdTimestamp = {item.createdAt} permissionState={item.status}/>
                  </Box>
                </Grid>
              ))
            }
         </Grid>
  </Box>
    
  );
}
 
export default Whitelist;

