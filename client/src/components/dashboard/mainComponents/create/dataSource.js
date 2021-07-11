import {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import axios from 'axios';

import WebService from './webServices/webService'

export default function DataSource({setName, setData}) {

  const classes = useStyles();
  const [message, setMessage] = useState();
  let [endpoint, setEndpoint] = useState('');
  
  // fetch data from endpoint
  const fetchData = async () => {
    try{
      const {data: res = []} = await axios.get(endpoint);
      // check whether it's an array or object
      if(Array.isArray(res)){
        setData([...res])
        setMessage('Data has been fetched sucessfully.');
      } else {
        setMessage('Insuffient data');
      }
    } catch(e) {
      setMessage('Someting went wrong.')
    } 
  }

  const onInputChange = e => setName(e.target.value); 
  const OnEndpointInputChange = e => setEndpoint(e.target.value);
  
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
        onChange={onInputChange}
        placeholder="Eg. Sales Analysis"
        label="Title"
        id="outlined-size-normal"
        defaultValue="Untitled"
          variant="outlined"
          />
      </div>
      <div>
        <TextField
        onChange={OnEndpointInputChange}
        placeholder="Eg. https://coviddata/v1/countries/"
          label="Endpoint"
          id="outlined-size-normal"
          // defaultValue=""
          variant="outlined"
          />
       </div> 
        <Button onClick={fetchData} style={{background: '#FF5757', color: 'white'}}>Fetch</Button>
       {message == "Someting went wrong." ? <p style={{color: 'red'}}>{message}</p> : <p style={{color: 'green'}}>{message}</p>}
    </form>
  );
}


// styles

var useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(10),
    },
    input: {
      color: 'red'
    }
  }
}));
