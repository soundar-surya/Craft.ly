import { useState, useEffect, Fragment } from "react"
import { makeStyles } from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}
  
const useStyles = makeStyles((theme) => ({
    root: {
        margin: '10vh 0 0 0'
    },
    button: {
        background: '#FF5757',
        color: 'white',
        margin: '2vh 0 0 0',
        "&:hover": {
            backgroundColor: "#FF5757"
        }
    },
    errMsg: {
        color: 'red',
        margin: '2vh 0 0 0'
    }
  }))

  
export default function NewItem({type='', add, validItems='', groupName=''}) {
    const classes = useStyles()
    let [name, setName] = useState('')
    const [open, setOpen] = useState(false)
    const [errMsg, setErrMsg] = useState(false)
    
    const handleNameChange = e => setName(e.target.value)
    const onInputClick = e => {
        let res = validItems().find(match => (match === name))
        if(!res) {
            setErrMsg(true)
        }
        else {
            add({name: groupName, [`${type}`]: name})
            setErrMsg(false)
            setOpen(true)
        }
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        return
        }
        setOpen(false)
    }

    return (
        <div className={classes.root}>
            <TextField
                onChange={handleNameChange}
                placeholder="Eg. surya"
                label="Name"
                id="outlined-size-normal"
                value={name}
                variant="outlined"
                color="secondary"
            />
            <div>
                <Button 
                    className={classes.button}
                    onClick={onInputClick}
                >
                    ADD {[`${type}`]}
                </Button>
                <Typography className={classes.errMsg} >{errMsg ? `${type} not found` : null}</Typography>
                <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success">
                        {`${type} added successfully`}
                    </Alert>
                </Snackbar>
            </div>
        </div> 
    )
}
