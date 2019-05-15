import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import NavBar from './components/sections/NavBar';
import HomePage from './components/pages/HomePage';
import TeamPage from './components/pages/TeamPage';
import ContactPage from './components/pages/ContactPage';
import Footer from './components/sections/Footer';
import Copyright from './components/sections/Copyright';

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
