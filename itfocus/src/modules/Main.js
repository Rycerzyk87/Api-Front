import React from 'react';

const API = 'https://date.nager.at/'
class Main extends React.Component {
    state = {
        data: null,
    }
    // componentDidMount
    handleDataFetch = () => {
        fetch(API, { mode: 'no-cors' })
            .then(response => {
                console.log(response);
                if (response.ok) {
                    return response
                }
                throw Error(response.status)
            })
            .then(response => response.json())
            .then(data => {
                this.setState({
                    data: data.results
                })
            })
            .catch(error => console.log("nie dziala koniec"))
    }
    render() {
        return (
            <div>
                dane dane dane
                <button onClick={this.handleDataFetch}> pobierz dane</button>
            </div>
        );
    }
}

export default Main;