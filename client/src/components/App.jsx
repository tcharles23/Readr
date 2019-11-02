import React from 'react';
import Login from './Login.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="App">
        <h1> Hello fellow mortals! </h1>
        <div>
          <Login />
        </div>
      </div>
    );
  }
}

export default App;
