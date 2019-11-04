import React from 'react';
import Container from '@material-ui/core/Container';
import Login from './Login.jsx';
import Header from './Header.jsx'
import SuggestionView from './SuggestionView.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };

    this.handleLogin = this.handleLogin.bind(this);
  }

  // --------handles what happens after the user clicks Login
  handleLogin() {
    this.setState({ isLoggedIn: true });
  }

  render() {
    const { isLoggedIn } = this.state;
    return (
      <div className="App">
        {/* this container centers our content on the page. The width is inherited by the rest of our app. */}
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
              <SuggestionView />
            </div>
          ) : null }
        </Container>
      </div>
    );
  }
}

export default App;
