import { Avatar, Card, CardActions, CardContent, CardHeader, Collapse, IconButton, makeStyles, Typography } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import { Cancel, Edit, ExpandMore, Favorite, Info, MoreVert, Share } from '@material-ui/icons';
import React, { useState } from 'react';
import clsx from 'clsx';

//pending,allowed,forbidden
const colors =["#d9d9d9","#80ffaa","#ff8080"];


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



const Usuarios = ({name,uid,createdTimestamp,permissionState=0}) => {
  const classes = useStyles();

  // multiplied by 1000 so that the argument is in milliseconds, not seconds.
  let date = new Date(createdTimestamp * 1000);
  let formattedTime ="Created at " + date.toLocaleDateString("en-US");
    


  return (
    <Card className={classes.root} style={{backgroundColor: "red"}}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {name[0]}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <Edit />
          </IconButton>
        }
        title={name}
        subheader={formattedTime}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          UID: {uid.toString(16)}
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