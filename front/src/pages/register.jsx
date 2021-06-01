import { 
  Avatar, Button, Container, Fab, FormControl, InputLabel, makeStyles, MenuItem, Select, TextField, Typography 
} from '@material-ui/core';
import { ArrowBack, LockOutlined } from '@material-ui/icons';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  voltar: {
    width: '10%',
    margin: theme.spacing(0, 5, 0),
    marginRight: '400px',

  },

  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    marginTop: 30,
    marginBottom: 50,
    marginLeft: 150,
  },
}));




const Register = () => {
  const history = useHistory()

  var sha512 = require('js-sha512').sha512;
  const [inputUser, setUser] = useState('');
  const [inputPass, setPass] = useState('');
  const [typeUser, setTypeUser] = useState('');
  const [open, setOpen] = useState(false);

  const handleInputUser = (e) => {
    setUser(e.target.value)
  }

  const handleInputPass = (e) => {
    setPass(e.target.value)
  }
  const handleLogin = () => {
    console.log(inputUser)
    var hashPass = sha512(inputPass)
    console.log(hashPass)
    console.log(typeUser)

    /*
    apiRegister(inputUser,hashPass)
    */
    hashPass=0
    /* tem que salvar o jwt e tem que verficiar para entrar no dashboard */

    history.goBack()
  }

  const handleChange = (event) => {
    setTypeUser(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const goBack = () => {

    history.goBack()
  };

  

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs" className={classes.root}>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlined />
        </Avatar>
        <Fab
            fullWidth
            variant="contained"
            color="primary"
            className={classes.voltar}
            onClick={goBack}
          >
            <ArrowBack />
          </Fab>
        <Typography component="h1" variant="h5">
          Register in SCRUDA
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            onChange={handleInputUser}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="conta"
            label="Conta"
            name="conta"
            autoComplete="conta"
            autoFocus
          />
          <TextField
            onChange={handleInputPass}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />

        <FormControl className={classes.formControl}>
            <InputLabel id="type-user">Tipo</InputLabel>
            <Select
                labelId="type-user"
                id='type-user'
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                value={typeUser}
                onChange={handleChange}
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={'admin'}>Admin</MenuItem>
                <MenuItem value={'user'}>User</MenuItem>
            </Select>
        </FormControl>
        

          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleLogin}
          >
            Regiter
          </Button>
        </form>
      </div>

    </Container>
  );
}



export default Register;