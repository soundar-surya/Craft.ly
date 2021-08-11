import {useState, Fragment, useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Paper from '@material-ui/core/Paper'
import axios from 'axios';

import OptionTabs from './restApiOptions';

export default function Rest({config}) {

  const methods = ['get', 'post', 'put', 'delete']
  const classes = useStyles();
  let [method, setMethod] = useState(methods[0]);
  let [url, setUrl] = useState('https://corona.lmao.ninja/v2/states?sort&yesterday')
  let [headers, setHeaders] = useState(null)
  let [params, setParams] = useState(null)
  let [restApiData, setRestApiData] = useState(null)

  const onMethodChange = e => setMethod(e.target.value)
  const OnEndpointInputChange = e => setUrl(e.target.value)

  useEffect(() => {
    config.method = method
    config.url = url
    config.headers = headers
    config.params = params
    config.data = restApiData
  }, [method, url, headers, params, restApiData])

  return (
    <div className={classes.root}>
      <div className={classes.endpoint}>    
        <FormControl variant="outlined" color="secondary" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">Method</InputLabel>
                <Select
                className={classes.methodSelectField}
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={method}
                onChange={onMethodChange}
                label="Method"
                >
                <MenuItem value={methods[0]}>GET</MenuItem>
                <MenuItem value={methods[1]}>POST</MenuItem>
                <MenuItem value={methods[2]}>PUT</MenuItem>
                <MenuItem value={methods[3]}>DELETE</MenuItem>
                </Select>
        </FormControl>
        <TextField
        className={classes.urlTextField}
            onChange={OnEndpointInputChange}
            placeholder="Enter request URL"
            label="URL"
            id="outlined-size-normal"
            variant="outlined"
            value={url}
            color="secondary"
          />
        </div>
        <div className={classes.optionTabs}><OptionTabs setParams={setParams} setHeaders={setHeaders} setData={setRestApiData}/></div>
    </div>
  );
}


// styles

var useStyles = makeStyles((theme) => ({
  root: { 
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
  webService: {
      display: 'flex',
      justifyContent: 'center',
  },
  formControl: {
    minWidth: 120,
  },
  endpoint: {
    display: 'flex',
    justifyContent: 'center',
    margin: '0 0 3vh 0',
  },
  optionTabs: {
    display: 'flex',
    justifyContent: 'center',
    margin: '0 0 3vh 0'
  },
  methodSelectField: {
    width: 115,
    flexGrow: 1,
    maxWidth: 200,
  },
  urlTextField: {
    flexGrow: 1,
    maxWidth: 380,
    width: '20vw',
  }
}));
