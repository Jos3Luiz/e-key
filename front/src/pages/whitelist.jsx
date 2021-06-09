import React, { useEffect, useState  } from 'react';
import { Box, Grid, Toolbar, Typography } from '@material-ui/core';
import Usuarios from '../components/usuarios';
import Api from '../API/routes'


const Whitelist = () => {
  const [rows,setRows] = useState([]);
  
  useEffect(()=>{
      async function fetchRows() {
        setRows(await Api.getAllDevices())
      }
      fetchRows()
  },[])


	return (
    <Box paddingLeft={5}>
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

