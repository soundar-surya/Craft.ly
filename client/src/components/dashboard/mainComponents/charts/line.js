import { Fragment, useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'

import generateRandomColor from './generateRandomColor'

function LineChart({
    state: {
    chartType, 
    label, 
    lengthOfTheFields, 
    name,  
    xAxisLabelName,
    xAxisLabelNames,
    yAxisLabelData,
    yAxisLabelName}}) {
    
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

    return(
        <Fragment>
            <h6>{name}</h6>
            <Line data={data} options={options}/>
        </Fragment>
    )
} 

export default LineChart