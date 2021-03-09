import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import TeamDetails from './components/TeamDetails/TeamDetails';
import HomeHeader from './components/HomeHeader/HomeHeader';
import DetailsHeader from './components/DetailsHeader/DetailsHeader';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <HomeHeader />
          <Home />
        </Route>
        <Route path="/league/:id">
          <TeamDetails />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
