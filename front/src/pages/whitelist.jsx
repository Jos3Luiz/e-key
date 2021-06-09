import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Toolbar, Typography } from '@material-ui/core';
import Usuarios from '../components/usuarios';

function createData(name, data) {
  return { name, data};
}

const rows = [
  createData('India', 'INAAAAAAAAAAAA' ),
  createData('China', 'CNNM'),
  createData('Italy', 'ITAAAAAAA'),
  createData('United States', 'USAAAAAA'),
  createData('Canada', 'CAAAA'),
  createData('Australia', 'AUDDD'),
  createData('Germany', 'DEEEE'),
  createData('Ireland', 'I'),
  createData('Mexico', 'MXSSS'),
  createData('Japan', 'JPD'),
  createData('France', 'FRA'),
  createData('United Kingdom', 'GB'),
  createData('Russia', 'RU' ),
  createData('Nigeria', 'NG'),
  createData('Brazil', 'BR')
];

const useStyles = makeStyles({
  root: {
    width: '100%',
		marginTop: 10,
  }
});


const Whitelist = () => {
	const classes = useStyles();



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
                    <Usuarios name= {item.name} data = {item.data}/>
                  </Box>
                </Grid>
              ))
            }
         </Grid>
  </Box>
    
  );
}
 
export default Whitelist;

