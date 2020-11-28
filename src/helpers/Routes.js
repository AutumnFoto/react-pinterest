import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Views/Home';
// import BoardForm from '../Views/BoardForm';
import Boards from '../Views/Boards';
import PinDetails from '../Views/PinDetails';
import PinForm from '../Views/PinForm';
import Pins from '../Views/Pins';
import SingleBoard from '../Views/SingleBoard';
import NotFound from '../Views/NotFound';
import SearchResults from '../Views/SearchResults';

export default function Routes({ user }) {
  return (
      <Switch>
        <Route
          exact
          path='/'
          component={() => <Home user={user} />}
        />
        <Route
          exact
          path='/pins'
          component={() => <Pins user={user} />}
        />
        <Route
          exact
          path='/pins/:id'
          component={() => <PinDetails user={user} />}
        />
        <Route
          exact
          path='/pin-form'
          component={() => <PinForm user={user} />}
        />
        <Route
          exact
          path='/boards/:id'
          component={(props) => <SingleBoard user={user} {...props} />}
        />
        <Route
          exact
          path='/search/:term/:type'
          component={(props) => <SearchResults {...props} />}
        />
        <Route
          exact
          path='/boards'
          component={() => <Boards user={user} />}
        />
        <Route component={NotFound} />
      </Switch>
  );
}
