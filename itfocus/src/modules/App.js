import React from 'react';
import '../style/App.css';
import Main from './Main';

class App extends React.Component {
  state = {
    data: null,
  }
  render() {
    return (
      <div>
        <Main />
      </div>
    );
  }
}

export default App;


