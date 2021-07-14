const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const axios = require('axios')

// app config
const app = express()
app.use(cors({origin: 'http://localhost:3000'}))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// routes
let db = [
    {
      chartType: 'Bar',
      label: 'Cases Per Million',
      lengthOfTheFields: 5,
      xAxisLabelName: 'state',
      yAxisLabelName: 'casesPerOneMillion',
      xAxisLabelNames: [],
      yAxisLabelData: [],
      endpoint: 'https://corona.lmao.ninja/v2/states?sort&yesterday',
      name: 'Test 1'
    },
        {
          "chartType": "Bar",
          "label": "Cases Per Million",
          "lengthOfTheFields": 5,
          "xAxisLabelName": "state",
          "yAxisLabelName": "casesPerOneMillion",
          "xAxisLabelNames": [
            "California",
            "Texas",
            "Florida",
            "New York",
            "Illinois"
          ],
          "yAxisLabelData": [
            97323,
            104274,
            112768,
            112124,
            110297
          ],
          "endpoint": "https://corona.lmao.ninja/v2/",
          "name": "Test 1"
        }
  ];
app.post('/create-chart', (req, res) => {
    let {payload} = req.body
    db = [...db, payload]
    console.log(db)
    res.status(200).send(db)
})

app.get('/get-all-charts', async (req, res) => {
    // console.log(req)
    let data = await loadData(db) 
    // console.log('data: ', data)
    res.status(200).send(data)
})

app.delete('/delete-chart/:title', (req, res) => {
    let {title} =   req.params
    console.log(typeof title)
    res.send('success')
})


// server config
const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`server listening at ${PORT}`))


async function loadData(stateArray, cb) {
    let newState = []
    try{
       for await (let record of stateArray) {
           let {endpoint, lengthOfTheFields, xAxisLabelName, yAxisLabelName} = record
           let res
           try{
               let {data} = await axios.get(endpoint)
               res = data
           } catch(e) {
               // invalid api
               console.log(e.message)
                res = []
           }
           if(res.length > 0) {
               res.length = lengthOfTheFields
               record.xAxisLabelNames = mapData(xAxisLabelName, record.xAxisLabelName, res)
               record.yAxisLabelData = mapData(yAxisLabelName, record.yAxisLabelData, res)
               newState.push(record)
           } 
       }
       return newState
    } catch(e) {
        console.log(e)
        return []
    }
}

function mapData(match, target, source) {
    console.log(match)
    return source.map(record => {
        let res = record[match] ? record[match] : []
        return res
    })
}
