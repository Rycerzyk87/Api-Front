import React from 'react';
import '../style/App.css';
import Main from './Main';
import Loggin from './Loggin.js';

class App extends React.Component {
  state = {
    data: null,
  }
  render() {
    return (
      <div>
        <Loggin />
        <Main />
      </div>
    );
  }
}

export default App;


