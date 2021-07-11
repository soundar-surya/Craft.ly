import { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Stepper from './stepper';
import CreateChart from "./createChart";
import DataSource from "./dataSource";

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing(5),
    height: 700,
    boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'
  }
}));

export default function CSSGrid() {
  const classes = useStyles();
  const [name, setName] = useState('Untitled');
  const [step, setStep] = useState(true)
  const [data, setData] = useState([]);

  return (
    <div>
      <Typography variant="subtitle1" gutterBottom>
        {name}
      </Typography>
      <Grid container spacing={5}>
        <Grid item xs={12} md={4} lg={3}>
          <Paper className={classes.paper}><Stepper setStep={setStep} step={step} setName={setName}/></Paper>
        </Grid>
        <Grid item xs={12} md={8} lg={9}>
          <Paper className={classes.paper}>{step ?  <DataSource setName={setName} setData={setData} /> : (data.length == 0 ? <DataSource setName={setName} setData={setData}/> :  <CreateChart data={data}/>)}</Paper>
        </Grid>
      </Grid>
      <Typography variant="subtitle1" gutterBottom className={classes.divider}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={6} style={{textAlign:'center'}}>
            crafted with ❤️ by <span style={{color:'#FF5757'}}>Craft.ly</span>
          </Grid>
          <Grid item xs={12} md={6} lg={6} style={{textAlign:'center'}}>
        &copy; 2021 Craft.ly
          </Grid>
        </Grid>
      </Typography>
    </div>
  );
}











// function Create() {

//   

//   return(
//     <Fragment>
//       <CssBaseline />
//       <Container fixed>
//         <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '80vh', marginTop: '3vh' }}>

//         </Typography>
      
//       </Container>
//     </Fragment>
//   );
// }

// export default Create;



// <button onClick={() => setSourceAvailable(!isSourceAvailable)}>clickme</button><br/>
// {isSourceAvailable ? <CreateChart/> : <DataSource/>}