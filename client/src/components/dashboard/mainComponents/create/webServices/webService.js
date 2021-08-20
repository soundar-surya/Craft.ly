import {useState, Fragment, useEffect} from 'react'
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

export default function WebServices({setData}) {

  const classes = useStyles()
  const [message, setMessage] = useState()
  const [value, setValue] = useState(1)
  let config = {method: '', url: '', params: {}, headers: {}, data: {}}

  // fetch data from endpoint
  const fetchData = async () => {
    if(config.data !== null && Object.keys(config.data).length > 0) {
      config.data = JSON.parse(config.data)
    }
    console.log(config)

    let parseConfig = {method: config.method, url: config.url}
    if(Object.keys(config.params)[0]) {
      parseConfig.params = config.params
    }
    if(Object.keys(config.headers)[0]) {
      parseConfig.headers = config.headers
    }
    if(config.data !== null && Object.keys(config.data).length > 0) {
      parseConfig.data = config.data
    }
      try{
          const {data: res=[]} = await axios(parseConfig);
          // check whether it's an array or object
          if(Array.isArray(res)){
              setData({config:parseConfig, dataSet: [...res]})
              setMessage('Data retrieved sucessfully.')
            } else {
              console.log(res)
                setMessage('Insuffient data')
            }
        } catch(e) {
            setMessage('Someting went wrong.')
        } 
    }
    
  const handleChange = (event, newValue) => setValue(newValue);
  // const onInputChange = e => {
  //   console.log(e.target.value)
  //   setName(e.target.value)
  // }
  
  return (
    <Fragment>
    <form className={classes.root} noValidate autoComplete="off">
      {/* <div>
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
      </div> */}
      <div class={classes.parentOfTabs}>
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
            value == 0 ? <Soap/> : (value == 1 ? <Rest config={config} /> : <GraphQL config={config}/>)
        }
        <Button onClick={fetchData} style={{background: '#FF5757', color: 'white'}}>Fetch</Button>
          {
            (message === 'Someting went wrong.') ? <Typography className={classes.ErrMessage} noWrap>{message}</Typography> 
            : <Typography className={classes.successMessage} noWrap>{message}</Typography>
          }
    </form>
    <Typography className={classes.note} noWrap>Note: The API should return array of objects.</Typography>
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
    [theme.breakpoints.up('md')]: {
      maxWidth: 700,
      width: '35.5em',
    },
  },
  ErrMessage: {
    color: 'red',
    margin: '3vh 0 0 0',
  },
  successMessage: {
    display: 'flex',
    justifyContent: 'center',
    color: 'green',
    margin: '3vh 0 0 0',
  },
  note: {
    position: 'relative',
    color: '#2b2d38',
    display: 'flex',
    justifyContent: 'center',
    margin: '1vh 0 0 2vw',
    [theme.breakpoints.down('sm')]: {
      fontSize: '3vw'
    },
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
