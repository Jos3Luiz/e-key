import { Avatar, Button, Card, CardActions, CardContent, CardHeader, Collapse, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, makeStyles, Slide, Typography } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import { Cancel, DoneOutline, Edit, ExpandMore, Favorite, Info, MoreVert, Share } from '@material-ui/icons';
import React, { forwardRef, useState } from 'react';
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

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
})

const Usuarios = ({name,uid,createdTimestamp,permissionState=0}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // multiplied by 1000 so that the argument is in milliseconds, not seconds.
  let date = new Date(createdTimestamp * 1000);
  let formattedTime ="Created at " + date.toLocaleDateString("en-US");
    


  return (
    <Card className={classes.root} style={{backgroundColor: colors[permissionState]}}>
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
        <IconButton aria-label="show info">
          <Info />
        </IconButton>
        <IconButton onClick ={handleClickOpen} aria-label="drop">
          <Cancel/>
        </IconButton>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">{"Do you want to  eliminate the user? "}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              Do really you want to eliminate the user?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              <Cancel/>
            </Button>
            <Button onClick={handleClose} color="primary">
              <DoneOutline />
            </Button>
          </DialogActions>


        </Dialog>
      </CardActions>
      
    </Card>
  );
}
 
export default Usuarios;