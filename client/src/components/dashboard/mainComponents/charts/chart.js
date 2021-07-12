import { useState, Fragment } from 'react'
import { useSelector } from 'react-redux'

import Bar from './bar'
import Doughnut from './doughnut'
import Line from './line'
import Pie from './pie'

function Chart() {
    const chartTypes = ['Line', 'Bar', 'Pie', 'Doughnut']
    const state = useSelector(({chartReducer: {arrayOfChartObjects}}) => arrayOfChartObjects);
    // console.log(state)
    const renderContent = () => {
            return (
                <Fragment>
                    {state.map(({chartType, name}, index) => {
                       if(chartType === chartTypes[0]) {
                           return (
                                    <div key={name} style={{width: 800}}>
                                        <Line state={state[index]}/>
                                    </div>)
                       } else if(chartType === chartTypes[1]) {
                        return (
                                    <div key={name} style={{width: 800}}>
                                        <Bar state={state[index]}/>
                                    </div>
                        )
                       } else if(chartType === chartTypes[2]) {
                        return (
                                    <div key={name} style={{width: 800}}>
                                        <Pie state={state[index]} />
                                    </div>
                        )
                       } else if(chartType === chartTypes[3]) {
                        return(
                                    <div key={name} style={{width: 800}}>
                                        <Doughnut state={state[index]} />
                                    </div>
                        ) 
                    }
                    })}
                </Fragment>
            )
    }

    return(
        <Fragment>
            {renderContent()}
        </Fragment>
    )
}

export default Chart