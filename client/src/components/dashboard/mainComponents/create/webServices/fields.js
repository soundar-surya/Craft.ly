import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  field1: {
    width: "4em",
    minWidth: "3em",
    margin: "3px"
  },
  field2: {
    margin: "3px",
    width: "8em",
    minWidth: "6em"
    // margin: '0.5rem 0 0 1rem'
  },
  input: {
    height: 18
  }
}));

export default function Fields({field, setField}) {
  const classes = useStyles()

  let onInputKeyChange = e => setField(({key, value}) => ({key: e.target.value, value}))
    
  let onInputValueChange = e => setField(({key, value}) => ({key, value: e.target.value}))
  
//   console.log(field)
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        margin="dense"
        value={field.key}
        onChange = {onInputKeyChange}
        InputProps={{ classes: { input: classes.input } }}
        className={classes.field1}
        id="outlined-secondary"
        label="Key"
        variant="outlined"
        color="secondary"
      />
      <TextField
        margin="dense"
        value={field.value}
        onChange={onInputValueChange}
        InputProps={{ classes: { input: classes.input } }}
        className={classes.field2}
        id="outlined-secondary"
        label="value"
        variant="outlined"
        color="secondary"
      />
    </form>
  );
}

