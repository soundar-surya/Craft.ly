import { useState, useEffect, Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { connect, useSelector} from 'react-redux'; 
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Input from "@material-ui/core/Input";
import { MenuItem } from "@material-ui/core";
import { FormControl } from "@material-ui/core";
import { Select } from "@material-ui/core";
import { InputLabel } from "@material-ui/core";

import { ADD_CHART_REQUESTED, ADD_USER_REQUESTED } from '../../../../redux/actions'
import Users from "./users"
import Charts from './chartsOfGroup'

function DisplayGroup({selectGroup, addUser, addChart}) {
    const state = useSelector(({chartReducer: {groups}}) => groups)

    let [currentGroup, setCurrentGroup] = useState(state[0])
    const classes = useStyles()
    let [name, setName] = useState('')
    const [open, setOpen] = useState(false)
    const [decider, setDecider] = useState('')
    const names = ["chart", "user"]

    const handleDeciderChange = (event) => {
      setDecider(event.target.value)
    }

    useEffect(() => {
        let x = state.find(({name}) => name.toLowerCase() === selectGroup.toLowerCase());
        if(x) {
            setCurrentGroup(x);
        }
    }, [selectGroup, state])

    const handleNameChange = e => setName(e.target.value)

    const newUser = () => {
        if(name !== '' && (decider === names[0] || decider === names[1]) ) {
  
            let NewUser = {}
            let NewChart = {}
            if(decider === names[0]) {
              NewChart.name = currentGroup.name;
              NewChart.chart = name;
              addChart(NewChart)
            } else if(decider === names[1]) {
              NewUser.name = currentGroup.name;
              NewUser.user = name;
              addUser(NewUser)
            }
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
                <Typography noWrap style={{margin: '5vh 0 0 0'}}>Charts of {currentGroup.name} group</Typography>
                  <Charts  charts={currentGroup.charts} groupName={currentGroup.name}/>
                  <FormControl className={classes.form}>
                  <InputLabel id="demo-mutiple-chip-label">Add new</InputLabel>
                        <Select
                          labelId="demo-mutiple-name-label"
                          id="demo-mutiple-name"
                          value={decider}
                          onChange={handleDeciderChange}
                          color="secondary"
                          input={<Input />}
                        >
                          {names.map((name) => (
                            <MenuItem
                              key={name}
                              value={name}
                            >
                              {name}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    {/* </Typography> */}
                  <div className={classes.inputBox}>
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
                  <Button onClick={newUser} style={{background: '#FF5757', color: 'white', margin: '2vh 0 0 0'}}>ADD {decider === 'user' ? 'USER' : (decider === 'chart' ? 'CHART' : '')}</Button>
                </div>
              <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                  {decider === names[0] ?  'Chart added successfully!' :  'User added successfully!'}
                </Alert>
              </Snackbar>
          </Fragment>
    )
}

const mapDispatchToProps = dispatch => ({
    addUser: user => dispatch({type: ADD_USER_REQUESTED, payload: user}),
    addChart: chart => dispatch({type: ADD_CHART_REQUESTED, payload: chart})
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
    form: {
      width: '10vw',
      margin: '5vh 0 0 0'
    }
  }));
  