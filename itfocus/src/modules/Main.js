import React from 'react';
import Graph from './Graph.js';






class Main extends React.Component {
    state = {
        // domyślne wartości dla state, section wskazuje domyślną pozycję kalendarza
        section: "cal",
        year: 2019,
        country: "PL",
        // nie udało mi się połączyć z API, dlatego przypisałem wartośći, żeby opracować przynajmniej resztę. 8/10 czasu poświęconego na to zadanie poświęciłem na kompunikację z API - mogłem szybciej odpuścić i dopracować resztę. 
        data: [],
        states: []
    };

    changeSemiSectionCal = (e) => {
        this.setState({
            section: "cal"
        })
    }
    changeSemiSectionStat = (e) => {
        this.setState({
            section: "stat"
        })
    }
    changeYearPlus = (e) => {
        this.setState({
            year: this.state.year + 1
        })
    }
    changeYearMinus = (e) => {
        this.setState({
            year: this.state.year - 1,
        })

    }
    handleDataFetchHolidays = (e) => {
        let API = `https://date.nager.at/Api/v1/Get/'${this.state.country}'/'${this.state.year}'`;
        const API2 = 'https://date.nager.at/Api/v2/AvailableCountries';

        const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        const targetUrl = 'https://date.nager.at/Api/v1/Get/GB/2019';

        fetch(proxyUrl + targetUrl, {
            method: 'GET',
        }).then(response => response.json())
            .then(data => {

                this.setState({
                    data: data
                })
            }
            );
    };

    handleDataFetchStates = (e) => {
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        const targetUrl = 'https://date.nager.at/Api/v2/AvailableCountries';

        fetch(proxyUrl + targetUrl, {
            method: 'GET',
        }).then(response => response.json())
            .then(data => {

                this.setState({
                    states: data
                })
            }
            );
    };
    componentDidMount() {
        this.handleDataFetchHolidays()
        this.handleDataFetchStates()

    }
    render() {

        return (
            <div className="mainSection">

                <div>
                    <select onChange={(e) => this.setState({ country: e.target.key })}>

                        {this.state.states.map((state) => <option key={state.key} >{state.key} {state.value}</option>)}
                    </select>
                    <button onClick={this.changeSemiSectionCal}>Kalendarz</button>
                    <button onClick={this.changeSemiSectionStat}>Statystyka</button>
                </div>
                <div>
                    {/* na podstawie state zwracam odpowiednią sekcję */}
                    {this.state.section === "cal" ? <div className="calender">
                        <button onClick={this.changeYearPlus}>dodaj rok</button>
                        <span>Wybrany rok to: {this.state.year}</span>
                        <button onClick={this.changeYearMinus}>odejmij rok</button>
                        <ul>
                            {/* generuję z tablicy wszystkie święta */}
                            {this.state.data.map((holiday) => <li key={holiday.date}>{holiday.date} {holiday.localName}</li>)}
                        </ul>
                    </div> :
                        <div>
                            <Graph />
                        </div>}
                </div>

            </div >
        );
    }
}

export default Main;