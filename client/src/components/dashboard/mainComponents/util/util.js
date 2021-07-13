import axios from 'axios'

export const fetchData = async (state) => {

    let newState = []
  try{
    await state.forEach(async chartObj => {
        try{
            const {data} = await axios.get(chartObj.endpoint)
            data.length =  chartObj.lengthOfTheFields
            let newS = trimDataSet(data, chartObj)
            console.log('new State obj', newS)
            newState.push(newS)
        } catch(e) {
            // handle error
        }
        console.log('inside util 2', state)
        return newState
    })

    } catch(e) {
        return []
    }
}

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