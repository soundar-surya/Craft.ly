import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid';

import Bar from '../charts/bar'
import Pie from '../charts/pie'
import Doughnut from '../charts/doughnut'
import Line from '../charts/line'

const useStyles = makeStyles((theme) => ({
    roundChartsStyle: {
        height:'47vh',
        width:'30vw',
        marginBottom: '8vh'
    }
  }))


function EmbedWidget() {
    const classes  = useStyles()
    const chartTypes = ['Line',  'Bar', 'Pie', 'Doughnut']
    let { chartName } = useParams()
    let state = useSelector(({chartReducer: {arrayOfChartObjects}}) => arrayOfChartObjects)
    let chartObject = state.find(({name}) => name === chartName.replace('_',' '))
    console.log(chartObject)

    const renderContent = () => {
        if(chartObject) {
                if(chartObject.chartType === chartTypes[0]) {
                    return (
                                <Grid item xs={12} sm={12} md={12} lg={6}>
                                    <Line state={chartObject} />
                                </Grid>
                            )
                } else if(chartObject.chartType === chartTypes[1]) {
                return (
                            <Grid item xs={12} sm={12} md={12} lg={6}>
                                <Bar state={chartObject} />
                            </Grid>
                )
                } else if(chartObject.chartType === chartTypes[2]) {
                return (
                            <Grid item className={classes.roundChartsStyle} xs={12} sm={12} md={12} lg={6}>
                                <Pie state={chartObject} />
                             </Grid>
                )
                } else if(chartObject.chartType === chartTypes[3]) {
                return(
                            <Grid item xs={12}  className={classes.roundChartsStyle} sm={12} md={12} lg={6}>
                                <Doughnut state={chartObject} />
                            </Grid>
                ) 
                }
        }
    }

    return(
        <div>
            { 
                   renderContent()
            }
        </div>
    )
}

export default EmbedWidget


