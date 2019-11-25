import React from 'react';
import Graph from './Graph';


class Main extends React.Component {
    state = {
        section: "cal",
        year: 2019,
        country: "PL",
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

        const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        const targetUrl = `https://date.nager.at/Api/v1/Get/${this.state.country}/${this.state.year}`;

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
    componentDidUpdate() {
        this.handleDataFetchHolidays()
    }

    render() {
        if (this.state.data.length === 0) {
            return (
                <div className="waiting"><h1>Waiting for data... </h1></div>
            );
        }
        return (
            <div className="mainSection">

                <div>
                    <span>Choose country: </span>
                    <select onChange={(e) => this.setState({ country: e.target.value })}>

                        {this.state.states.map((state) => <option key={state.key} value={state.key}>{state.value}</option>)}
                    </select>
                    <button onClick={this.changeSemiSectionCal}>Calendar</button>
                    <button onClick={this.changeSemiSectionStat}>Stats</button>
                </div>
                <div>
                    {this.state.section === "cal" ? <div className="calender">
                        <button onClick={this.changeYearPlus}>add year</button>
                        <span>Choosen year: {this.state.year}</span>
                        <button onClick={this.changeYearMinus}>remove year</button>
                        <ul>
                            {this.state.data.map((holiday) => <li key={holiday.date}>{holiday.date} <span>{holiday.localName}</span></li>)}
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