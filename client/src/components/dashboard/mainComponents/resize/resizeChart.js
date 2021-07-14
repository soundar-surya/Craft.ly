import Button from '@material-ui/core/Button'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import KeyboardBackspaceRoundedIcon from '@material-ui/icons/KeyboardBackspaceRounded'
import Grid from '@material-ui/core/Grid';

import BarChart from '../charts/bar'
import DoughnutChart from '../charts/doughnut'
import LineChart from '../charts/line'
import PieChart from '../charts/pie'

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
      background: 'green'
    },
}))

const ColorButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText('#FF5757'),
      backgroundColor: '#FF5757',
      "&:hover": {
        backgroundColor: '#ed6363'
      }
    }
  }))(Button)

function ResizeChart({chartObject, setPws}) {
    const classes = useStyles()
    const chartTypes = ['Bar', 'Doughnut', 'Line', 'Pie']
    const handleClick = () => setPws('')

    const renderContent = () => {
      if(chartObject.chartType === chartTypes[0]) {
        return <div style={{marginLeft: '10vw', width: '70vw', height: '70vh'}}><BarChart  state={chartObject} setChartObject={null} setPws={null}/></div>
      } else if(chartObject.chartType === chartTypes[1]) {
        return <div style={{marginLeft: '10vw', width: '70vw', height: '70vh'}}><DoughnutChart  state={chartObject} setChartObject={null} setPws={null}/></div>
      } else if(chartObject.chartType === chartTypes[2]) {
        return <div style={{marginLeft: '10vw', width: '70vw', height: '70vh'}}><LineChart  state={chartObject} setChartObject={null} setPws={null}/></div>
      } else if(chartObject.chartType === chartTypes[3]) {
        return <div style={{marginLeft: '10vw', width: '70vw', height: '70vh'}}><PieChart  state={chartObject} setChartObject={null} setPws={null}/></div>
      }
    }
    
    return (
        <div>
            <ColorButton
                variant='contained'
                className={classes.button}
                startIcon={<KeyboardBackspaceRoundedIcon />}
                onClick={handleClick}
            >
                Back
            </ColorButton>
            <Grid container spacing={1}>
            <Grid item xs={12} sm={12} md={12} lg={12} key={'chart'}>
            {renderContent()}
            </Grid>
            </Grid> 
        </div>
    )
}

export default ResizeChart
