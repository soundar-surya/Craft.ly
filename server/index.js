const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

// app config
const app = express()
app.use(cors({origin: 'http://localhost:3000'}))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// routes
let db = [];
app.post('/create-chart', (req, res) => {
    let {payload} = req.body
    db = [...db, payload]
    console.log(db)
    res.status(200).send(db)
})

app.get('/get-all-charts', (req, res) => {
    console.log(db)
    res.status(200).send(db)
})

app.delete('/delete-chart/:title', (req, res) => {
    let {title} =   req.params
    console.log(typeof title)
    res.send('success')
})


// server config
const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`server listening at ${PORT}`))