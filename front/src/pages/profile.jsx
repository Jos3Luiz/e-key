import { 
  Avatar, Container, Fab, makeStyles, Typography 
} from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';
import React from 'react';
import { useHistory } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {

    backgroundColor: '#aaa', 
    border: '10',
    shadows: '100000'
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#aaa', 
    
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: '#a73', //seria legal botar aleatório
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

  },

  conta: {
    width: 180,
    backgroundColor: '#aaa',
  },

  button: {
    display: 'block',
    marginTop: theme.spacing(2),
    marginBottom: '1000'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    marginTop: 30,
    marginBottom: 150,
    marginLeft: 150,
  },
}));




const Profile = () => {
  const history = useHistory()

  const goBack = () => {

    history.goBack()
  };

  const classes = useStyles();

  const conta = 'Teste123'
  const pass = '*******'
    //no Avatar seria legal colocar as duas primeiras letras de 'conta'
  return (
    <Container component="main" maxWidth="xs" className={classes.root}>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          T
        </Avatar>
        
        <Typography component="h1" variant="h4">
          Profile
        </Typography>

        <Avatar variant="square" className={classes.conta}>
          conta: {conta}
        </Avatar>


        <Typography
            variant="h5"
            id="conta"
            name="conta"
        >
          senha
        </Typography>
        <Typography
            variant="h5"
            id="conta"
            name="conta"
        >
          {pass}
        </Typography>

        <Fab
            fullWidth
            variant="contained"
            color="primary"
            className={classes.voltar}
            onClick={goBack}
          >
            <ArrowBack />
        </Fab>

        
        <br />
      </div>

    </Container>
  );
}



export default Profile;