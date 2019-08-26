import React from 'react';

// const API = 'https://date.nager.at/Api/v1/Get/{this.state.country}/{this.state.year}';
// const API2 = 'https://date.nager.at/Api/v2/AvailableCountries';

class Main extends React.Component {
    state = {
        section: "cal",
        year: 2019,
        country: "PL",
        data: [
            {
                "date": "2019-01-01",
                "localName": "Nowy Rok",
                "name": "New Year's Day",
                "countryCode": "PL",
                "fixed": true,
                "global": true,
                "counties": null,
                "launchYear": null,
                "type": "Public"
            },
            {
                "date": "2019-01-06",
                "localName": "Święto Trzech Króli",
                "name": "Epiphany",
                "countryCode": "PL",
                "fixed": true,
                "global": true,
                "counties": null,
                "launchYear": null,
                "type": "Public"
            },
            {
                "date": "2019-04-21",
                "localName": "Wielkanoc",
                "name": "Easter Day",
                "countryCode": "PL",
                "fixed": false,
                "global": true,
                "counties": null,
                "launchYear": null,
                "type": "Public"
            },
            {
                "date": "2019-04-22",
                "localName": "Drugi Dzień Wielkanocy",
                "name": "Easter Monday",
                "countryCode": "PL",
                "fixed": false,
                "global": true,
                "counties": null,
                "launchYear": null,
                "type": "Public"
            },
            {
                "date": "2019-05-01",
                "localName": "Święto Pracy",
                "name": "May Day",
                "countryCode": "PL",
                "fixed": true,
                "global": true,
                "counties": null,
                "launchYear": null,
                "type": "Public"
            },
            {
                "date": "2019-05-03",
                "localName": "Święto Narodowe Trzeciego Maja",
                "name": "Constitution Day",
                "countryCode": "PL",
                "fixed": true,
                "global": true,
                "counties": null,
                "launchYear": null,
                "type": "Public"
            },
            {
                "date": "2019-06-09",
                "localName": "Zielone Świątki",
                "name": "Pentecost Sunday",
                "countryCode": "PL",
                "fixed": false,
                "global": true,
                "counties": null,
                "launchYear": null,
                "type": "Public"
            },
            {
                "date": "2019-06-20",
                "localName": "Boże Ciało",
                "name": "Corpus Christi",
                "countryCode": "PL",
                "fixed": false,
                "global": true,
                "counties": null,
                "launchYear": null,
                "type": "Public"
            },
            {
                "date": "2019-08-15",
                "localName": "Wniebowzięcie Najświętszej Maryi Panny",
                "name": "Assumption Day",
                "countryCode": "PL",
                "fixed": true,
                "global": true,
                "counties": null,
                "launchYear": null,
                "type": "Public"
            },
            {
                "date": "2019-11-01",
                "localName": "Wszystkich Świętych",
                "name": "All Saints' Day",
                "countryCode": "PL",
                "fixed": true,
                "global": true,
                "counties": null,
                "launchYear": null,
                "type": "Public"
            },
            {
                "date": "2019-11-11",
                "localName": "Narodowe Święto Niepodległości",
                "name": "Independence Day",
                "countryCode": "PL",
                "fixed": true,
                "global": true,
                "counties": null,
                "launchYear": null,
                "type": "Public"
            },
            {
                "date": "2019-12-25",
                "localName": "Boże Narodzenie",
                "name": "Christmas Day",
                "countryCode": "PL",
                "fixed": true,
                "global": true,
                "counties": null,
                "launchYear": null,
                "type": "Public"
            },
            {
                "date": "2019-12-26",
                "localName": "Drugi Dzień Bożego Narodzenia",
                "name": "St. Stephen's Day",
                "countryCode": "PL",
                "fixed": true,
                "global": true,
                "counties": null,
                "launchYear": null,
                "type": "Public"
            }
        ],
        states: [[
            {
                "key": "AD",
                "value": "Andorra"
            },
            {
                "key": "AL",
                "value": "Albania"
            },
            {
                "key": "AR",
                "value": "Argentina"
            },
            {
                "key": "AT",
                "value": "Austria"
            },
            {
                "key": "AU",
                "value": "Australia"
            },
            {
                "key": "AX",
                "value": "Åland Islands"
            },
            {
                "key": "BB",
                "value": "Barbados"
            },
            {
                "key": "BE",
                "value": "Belgium"
            },
            {
                "key": "BG",
                "value": "Bulgaria"
            },
            {
                "key": "BJ",
                "value": "Benin"
            },
            {
                "key": "BO",
                "value": "Bolivia"
            },
            {
                "key": "BR",
                "value": "Brazil"
            },
            {
                "key": "BS",
                "value": "Bahamas"
            },
            {
                "key": "BW",
                "value": "Botswana"
            },
            {
                "key": "BY",
                "value": "Belarus"
            },
            {
                "key": "BZ",
                "value": "Belize"
            },
            {
                "key": "CA",
                "value": "Canada"
            },
            {
                "key": "CH",
                "value": "Switzerland"
            },
            {
                "key": "CL",
                "value": "Chile"
            },
            {
                "key": "CN",
                "value": "China"
            },
            {
                "key": "CO",
                "value": "Colombia"
            },
            {
                "key": "CR",
                "value": "Costa Rica"
            },
            {
                "key": "CU",
                "value": "Cuba"
            },
            {
                "key": "CY",
                "value": "Cyprus"
            },
            {
                "key": "CZ",
                "value": "Czechia"
            },
            {
                "key": "DE",
                "value": "Germany"
            },
            {
                "key": "DK",
                "value": "Denmark"
            },
            {
                "key": "DO",
                "value": "Dominican Republic"
            },
            {
                "key": "EC",
                "value": "Ecuador"
            },
            {
                "key": "EE",
                "value": "Estonia"
            },
            {
                "key": "EG",
                "value": "Egypt"
            },
            {
                "key": "ES",
                "value": "Spain"
            },
            {
                "key": "FI",
                "value": "Finland"
            },
            {
                "key": "FO",
                "value": "Faroe Islands"
            },
            {
                "key": "FR",
                "value": "France"
            },
            {
                "key": "GA",
                "value": "Gabon"
            },
            {
                "key": "GB",
                "value": "United Kingdom"
            },
            {
                "key": "GD",
                "value": "Grenada"
            },
            {
                "key": "GL",
                "value": "Greenland"
            },
            {
                "key": "GM",
                "value": "Gambia"
            },
            {
                "key": "GR",
                "value": "Greece"
            },
            {
                "key": "GT",
                "value": "Guatemala"
            },
            {
                "key": "GY",
                "value": "Guyana"
            },
            {
                "key": "HN",
                "value": "Honduras"
            },
            {
                "key": "HR",
                "value": "Croatia"
            },
            {
                "key": "HT",
                "value": "Haiti"
            },
            {
                "key": "HU",
                "value": "Hungary"
            },
            {
                "key": "ID",
                "value": "Indonesia"
            },
            {
                "key": "IE",
                "value": "Ireland"
            },
            {
                "key": "IM",
                "value": "Isle of Man"
            },
            {
                "key": "IS",
                "value": "Iceland"
            },
            {
                "key": "IT",
                "value": "Italy"
            },
            {
                "key": "JE",
                "value": "Jersey"
            },
            {
                "key": "JM",
                "value": "Jamaica"
            },
            {
                "key": "JP",
                "value": "Japan"
            },
            {
                "key": "LI",
                "value": "Liechtenstein"
            },
            {
                "key": "LS",
                "value": "Lesotho"
            },
            {
                "key": "LT",
                "value": "Lithuania"
            },
            {
                "key": "LU",
                "value": "Luxembourg"
            },
            {
                "key": "LV",
                "value": "Latvia"
            },
            {
                "key": "MA",
                "value": "Morocco"
            },
            {
                "key": "MC",
                "value": "Monaco"
            },
            {
                "key": "MD",
                "value": "Moldova"
            },
            {
                "key": "MG",
                "value": "Madagascar"
            },
            {
                "key": "MK",
                "value": "Macedonia"
            },
            {
                "key": "MN",
                "value": "Mongolia"
            },
            {
                "key": "MT",
                "value": "Malta"
            },
            {
                "key": "MX",
                "value": "Mexico"
            },
            {
                "key": "MZ",
                "value": "Mozambique"
            },
            {
                "key": "NA",
                "value": "Namibia"
            },
            {
                "key": "NE",
                "value": "Niger"
            },
            {
                "key": "NI",
                "value": "Nicaragua"
            },
            {
                "key": "NL",
                "value": "Netherlands"
            },
            {
                "key": "NO",
                "value": "Norway"
            },
            {
                "key": "NZ",
                "value": "New Zealand"
            },
            {
                "key": "PA",
                "value": "Panama"
            },
            {
                "key": "PE",
                "value": "Peru"
            },
            {
                "key": "PL",
                "value": "Poland"
            },
            {
                "key": "PR",
                "value": "Puerto Rico"
            },
            {
                "key": "PT",
                "value": "Portugal"
            },
            {
                "key": "PY",
                "value": "Paraguay"
            },
            {
                "key": "RO",
                "value": "Romania"
            },
            {
                "key": "RS",
                "value": "Serbia"
            },
            {
                "key": "RU",
                "value": "Russia"
            },
            {
                "key": "SE",
                "value": "Sweden"
            },
            {
                "key": "SI",
                "value": "Slovenia"
            },
            {
                "key": "SJ",
                "value": "Svalbard and Jan Mayen"
            },
            {
                "key": "SK",
                "value": "Slovakia"
            },
            {
                "key": "SM",
                "value": "San Marino"
            },
            {
                "key": "SR",
                "value": "Suriname"
            },
            {
                "key": "SV",
                "value": "El Salvador"
            },
            {
                "key": "TN",
                "value": "Tunisia"
            },
            {
                "key": "TR",
                "value": "Turkey"
            },
            {
                "key": "UA",
                "value": "Ukraine"
            },
            {
                "key": "US",
                "value": "United States"
            },
            {
                "key": "UY",
                "value": "Uruguay"
            },
            {
                "key": "VA",
                "value": "Vatican City"
            },
            {
                "key": "VE",
                "value": "Venezuela"
            },
            {
                "key": "VN",
                "value": "Vietnam"
            },
            {
                "key": "ZA",
                "value": "South Africa"
            },
            {
                "key": "ZW",
                "value": "Zimbabwe"
            }
        ]]
    };

    // handleDataFetch = () => {
    //     fetch({ API2 }, { mode: 'no-cors' })
    //         .then(response => {
    //             if (response.ok) {
    //                 return response;
    //             }
    //             throw Error(response.status)
    //         })
    //         .then(response => response.json())
    //         .then(result => {
    //             this.setState({
    //                 states: result
    //             })
    //         })
    //         .catch(error => console.log(error + "błąd"))

    // }



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
        console.log(this.state.states);
    }
    render() {

        return (
            <div className="mainSection">

                <div>
                    <select>
                        {this.state.states.map((state) => <option key={state.id}>{state.value}</option>)}
                    </select>
                    <button onClick={this.changeSemiSectionCal}>Kalendarz</button>
                    <button onClick={this.changeSemiSectionStat}>Statystyka</button>
                </div>
                <div>
                    {this.state.section === "cal" ? <div className="calender">
                        <button onClick={this.changeYearPlus}>dodaj rok</button>
                        <button onClick={this.changeYearMinus}>odejmij rok</button>
                        <ul>
                            {this.state.date.map((holiday) => <li key={holiday.date}>{holiday.date}{holiday.localName}</li>)}
                        </ul>
                    </div> :
                        <div>statki</div>}
                </div>

            </div >
        );
    }
}

export default Main;