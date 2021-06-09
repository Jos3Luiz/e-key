import { Avatar, Card, CardActions, CardContent, CardHeader, Collapse, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, makeStyles, Slide, Typography } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import { Cancel, DoneOutline, Edit, ExpandMore, Favorite, Info, MoreVert, Share } from '@material-ui/icons';
import React, { forwardRef, useState } from 'react';
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

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
})

const Usuarios = ({name,data}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


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
        <IconButton onClick ={handleClickOpen} aria-label="share">
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
              Let Google help apps determine location. This means sending anonymous location data to
              Google, even when no apps are running.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <iconButton onClick={handleClose} color="primary">
              <Cancel/>
            </iconButton>
            <iconButton onClick={handleClose} color="primary">
              <DoneOutline />
            </iconButton>
          </DialogActions>


        </Dialog>
      </CardActions>
      
    </Card>
  );
}
 
export default Usuarios;