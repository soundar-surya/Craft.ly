import { Fragment, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import RenderCharts from './renderCharts'
import EditComponent from '../edit/edit'
import ResizeChart from '../resize/resizeChart'
import { useSelector } from 'react-redux'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    roundChartsStyle: {
        height:'47vh',
        width:'30vw'
    }
  }));

function Chart() {
    let state = useSelector(({chartReducer: {arrayOfChartObjects}}) => arrayOfChartObjects)
    const classes = useStyles();
    const chartTypes = ['Line', 'Bar', 'Pie', 'Doughnut']
    const presentWorkingScreens = ['resize', 'edit', 'embed'] 
    let [presentWorkingScreen, setPws] = useState('')
    let [chartObject, setChartObject] = useState(null)
    
    const renderContent = () =>  {
        if(presentWorkingScreen === '') {
            return <RenderCharts 
            state={state} 
            chartTypes={chartTypes} 
            classes={classes}
            setPws={setPws}
            setChartObject={setChartObject}
            />
        } else if (presentWorkingScreen === presentWorkingScreens[0]) {
            return (
                <ResizeChart 
                    chartObject={chartObject}
                    setPws={setPws}
                />
            )
        } else if (presentWorkingScreen === presentWorkingScreens[1]) {
            return (
                <EditComponent />
            )
        } else if (presentWorkingScreen === presentWorkingScreens[2]) {
            return (
                <Fragment>embed component</Fragment>
            )
        }
    }

    return(
        <Fragment>
            <div className={classes.root}>
            <Grid container spacing={2}>
                {renderContent()}
            </Grid>
            </div>
        </Fragment>
    )
}

export default Chart




          