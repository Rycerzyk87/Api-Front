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
        holidays: [
            {
                month: 'styczeń',
                number: 2
            },
            {
                currencyName: 'Luty',
                number: 0
            },
            {
                currencyName: 'marzec',
                number: 0
            },
            {
                currencyName: 'kwiecień',
                number: 3
            },
            {
                currencyName: 'maj',
                number: 2
            },
            {
                currencyName: 'czerwiec',
                number: 1
            },
            {
                currencyName: 'lipiec',
                number: 0
            },
            {
                currencyName: 'sierpień',
                number: 1
            },
            {
                currencyName: 'wrzesień',
                number: 0
            },
            {
                currencyName: 'październik',
                number: 0
            },
            {
                currencyName: 'listopad',
                number: 1
            },
            {
                currencyName: 'grudzień',
                number: 2
            },
        ]
    }
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