import axios from 'axios'

import { fetchData } from '../../components/dashboard/mainComponents/util/util'

const url = 'http://localhost:5000'

export const createChart = async payload => {
    try{
        const {data} = await axios.post(`${url}/create-chart`, {payload})
        return data
    } catch(e) {
        console.log(e)
        return []
    }
}

export const getAllCharts = async () => {
    try{
        const { data: res } = await axios.get(`${url}/get-all-charts`)
        try{
            await res.forEach(async chartObj => {
                try{
                    const {data} = await axios.get(chartObj.endpoint)
                    data.length =  chartObj.lengthOfTheFields
                    trimDataSet(data, chartObj)
                } catch(e) {
                    // handle error
                }
            })
            return res
        
            } catch(e) {
                return []
            }
    } catch(e) {
        console.log(e)
        return []
    }
}

//

export const trimDataSet = (dataSet, source) => {
    let {xAxisLabelName, yAxisLabelName} = source
    source.xAxisLabelNames.length = 0
    source.yAxisLabelData.length = 0
    dataSet.forEach(record => {
          let fields = Object.keys(record);
          fields.forEach(field => {
              if(field == xAxisLabelName) {
              source.xAxisLabelNames = [...source.xAxisLabelNames, record[field]]
            } else if(field == yAxisLabelName) {
                source.yAxisLabelData= [...source.yAxisLabelData, record[field]]
            }
          })
        })

        return source
}




//

export const modifyChart = async payload => {
    try{
        const {data} = await axios.put(`${url}/modify-chart`, {payload})
        return data
    } catch(e) {
        console.log(e)
        return []
    }
}

export const deleteChart = async title => {
    try{
        const {data} = await axios.delete(`${url}/delete-chart/${title}`)
        return data
    } catch(e) {
        console.log(e)
        return []
    }
}

export const updateState = async payload => {
    try{
        const data =  await fetchData(payload)
        console.log('updateStateFn: ', data)
        return data
    } catch(e) {
        console.log(e)
        return []
    }
}