import { Fragment, useEffect, useState } from 'react'
import { Doughnut } from 'react-chartjs-2'

import generateRandomColor from './generateRandomColor'

function DoughnutChart({
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
        responsive: true,
        maintainAspectRatio: false,
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
            <Doughnut data={data} options={options}/>
        </Fragment>
    )
} 

export default DoughnutChart