import React from 'react';
import '../style/App.css';
import Loggin from './Loggin.js';


class App extends React.Component {
  state = {

  }
  render() {
    return (
      <div className="App">
        <Loggin />
      </div>
    );
  }
}

export default App;

/* swoją aplikację stworzyłem w oparciu o:
- bibliotekę React ponieważ wydała mi sie to najszybsza i najlepiej znana przeze mnie metoda
- do połączenia z API próbowałe użyć metody fetch() - nie udało mi się a ja zdecydowanie za dużlo czasu poświęciłem na próby
w związku z tym zadanie uznaję za niewykonane ale wysłam co zrobiłem bo trochę pracy mnie to kosztowało.

*/


