import React from 'react';
import '../style/App.css';
import Loggin from './Loggin.js';
import Footer from './Footer';


class App extends React.Component {
  state = {

  }
  render() {
    return (
      <div className="App">
        <Loggin />
        <Footer />
      </div>
    );
  }
}

export default App;


