import { useState, useEffect, Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { connect, useSelector} from 'react-redux'; 
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import { ADD_USER_REQUESTED } from '../../../../redux/actions'
import Users from "./users"

function DisplayGroup({selectGroup, addUser}) {
    const state = useSelector(({chartReducer: {groups}}) => groups)

    let [currentGroup, setCurrentGroup] = useState(state[0])
    const classes = useStyles();
    let [message, setMessage] = useState('')
    let [name, setName] = useState('')
    const [open, setOpen] = useState(false);


    useEffect(() => {
        let x = state.find(({name}) => name.toLowerCase() === selectGroup.toLowerCase());
        if(x) {
            setCurrentGroup(x);
        }
    }, [selectGroup, state])

    const handleNameChange = e => setName(e.target.value)

    const newUser = () => {
        if(name !== '') {
            let NewUser = {}
            NewUser.name = currentGroup.name;
            NewUser.user = name;
            addUser(NewUser)
            setName('')
            setOpen(true);
        }
    }
        const handleClose = (event, reason) => {
            if (reason === 'clickaway') {
            return;
            }

            setOpen(false);
        };

    return(
            <Fragment>
    <div className={classes.root} noValidate autoComplete="off">
      <Typography noWrap>Users of {currentGroup.name} group</Typography>
      <Users  users={currentGroup.users} groupName={currentGroup.name}/>
      <div className={classes.inputBox}>
      <Typography noWrap>Add new user</Typography>
        <TextField
        onChange={handleNameChange}
        placeholder="Eg. surya"
        label="Name"
        id="outlined-size-normal"
        value={name}
        variant="outlined"
        color="secondary"
          />
      </div> 
        <Button onClick={newUser} style={{background: '#FF5757', color: 'white', margin: '2vh 0 0 0'}}>ADD USER</Button>
    </div>
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          User added successfully!
        </Alert>
      </Snackbar>
    </Fragment>
    )
}

const mapDispatchToProps = dispatch => ({
    addUser: user => dispatch({type: ADD_USER_REQUESTED, payload: user})
})

export default connect(null, mapDispatchToProps)(DisplayGroup)


function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  
// styles
var useStyles = makeStyles((theme) => ({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(2),
      },
      input: {
        color: 'red',
      },
      margin: '3vh 0 0 0'
    },
    inputBox: {
      margin: '5vh 0 0 0'
    },
  }));
  