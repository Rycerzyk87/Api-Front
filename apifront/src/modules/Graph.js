import React from 'react';
// tworzenie siatki

const Line = ({ left }) => {
    return (
        <div className="line"
            style={{ left: `${left}%` }}
        ></div>
    )
}

// tworzenie pojedyńćzego wykresu

const Bar = ({ percent }) => {
    return (
        <div className="bar" style={{ width: `${percent}%` }}></div>
    )
}



class Graph extends React.Component {
    state = {
        holidays: []
    }
    handleDataFetchHolidays = (e) => {

        const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        const targetUrl = 'https://date.nager.at/Api/v1/Get/GB/2019';

        fetch(proxyUrl + targetUrl, {
            method: 'GET',
        }).then(response => response.json())
            .then(data => {

                this.setState({
                    holidays: data
                })
            }
            );
    };

    // tworzenie siatki
    renderLines() {
        return Array(10).fill(null).map((el, i) => (
            <Line
                left={i * 10}
                key={i}
            />
        ))
    }
    // tworzenie opisu poszczególnego wykresu

    barTextContent() {
        return (
            <div className="bar-text-content">
                {
                    this.state.holidays.map((holiday) => (
                        <div className="text">
                            {holiday.month}
                        </div>
                    ))
                }

            </div>

        )
    }
    componentDidMount() {
        this.handleDataFetchHolidays()


    }
    render() {
        return (
            <div className="graph-wrapper">
                <div className="graph">
                    {this.barTextContent()}
                    <div className="bar-lines-container">
                        {this.renderLines()}
                        {this.state.holidays.map((holiday) => {
                            const percent = holiday.number * 10
                            return (
                                <Bar
                                    percent={percent}
                                    key={holiday.month}
                                />
                            )
                        })}


                    </div>
                </div>

            </div>
        );
    }
}

export default Graph;