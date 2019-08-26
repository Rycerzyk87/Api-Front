import React from 'react';
import '../style/App.css';
import Loggin from './Loggin.js';
import Main from './Main.js';

class App extends React.Component {
  state = {

  }
  render() {
    return (
      <div className="App">
        <Loggin />
        {/* <Main /> */}
      </div>
    );
  }
}

export default App;


