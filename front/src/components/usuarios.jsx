import { Avatar, Button, Card, CardActions, CardContent, CardHeader, Dialog, DialogActions
  , DialogContent, DialogContentText, DialogTitle, FormControl, IconButton, InputLabel,
  makeStyles, MenuItem, Select, Slide, Typography } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import { Cancel, Close, DoneOutline, Edit} from '@material-ui/icons';
import React, { forwardRef, useState } from 'react';
import Api from '../API/routes'


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
  formControl: {
    marginTop: theme.spacing(2),
    minWidth: 120,
  },
  formControlLabel: {
    marginTop: theme.spacing(1),
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    width: 'fit-content',
  },
}))

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
})

const Usuarios = ({name,uid,createdTimestamp,permissionState=0}) => {
  const classes = useStyles();
  const [OpenCancel, setOpenCancel] = useState(false);
  const [OpenEdit, setOpenEdit] = useState(false);
  const [state, setState] = useState(permissionState)

  const handleClickOpenCancel = () => {
    setOpenCancel(true);
  };

  const handleCloseCancel = () => {
    setOpenCancel(false);
  };

  const deleteUser = (uid) => {
    console.log("deleting", uid)
    Api.deleteUser(uid)
  };

  const alterUser = (uid,state) => {
    console.log("altering", uid,state)
    Api.alterPermission(uid,state)
  };

  const handleClickOpenEdit = () => {
    setOpenEdit(true);
  };

  const handleCloseEdit = () => {
    setOpenEdit(false);
  };

  const handleStateChange = (event) => {
    setState(event.target.value);
    //send authorize to backend
  };


  // multiplied by 1000 so that the argument is in milliseconds, not seconds.
  let date = new Date(createdTimestamp * 1000);
  let formattedTime ="Created at " + date.toLocaleDateString("en-US");
    


  return (
    <Card className={classes.root} style={{backgroundColor: colors[state]}}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {name[0]}
          </Avatar>
        }
        action={
          <React.Fragment>
            <IconButton aria-label="settings" onClick={handleClickOpenEdit}>
            <Edit />
          </IconButton>
          <Dialog
            open={OpenEdit}
            onClose={handleCloseEdit}
            aria-labelledby="state-dialog-title"
          >
          <DialogTitle id="state-dialog-title">Edit State to User</DialogTitle>
          <DialogContent>
            <DialogContentText>
              You can set the state to user.
            </DialogContentText>
            <form className={classes.form} noValidate>
              <FormControl className={classes.formControl}>
              <InputLabel htmlFor="state">state</InputLabel>
              <Select
                autoFocus
                value={state}
                onChange={handleStateChange}
                inputProps={{
                  name: 'state',
                  id: 'state',
                }}
              >
                <MenuItem value="0">A definir</MenuItem>
                <MenuItem value="1">Permitido</MenuItem>
                <MenuItem value="2">Bloqueado</MenuItem>
              </Select>
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={(event) =>{handleCloseEdit(event);alterUser(uid,state)}} color="primary">
            <Close />
          </Button>
        </DialogActions>
      </Dialog>

          </React.Fragment>
          
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

        <IconButton onClick ={handleClickOpenCancel} aria-label="drop">
          <Cancel/>
        </IconButton>
        <Dialog
          open={OpenCancel}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleCloseCancel}
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
            <Button onClick={handleCloseCancel} color="primary">
              <Cancel/>
            </Button>
            <Button onClick={(event) => {handleCloseCancel(event);deleteUser(uid); }}  color="primary">
              <DoneOutline />
            </Button>
          </DialogActions>
        </Dialog>
      </CardActions>
      
    </Card>
  );
}
 
export default Usuarios;