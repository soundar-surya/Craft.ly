import { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { useSelector } from 'react-redux';

import Stepper from './stepper';
import CreateChart from "./createChart";
import DataSource from "./dataSource";

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: theme.spacing(3),
  },
  paper1: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing(5),
    height: 700,
    boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'
  },
  paper2: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down('xs')]: {
      height: 380
    },
    height: 700,
    boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'
  }
}));

export default function CreateComponent() {
  let state = useSelector(({chartReducer: {arrayOfChartObjects}}) => arrayOfChartObjects)
  const classes = useStyles();
  const [name, setName] = useState(`Untitled${state.length+1}`);
  const [step, setStep] = useState(true)
  const [data, setData] = useState({});
  const [chartObject, setChartObject] = useState(null);

  return (
    <div>
      <Typography variant="subtitle1" gutterBottom>
        {name}
      </Typography>
      <Grid container spacing={5}>
        <Grid item xs={12} md={4} lg={3}>
          <Paper className={classes.paper2}><Stepper setStep={setStep} step={step} name={name} setName={setName} data={data} chartObject={chartObject} setData={setData} setChartObject={setChartObject}/></Paper>
        </Grid>
        <Grid item xs={12} md={8} lg={9}>
          <Paper className={classes.paper1}>{step ?  <DataSource setName={setName} setData={setData} name={name}/> : (data.length == 0 ? <DataSource setName={setName} setData={setData} name={name}/> :  <CreateChart data={data} setChartObject={setChartObject}/>)}</Paper>
        </Grid>
      </Grid>
    </div>
  );
}



