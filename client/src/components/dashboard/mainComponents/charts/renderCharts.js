import { Fragment } from 'react'
import Grid from '@material-ui/core/Grid';

import Bar from './bar'
import Doughnut from './doughnut'
import Line from './line'
import Pie from './pie'

function RenderCharts({state, chartTypes, classes, setPws, setChartObject}) {
    return(
        <Fragment>
            {state.map(({chartType, name}, index) => {
                       if(chartType === chartTypes[0]) {
                           return (
                                        <Grid item xs={12} sm={12} md={12} lg={6} key={name}>
                                            <Line state={state[index]} setPws={setPws} setChartObject={setChartObject} />
                                        </Grid>
                                    )
                       } else if(chartType === chartTypes[1]) {
                        return (
                                    <Grid item xs={12} sm={12} md={12} lg={6} key={name}>
                                        <Bar state={state[index]} setPws={setPws} setChartObject={setChartObject} />
                                    </Grid>
                        )
                       } else if(chartType === chartTypes[2]) {
                        return (
                                    <Grid item className={classes.roundChartsStyle} xs={12} sm={12} md={12} lg={6} key={name}>
                                        <Pie state={state[index]} setPws={setPws} setChartObject={setChartObject} />
                                    </Grid>
                        )
                       } else if(chartType === chartTypes[3]) {
                        return(
                                    <Grid item xs={12}  className={classes.roundChartsStyle} sm={12} md={12} lg={6} key={name}>
                                        <Doughnut state={state[index]} setPws={setPws} setChartObject={setChartObject} />
                                    </Grid>
                        ) 
                    }
                    })}
        </Fragment>
    )
}

export default RenderCharts