import { useState } from 'react';
import FormLabel from '@material-ui/core/FormLabel';
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

function ChartCustomization({dataFields, dataSet, setChartObject}) {

  const classes = useStyles();

    let chartObject = {
                              chartType: '', 
                              label: '',
                              lengthOfTheFields: 0, 
                              xAxisLabelName: '',
                              yAxisLabelName: '',
                              xAxisLabelNames: [],
                              yAxisLabelData: [],
                             }
    let totalLength = dataSet.length;
    let [chartType, setChartType] = useState('Bar');
    let [message, setMessage] = useState('');
    let [label, setLabel] = useState('')
    let [preferredLength, setPreferredLength] = useState(5);
    let [xAxisLabel, setXAxisLabel] = useState(dataFields[0]);
    let [yAxisLabel, setYAxisLabel] = useState(dataFields[1]);

    const handleChange = event => setChartType(event.target.value)

    const handleLength = event => setPreferredLength(event.target.value)
    
    const handleXAxisLabel = event => setXAxisLabel(event.target.value)

    const handleYAxisLabel = event => setYAxisLabel(event.target.value)

    const handleLabel = event => setLabel(event.target.value)

    const createChartObject = () => {
      chartObject.chartType = chartType;
      chartObject.lengthOfTheFields =  preferredLength;
      chartObject.xAxisLabelName = xAxisLabel;
      chartObject.yAxisLabelName = yAxisLabel;
      chartObject.label = label

      // trim dataSet and filter the field names
      dataSet.length = preferredLength;
      dataSet.forEach(record => {
        let fields = Object.keys(record);
        fields.forEach(field => {
          if(field == xAxisLabel) {
            chartObject.xAxisLabelNames = [...chartObject.xAxisLabelNames, record[field]]
          } else if(field == yAxisLabel) {
            chartObject.yAxisLabelData= [...chartObject.yAxisLabelData, record[field]]
          }
        })
      })

      setChartObject(chartObject);
      //acknowledge user
      setMessage('Customization completed. click Finish to proceed further.');
    }


    return(
        <div>
            <FormLabel style={{color: '#323235'}} component="legend">Customize the chart</FormLabel>
            <div>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">
                  Chart Type
                </InputLabel>
                <Select
                  style={{ borderColor: "red" }}
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
            <div>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">
                  length
                </InputLabel>
                <Select
                  style={{ borderColor: "red" }}
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
            <div>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">
                  X-Axis
                </InputLabel>
                <Select
                  style={{ borderColor: "red" }}
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={xAxisLabel}
                  onChange={handleXAxisLabel}
                  label="X-Axis"
                >
                {dataFields.map(field => {
                  return (
                    <MenuItem key={field} value={field}>{field}</MenuItem>
                  );
                })}
              </Select>
            </FormControl>
            </div>
            <div>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">
                  Y-Axis
                </InputLabel>
                <Select
                  style={{ borderColor: "red" }}
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={yAxisLabel}
                  onChange={handleYAxisLabel}
                  label="Y-Axis"
                >
                {dataFields.map(field => {
                  return (
                    <MenuItem key={field} value={field}>{field}</MenuItem>
                  );
                })}
              </Select>
            </FormControl>
            </div>
            <div>
              <TextField
                onChange={handleLabel}
                placeholder="Eg: Active Cases"
                label="label"
                id="outlined-size-normal"
                variant="outlined"
              />
            </div>
            <Button onClick={createChartObject} style={{background: '#FF5757', color: 'white'}}>Continue</Button>
              {message ? <p style={{color: 'green', fontSize:'1rem'}}>{message}</p> : null}
        </div>
    );
}


export default ChartCustomization;


// styles
var useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
    maxWidth: 500
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));