import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './components/App.jsx';
// import Logout from './components/Logout';
import SuggestionView from './components/SuggestionView.jsx';
import BookListView from './components/BookListView.jsx';
import ReaderView from './components/ReaderView.jsx';
import NotFound from './components/NotFound.jsx';


ReactDOM.render(
  // creates URLs with the following format: http://localhost:3000/route/subroute
  (
    <BrowserRouter>
      {/* a router component can only have one child */}
      <div>
        <Switch>
          {/* // this is our default route */}
          <Route exact path="/" component={App} />
          <Route exact path="/suggestion" component={SuggestionView} />
          <Route exact path="/toread" component={BookListView} />
          <Route exact path="/readnow" component={ReaderView} />
          {/* // if noroute exists */}
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  ), document.getElementById('root'),
);
