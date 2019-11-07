import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './components/App.jsx';
import Login from './components/Login.jsx';
// import Logout from './components/Logout';
import SuggestionView from './components/SuggestionView.jsx';
import BookListView from './components/BookListView.jsx';
import ReaderView from './components/ReaderView.jsx';
import NotFound from './components/NotFound.jsx';

//  to authenicate wtih google  use path ‘/auth/google’

/*  When  you don’t include a path in a Route, the component will always render.
 * new structure of Routes is that  they should act like components,
 * so you should take advantage of component lifecycle methods instead.
 */


const Routes = () => {
  return (
    <Router>
      {/* switch statement is provided by React Router v4
        * With switch, only the first match will ever be rendered.  */}
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/readr/suggestion" component={SuggestionView} />
        <Route exact path="/readr/toread" component={BookListView} />
        <Route exact path="/readr/readnow" component={ReaderView} />
        <Route exact path="/logout" component={Login} />
        {/* // this is our default route */}
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default Routes;
