import { Fragment, useEffect, useState } from 'react'
import { Pie } from 'react-chartjs-2'

import generateRandomColor from './generateRandomColor'

function PieChart({
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
            <Pie data={data} options={options}/>
        </Fragment>
    )
} 

export default PieChart