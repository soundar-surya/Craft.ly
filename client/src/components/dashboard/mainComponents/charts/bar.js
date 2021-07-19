import { Fragment, useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import ChartSettings from './chartSettings'
import generateRandomColor from './generateRandomColor'

function BarChart({
    state: {
    chartType, 
    label, 
    lengthOfTheFields, 
    name,  
    xAxisLabelName,
    xAxisLabelNames,
    yAxisLabelData,
    yAxisLabelName
  },setPws, setChartObject}) {

    let [colors, setColors] = useState([])
    useEffect(() => setColors(generateRandomColor(lengthOfTheFields)), [])

    const data = {
        labels: xAxisLabelNames,
        datasets: [
          {
            label: label,
            data: yAxisLabelData,
            backgroundColor: colors,
            borderColor: colors,
            borderWidth: 1,
          },
        ],
      }

    const options = {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
    }
console.log('______________________________________-');
    return(
        <Fragment>
             <Grid container spacing={2} >
              <Grid item style={{display: 'flex', justifyContent: 'flex-start'}} xs={6} sm={6} md={6} lg={6} key={name}>
                <Typography variant='subtitle1'>{name}</Typography>
              </Grid>
              <Grid item xs={6} sm={6} md={6} lg={6} key={'component'} style={{display: 'flex', justifyContent: 'flex-end'}}>
              {(setChartObject != null && setPws != null)?<ChartSettings 
                  setPws={setPws} 
                  setChartObject={setChartObject} 
                  chartObject={{chartType, label, lengthOfTheFields, name, xAxisLabelName, xAxisLabelNames, yAxisLabelData, yAxisLabelName}}
                  /> : null}
              </Grid>
             </Grid>
            <Bar data={data} options={options}/>
        </Fragment>
    )
} 

export default BarChart