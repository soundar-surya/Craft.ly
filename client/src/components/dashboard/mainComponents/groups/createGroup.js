import { useState, Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { connect, useSelector } from 'react-redux'; 


import { CREATE_GROUP_REQUESTED } from '../../../../redux/actions';

function CreateGroup({setPrimary, createGroup}) {
  const state = useSelector(({chartReducer: {groups}}) => groups)
  const classes = useStyles();
  const [name, setName] = useState(`Untitled ${state.length+1}`);
  const [description, setDescription] = useState(`${name} chart group`)

  const handleSubmit = () => {
        createGroup({name, description})
        setPrimary(true)
  }

  const handleNameChange = e => setName(e.target.value)
  const handleDescriptionChange = e => setDescription(e.target.value)

  return (
    <Fragment>
    <form className={classes.root} noValidate autoComplete="off">
      <Typography noWrap variant='h6'>New group</Typography>
      <div className={classes.inputBox}>
        <TextField
        
        onChange={handleNameChange}
        placeholder="Eg. Sales Analysis group"
        label="Name"
        id="outlined-size-normal"
        value={name}
        variant="outlined"
        color="secondary"
          />
      </div>
      <div>
        <TextField
        onChange={handleDescriptionChange}
        placeholder="Eg. Sales Analysis chart group"
          label="Description"
          id="outlined-size-normal"
          variant="outlined"
          value={description}
          color="secondary"
          />
       </div> 
        <Button onClick={handleSubmit} style={{background: '#FF5757', color: 'white', margin: '2vh 0 0 0'}}>Create</Button>
    </form>
    </Fragment>
  );
}

const mapDispatchToProps = dispatch => ({
    createGroup: group => dispatch({type: CREATE_GROUP_REQUESTED, payload: group})
})

export default connect(null, mapDispatchToProps)(CreateGroup);

// styles

var useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(4),
    },
    input: {
      color: 'red',
    },
    margin: '5vh 0 0 0'
  },
  inputBox: {
    margin: '5vh 0 0 0'
  }
}));
