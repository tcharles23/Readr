import React from 'react';
import axios from 'axios';
import Container from '@material-ui/core/Container';
import Login from './Login.jsx';
import Header from './Header.jsx'
import SuggestionView from './SuggestionView.jsx';
import testBook from './TestBook';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      bookSuggestion: testBook,
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.getBookSuggestion = this.getBookSuggestion.bind(this);
  }

  /* Sends request to server to get a book suggestion from google books API.
  * If the book suggestion is already in the logged in user's
  * "yes" or "no" list, resend the getBookSuggestion request.
  * We could also do this server side, by getting the response and checking
  * the user's database. Send back the first item in the Query to Googls API
  * */

  getBookSuggestion() {
    // return axios.get('/book').then((retrievedBook) => {
    //   return retrievedBook;
    // });

    const { bookSuggestion } = this.state;
    return bookSuggestion;
  }

  // --------handles what happens after the user clicks Login
  handleLogin() {
    this.setState({ isLoggedIn: true });
    this.getBookSuggestion();
  }

  render() {
    const { bookSuggestion } = this.state;
    const { isLoggedIn } = this.state;
    return (
      <div className="App">
        {/* this container centers content on the page. Width is inherited by the rest of app. */}
        <Container component="main" maxWidth="sm">
          <h1> Readr </h1>
          <div>
            {isLoggedIn === false ? (
              <Login handleLogin={this.handleLogin} />) : null }
          </div>
          {/* conditional rendering of the components based on if the user is logged in */}
          {isLoggedIn ? (
            <div>
              <header>
                <Header />
              </header>
              <SuggestionView
                getBookSuggestion={this.getBookSuggestion}
                bookSuggestion={bookSuggestion}
              />
            </div>
          ) : null }
        </Container>
      </div>
    );
  }
}

export default App;
