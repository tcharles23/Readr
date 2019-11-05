import React from 'react';
import { Switch, Route } from 'react-router-dom';


import Login from './Login.jsx';

const Main = () => {
  return (
    <Switch>
      <Route exact path='/Login' component={Login}></Route>
    </Switch>
  );
}

export default Main;