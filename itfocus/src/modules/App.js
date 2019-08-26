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
- do połączenia z API próbowałe użyć metody fetch() - nie udało mi się a ja zdecydowanie za dużo czasu poświęciłem na próby,
w związku z tym zadanie uznaję za niewykonane ale wysłam co zrobiłem gdyż sam interfejs jest prygotowany moim zdaniem poprawnie. Jak nauczę sie poprawnie łączyć API z interfejsem to wystarczy podłączyć ;).
- do zastosowania SASSa albo SCSSa nawet nie doszedłem(chociaż miałem problem z konfiguracją - uznałem, że skoro wygląd nie ma znaczenia to skupię się na innych aspektach zadania.)
- za dużo czasu straciłem na fetch'a przez co struktura jest bardzo prosta - ale skupiłem się głównie na tym żeby po wrzuceniu danych do tablic, wszystko działo.

to moje pierwsze zadanie tego typu za jakikolwiek feedback będę wdzięczny
Dziękuję za wyzwanie i pozdrawiam.
*/


