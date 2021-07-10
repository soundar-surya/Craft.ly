import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import FindInPageRoundedIcon from "@material-ui/icons/FindInPageRounded";
import NoteAddRoundedIcon from "@material-ui/icons/NoteAddRounded";
import clsx from "clsx";

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

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%"
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
  }
}));

function getSteps() {
  return ["Select web service", "Create a chart"];
}


export default function VerticalLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
            <StepContent>
              {/* <Typography style={{width:'4rem'}}>{getStepContent(index)}</Typography> */}
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
                  >
                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography style={{ color: "green" }}>
            All steps completed.
          </Typography>
          <Button
            style={{ background: "#FF5757", color: "white" }}
            onClick={handleReset}
            className={classes.button}
          >
            Reset
          </Button>
        </Paper>
      )}
    </div>
  );
}
