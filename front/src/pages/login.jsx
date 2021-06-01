import { 
  Avatar, Button, Container,Grid, makeStyles, TextField, Typography 
} from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';


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
}));



const Login = () => {
  const history = useHistory()

  var sha512 = require('js-sha512').sha512;
  const [inputUser, setUser] = useState('');
  const [inputPass, setPass] = useState('');

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
    /*
    apiLogin(inputUser,hashPass)
    */
    hashPass=0
    /* tem que salvar o jwt para solicitar os dados 
     * tem que verficiar se a conta foi validada para executar o acima */

    history.push(`/dashboard`)
  }

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs" className={classes.root}>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          SCRUDA
        </Typography>
        <Typography component="p">
          System to Create, Register, Update, Drop and Alter data and tables in a relational database.

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
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleLogin}
          >
            Entrar
          </Button>
          <Grid container>
            <Grid item>
              <Link to="/register" variant="body2">
                Registrar
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>

    </Container>
  );
}
export default Login;