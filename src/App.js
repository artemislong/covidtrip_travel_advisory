import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
//styling
import './App.css';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { stylingObject, theme } from "./style/general";
import "react-toastify/dist/ReactToastify.css";
//component
import { Container } from '@material-ui/core';
import Main from './pages/Main';
import NavBar from './pages/components/NavBar';
import Languages from './pages/Languages';
import Country from './pages/Country';
//context
import ClassesContext from './context/classesContext';


//-------styling hooks------
const useStyles = makeStyles(stylingObject);

//-------app function--------
function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <ClassesContext.Provider value={classes}>
        <NavBar />
        <Container className={classes.root}>
          <ToastContainer />
          <Switch>
            <Route exact path="/languages" render={(props) => <Languages {...props} />} />
            <Route exact path="/:id" render={(props) => <Country {...props} />} />
            <Route exact path="" render={(props) => <Main {...props} />} />
            <Redirect from="*" to="" />
          </Switch>
        </Container>
        {/* // <BottomNav /> */}
      </ClassesContext.Provider>
    </ThemeProvider>
  );
}

export default App;


