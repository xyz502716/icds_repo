import React from 'react';
//import ReactDOM from 'react-dom';
import { VictoryBar, VictoryChart, VictoryAxis } from "victory";

const Test1 = () => {

    const data = [
        { quarter: 1, earnings: 10000 },
        { quarter: 2, earnings: 13500 },
        { quarter: 3, earnings: 15250 },
        { quarter: 4, earnings: 19000 }
    ];

    return (
        <div>
            <h1>Victory Tutorial</h1>
            <VictoryChart domainPadding={20}>
                <VictoryAxis tickValues={[1, 2, 3, 4]}
                    tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
                />
                <VictoryBar data={data} x="quarter" y="earnings" />
            <VictoryAxis dependentAxis tickFormat={(x) => (`$${x / 1000}k`)} />
        </VictoryChart>
        </div >
    );
}

export default Test1;