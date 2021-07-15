import { useState, Fragment } from 'react';
import FormLabel from '@material-ui/core/FormLabel';
import { makeStyles, withStyles  } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { connect } from 'react-redux'
import MuButton from '@material-ui/core/Button'
import KeyboardBackspaceRoundedIcon from '@material-ui/icons/KeyboardBackspaceRounded'
import Grid from '@material-ui/core/Grid'


import { MODIFY_CHART_REQUESTED } from '../../../../redux/actions'

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText('#FF5757'),
    backgroundColor: '#FF5757',
    "&:hover": {
      backgroundColor: '#ed6363'
    }
  }
}))(MuButton)

function Modify({chartObject, modifyChartObject, setPws}) {
    const classes = useStyles();
let [chartType, setChartType] = useState(chartObject.chartType);
let [message, setMessage] = useState('');
let [label, setLabel] = useState(chartObject.label)
let [preferredLength, setPreferredLength] = useState(chartObject.lengthOfTheFields);

const handleChange = event => setChartType(event.target.value)

const handleLength = event => setPreferredLength(event.target.value)

const handleLabel = event => setLabel(event.target.value)

const modifyChart = () => {
    chartObject.chartType = chartType
    chartObject.lengthOfTheFields = preferredLength
    chartObject.label = label
    // console.log(chartObject)
    modifyChartObject(chartObject)
    setMessage('Changes will soon be reflected in the dashboard.')
}

const handleClick = () => setPws('')

    return (
       <Fragment>
         <Grid container  spacing={2} >
              <Grid item style={{display: 'flex', justifyContent: 'flex-start'}} xs={6} sm={6} md={6} lg={6}>
              <ColorButton
                variant='contained'
                className={classes.button}
                startIcon={<KeyboardBackspaceRoundedIcon />}
                onClick={handleClick}
                >
                  Back
              </ColorButton>
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6} key={'component'} style={{display: 'flex', justifyContent: 'flex-end'}}>
                <ColorButton
                  variant='contained'
                  className={classes.button}
                  onClick={modifyChart}
                >
                  Continue
              </ColorButton>
                </Grid>
             </Grid>

             <FormLabel style={{display: 'flex', justifyContent: 'center', margin: '1vh 0 0 0'}} component="legend">Re-craft the chart</FormLabel>
            <div style={{display: 'flex', justifyContent: 'center', margin: '10vh 0 0 0'}}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel color="secondary" id="demo-simple-select-outlined-label">
                  Chart Type
                </InputLabel>
                <Select
                  color="secondary"
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={chartType}
                  onChange={handleChange}
                  label="Chart Type"
                >
                <MenuItem value={"Line"}>Line</MenuItem>
                <MenuItem value={"Bar"}>Bar</MenuItem>
                <MenuItem value={"Pie"}>Pie</MenuItem>
                <MenuItem value={"Doughnut"}>Doughnut</MenuItem>
              </Select>
            </FormControl>
            </div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel color="secondary" id="demo-simple-select-outlined-label">
                  length
                </InputLabel>
                <Select
                  color="secondary"
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={preferredLength}
                  onChange={handleLength}
                  label="records Length"
                >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={15}>15</MenuItem>
              </Select>
            </FormControl>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', margin: '3vh 0 0 0'}}>
              <TextField
                color="secondary"
                onChange={handleLabel}
                placeholder="Eg: Active Cases"
                label="label"
                id="outlined-size-normal"
                variant="outlined"
                value={label}
              />
            </div>
            {message ? <p style={{color: 'green', fontSize:'1rem',display: 'flex', justifyContent: 'center', margin: '5vh 0 0 0'}}>{message}</p> : null}
       </Fragment>
    )
}

const mapDispatchToProps = dispatch => ({
  modifyChartObject: chart => dispatch({type: MODIFY_CHART_REQUESTED, payload: chart})
})

export default connect(null, mapDispatchToProps)(Modify)


// styles
var useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(3),
      minWidth: 225,
      maxWidth: 300,
    },
    selectEmpty: {
      marginTop: theme.spacing(2)
    },
    button: {
      margin: theme.spacing(2),
    },
  }));
