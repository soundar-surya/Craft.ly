import {useState, Fragment} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import axios from 'axios'

import Rest from './rest'
import Soap from './soap'
import GraphQL from './graphQl'

export default function WebServices({name, setName, setData}) {

  const classes = useStyles()
  const [message, setMessage] = useState()
  const [value, setValue] = useState(1)
  
  let [endpoint, setEndpoint] = useState('') //https://corona.lmao.ninja/v2/states?sort&yesterday
  
  // fetch data from endpoint
  const fetchData = async () => {
      try{
          const {data: res=[]} = await axios.get(endpoint);
          console.log('check', endpoint)
          // check whether it's an array or object
          if(Array.isArray(res)){
              setData({endpoint, dataSet: [...res]})
              setMessage('Data retrieved sucessfully.')
            } else {
                setMessage('Insuffient data')
            }
        } catch(e) {
            setMessage('Someting went wrong.')
        } 
    }
    
  const handleChange = (event, newValue) => setValue(newValue);
  const onInputChange = e => setName(e.target.value)
  const OnEndpointInputChange = e => setEndpoint(e.target.value)
  
  return (
    <Fragment>
    <form className={classes.root} noValidate autoComplete="off">
      <div>
      <Typography noWrap variant='h6'>Preliminary step</Typography>
        <TextField
        className={classes.title}
        onChange={onInputChange}
        placeholder="Eg. Sales Analysis"
        label="Title"
        id="outlined-size-normal"
        value={name}
        variant="outlined"
        color="secondary"
          />
      </div>
      <div class={classes.parentOfTabs}>
        {/* <TextField
        onChange={OnEndpointInputChange}
        placeholder="Eg. https://coviddata/v1/countries/"
          label="Endpoint"
          id="outlined-size-normal"
          variant="outlined"
          value={endpoint}
          color="secondary"
          /> */}

        <Paper className={classes.tabs}>
        <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            indicatorColor="secondary"
            textColor="secondary"
            aria-label="Web Services Tabs"
        >
            <Tab label="SOAP" />
            <Tab label="REST" />
            <Tab label="GRAPHQL" />
        </Tabs>
        </Paper>
       </div> 
        {
            value == 0 ? <Soap/> : (value == 1 ? <Rest/> : <GraphQL/>)
        }
        {/* <Button onClick={fetchData} style={{background: '#FF5757', color: 'white'}}>Fetch</Button> */}
          {
            (message === 'Someting went wrong.') ? <Typography className={classes.ErrMessage} noWrap>{message}</Typography> 
            : <Typography className={classes.successMessage} noWrap>{message}</Typography>
          }
    </form>
    {/* <Typography className={classes.note} noWrap>Note: The API should return array of objects.</Typography> */}
      </Fragment>
  )
}


// styles

var useStyles = makeStyles((theme) => ({
  root: {
    input: {
      color: 'red'
    }
  },
  title: {
    margin: theme.spacing(4),
    width: '26vw'
  },
  ErrMessage: {
    color: 'red',
    margin: '3vh 0 0 0'
  },
  successMessage: {
    color: 'green',
    margin: '3vh 0 0 0'
  },
  note: {
    color: '#2b2d38',
    display: 'flex',
    justifyContent: 'center',
    margin: '15vh 0 0 2vw'
  },
  tabs: {
    flexGrow: 1,
    maxWidth: 500,
    boxShadow: 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px'
  },
  parentOfTabs: {
      display: 'flex', 
      justifyContent: 'center',
      margin: '0 0 3.5vh 0'
    }
}))
