import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { Divider } from "@material-ui/core";
import FindInPageRoundedIcon from "@material-ui/icons/FindInPageRounded";
import NoteAddRoundedIcon from "@material-ui/icons/NoteAddRounded";
import clsx from "clsx";
import { connect, useSelector } from 'react-redux'; 


import { CREATE_CHARTS_REQUESTED } from '../../../../redux/actions';

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: "#e3e6ea",
    zIndex: 1,
    color: "white",
    width: 50,
    height: 50,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center"
  },
  active: {
    background: "#FF5757"
  },
  line: {
    color: "red"
  },
  completed: {
    background: "#FF5757"
  }
});


const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    textAlign: 'left'
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  actionsContainer: {
    marginBottom: theme.spacing(2)
  },
  resetContainer: {
    padding: theme.spacing(3)
  },
  message: {
    color: 'green',
    margin: '2rem 0 0 0 '
  }
}));

function getSteps() {
  return ["Select web service", "Create a chart"];
}

function VerticalStepper({setStep, step, setName, name, setData, data:{dataSet}, setChartObject, chartObject, createChart}) {
  let state = useSelector(({chartReducer: {arrayOfChartObjects}}) => arrayOfChartObjects)
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [message, setMessage] = useState('')
  const steps = getSteps();
  
  const handleNext = () => {
    if(dataSet && dataSet.length > 0 && activeStep !== steps.length - 1) {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    if(step){
      setStep(false);
    }
    }
    if(activeStep === steps.length - 1 && chartObject!=null) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    setStep(true);
  };
  
  const handleReset = () => {
    setActiveStep(0);
    setStep(true);
    setName(`Untitled${state.length+1}`);
    setData({});
    setChartObject(null);
    setMessage('');
  };

  const handlePublish = () => {
    chartObject.name = name;
    createChart(chartObject);
    setMessage('Chart created successfully.');
  }
  
  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
            <StepContent>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    variant="contained"
                    style={{ background: "#e3e6ea" }}
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                    >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    style={{ background: "#FF5757", color: "white" }}
                    onClick={handleNext}
                    className={classes.button}
                    name={activeStep === steps.length - 1 ? "Finish" : "Next"}
                    >
                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      <Divider />
      {activeStep === steps.length && (
        <Paper style={{textAlign:'center'}} square elevation={0} className={classes.resetContainer}>
          <Typography noWrap>
            All steps completed.
          </Typography>
          <Button
            style={{ background: "#FF5757", color: "white" }}
            onClick={handleReset}
            className={classes.button}
            >
            Reset
          </Button>
          <Button
            style={{ background: "#FF5757", color: "white" }}
            onClick={handlePublish}
            className={classes.button}
            >
            Publish
          </Button>
          <Typography className={classes.message} noWrap>{message}</Typography>

        </Paper>
      )}
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  createChart: chart => dispatch({type: CREATE_CHARTS_REQUESTED, payload: chart}),
})

export default connect(null, mapDispatchToProps)(VerticalStepper);






// returns stepper icons
function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <FindInPageRoundedIcon />,
    2: <NoteAddRoundedIcon />
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}
