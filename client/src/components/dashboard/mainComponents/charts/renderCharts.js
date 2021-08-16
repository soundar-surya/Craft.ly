import { Fragment } from 'react'
import Grid from '@material-ui/core/Grid';

import Bar from './bar'
import Doughnut from './doughnut'
import Line from './line'
import Pie from './pie'

import Paper from '@material-ui/core/Paper'
import { styled } from '@material-ui/core/styles'

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  borderRadius: '10px',
  boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 50px',
  margin: '1rem 1em 0 1em'
}));

function RenderCharts({state, chartTypes, classes, setPws, setChartObject}) {
    return(
        <Fragment>
            {state.map(({chartType, name}, index) => {
                       if(chartType === chartTypes[0]) {
                           return (
                                        <Grid item xs={12} sm={12} md={12} lg={6} key={name}>
                                            <Item>
                                                <div className={classes.roundChartsStyle}>
                                                    <Line state={state[index]} setPws={setPws} setChartObject={setChartObject} />
                                                </div>
                                            </Item>
                                        </Grid>
                                    )
                       } else if(chartType === chartTypes[1]) {
                        return (
                                    <Grid item  xs={12} sm={12} md={12} lg={6} key={name}>
                                        <Item>
                                            <div className={classes.roundChartsStyle}>
                                                <Bar state={state[index]} setPws={setPws} setChartObject={setChartObject} />
                                            </div>
                                        </Item>
                                    </Grid>
                        )
                       } else if(chartType === chartTypes[2]) {
                        return (
                                    <Grid item  xs={12} sm={12} md={12} lg={6} key={name}>
                                        <Item>
                                            <div className={classes.roundChartsStyle}>
                                                <Pie state={state[index]} setPws={setPws} setChartObject={setChartObject} />
                                            </div>
                                        </Item>
                                    </Grid>
                        )
                       } else if(chartType === chartTypes[3]) {
                        return(
                                    <Grid item xs={12} sm={12} md={12} lg={6} key={name}>
                                       <Item >
                                           <div className={classes.roundChartsStyle}>
                                               <Doughnut state={state[index]} setPws={setPws} setChartObject={setChartObject} />
                                            </div>
                                        </Item>
                                    </Grid>
                        ) 
                    }
                    })}
        </Fragment>
    )
}

export default RenderCharts