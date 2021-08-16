import { Fragment, useState } from 'react'
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box';

import RenderCharts from './renderCharts'
import ResizeChart from '../resize/resizeChart'
import EditComponent from '../edit/edit'

import Paper from "@material-ui/core/Paper";
import { styled } from "@material-ui/core/styles";

const Item = styled(Paper)(({ theme }) => ({
  // ...theme.typography.body2,
  padding: theme.spacing(5),
  margin: '1rem 1rem 0 1rem'
}));

const useStyles = makeStyles((theme) => ({
    root: {
        // display: 'flex',
    //   flexGrow: 1,
    margin: '1em 0 1em 0'
    //   margin: theme.spacing(2),
    },
    roundChartsStyle: {
        height: '45vh',
        marginBottom: '8vh',
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
                <EditComponent chartObject={chartObject} setPws={setPws}/>
            )
        } else if (presentWorkingScreen === presentWorkingScreens[2]) {
            return (
                <Fragment>embed component</Fragment>
            )
        }
    }

    return(
            // <div className={classes.root}>
            // <Grid container spacing={1}>
            //     {renderContent()}
            // </Grid>
            // </div>
            <Box sx={{ width: '100%'}} className={classes.root}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 5 }}>
              {/* <Grid item xs={12} sm={12} md={6} lg={6}>
              <Item>3</Item>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
              <Item>3</Item>
              </Grid> */}
          {renderContent()}

            </Grid>
           </Box>
    )
}

export default Chart




          