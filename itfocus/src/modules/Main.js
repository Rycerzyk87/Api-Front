import React from 'react';

const API = 'https://date.nager.at/Api/v1/Get/PL/2019';

class Main extends React.Component {
    state = {
        data: null,
    }

    handleDataFetch = () => {
        fetch({ API }, { mode: 'no-cors' })
            .then(response => {
                if (response.ok) {
                    return response;
                }
                throw Error(response.status)
            })
            .then(response => response.json())
            .then()
            .catch(error => console.log(error + "błąd"))

    }


    render() {
        return (
            <div>
                DANE
                < button onClick={this.handleDataFetch} > pobierz dane</button >
            </div >
        );
    }
}

export default Main;