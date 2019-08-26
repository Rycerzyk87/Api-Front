import React from 'react';

const holidays = [
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
    }
];

const Line = ({ left }) => {
    return (
        <div className="line"
            style={{ left: `${left}%` }}
        ></div>
    )
}

const BarTextContent = () => {
    return (
        <div className="bar-text-content">

        </div>
    )
}
const Bar = ({ percent }) => {
    return (
        <div className="bar" style={{ width: `${percent}%` }}></div>
    )
}

renderBars() {
    const { holidays } = this.props;

    return holidays.map((holiday) => {
        const percent = holiday.number * 20
        return (
            <Bar
                percent={percent}
                key={holiday.month}
            />
        )
    })

}

class Graph extends React.Component {
    state = {}
    renderLines() {
        return Array(10).fill(null).map((el, i) => (
            <Line
                left={i * 10}
                key={i}
            />
        ))
    }
    render() {
        return (
            <div className="graph-wrapper">
                <div className="graph">
                    <BarTextContent />
                    <div className="bar-lines-container">
                        {this.renderLines()}
                        <Bar percent={20} />
                        <Bar percent={50} />
                        <Bar percent={50} />
                        <Bar percent={60} />

                    </div>
                </div>

            </div>
        );
    }
}

export default Graph;