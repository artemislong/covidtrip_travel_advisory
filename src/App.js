import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import ReactGA from 'react-ga';
//styling
import './App.css';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { stylingObject, theme } from "./style/general";
import "react-toastify/dist/ReactToastify.css";
//component
import { Container } from '@material-ui/core';
import Main from './pages/Main';
import NavBar from './pages/components/NavBar';
import Footer from './pages/components/Footer';
//import Languages from './pages/Languages';
import Country from './pages/Country';
//context
import ClassesContext from './context/classesContext';
import history from './utils/history'

//-------app function--------
function App() {
  const classes = makeStyles(stylingObject)();
  // ScrollToTop();

  //google analytics
  ReactGA.initialize('UA-175442767-1');
  history.listen(location => {
    ReactGA.set({ page: location.pathname }); // Update the user's current page
    ReactGA.pageview(location.pathname); // Record a pageview for the given page
  });


  return (
    <ThemeProvider theme={theme}>
      <ClassesContext.Provider value={classes}>
        <NavBar />
        <Container className={classes.root}>
          <ToastContainer />
          <Switch>
            {/* <Route exact path="/languages" render={(props) => <Languages {...props} />} /> */}
            <Route exact path="/:id" render={(props) => <Country {...props} />} />
            <Route exact path="" render={(props) => <Main {...props} />} />
            <Redirect from="*" to="" />
          </Switch>
        </Container>
        <Footer />

      </ClassesContext.Provider>
    </ThemeProvider>
  );
}

export default App;


