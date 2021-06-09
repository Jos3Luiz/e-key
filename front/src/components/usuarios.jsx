import { Avatar, Card, CardActions, CardContent, CardHeader, Collapse, IconButton, makeStyles, Typography } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import { Cancel, Edit, ExpandMore, Favorite, Info, MoreVert, Share } from '@material-ui/icons';
import React, { useState } from 'react';
import clsx from 'clsx';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: red[300],
  },
}))



const Usuarios = ({name,data}) => {
  const classes = useStyles();


  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <Edit />
          </IconButton>
        }
        title={name}
        subheader="criete in September 14, 2016"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {data}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Info />
        </IconButton>
        <IconButton aria-label="share">
          <Cancel />
        </IconButton>
      </CardActions>
      
    </Card>
  );
}
 
export default Usuarios;