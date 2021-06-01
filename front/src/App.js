import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import React from 'react';
import Login from './pages/login'
import DashBoard from './pages/dashboard'
import Register from './pages/register';
import Profile from './pages/profile';


function App() {

  const theme = createMuiTheme({
    spacing: 4,
    palette: {
      primary:{
        main: '#074585',
      },
      secondary:{
        main: '#BBB',
      },
      background:{
        default: '#444',
        paper: '#BBB',
      }

    }
  })



  return (
    <div >
      <ThemeProvider theme={theme}>
        <Router>

          <Route path="/" exact render={() => (
            <Login />
            )}
          />

          <Route path="/register" exact render={() => (
            <Register />
            )}
          />

          <Route path="/dashboard" exact render={() => {
            //pegar validação de login
            return (<DashBoard />)
      
            }}
          />

          <Route path="/profile" exact render={() => {
            //pegar validação de login
              return (<Profile />)
      
            }}
          />


        </Router>




        
      </ThemeProvider>
    </div>
  );
}

export default App;
