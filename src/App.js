import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import TeamPage from './components/TeamPage';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
import Copyright from './components/Copyright';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/team" component={TeamPage} />
        <Route path="/contact" component={ContactPage} />
      </Switch>
      <Footer />
      <Copyright />
    </BrowserRouter>
  );
};

export default App;
