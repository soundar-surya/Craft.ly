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
        height:'90vh',
        width:'100vw',
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
                                <div className={classes.roundChartsStyle}>
                                    <Line state={chartObject} />
                                </div>
                            )
                } else if(chartObject.chartType === chartTypes[1]) {
                return (
                            <div className={classes.roundChartsStyle}>
                                <Bar state={chartObject} />
                            </div>
                )
                } else if(chartObject.chartType === chartTypes[2]) {
                return (
                            <div className={classes.roundChartsStyle}>
                                <Pie state={chartObject} />
                             </div>
                )
                } else if(chartObject.chartType === chartTypes[3]) {
                return(
                            <div className={classes.roundChartsStyle}>
                                <Doughnut state={chartObject} />
                            </div>
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


