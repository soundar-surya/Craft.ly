import { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Avatar, Divider, Typography } from "@material-ui/core"
import VideoCallRoundedIcon from '@material-ui/icons/VideoCallRounded';
import PhoneRoundedIcon from '@material-ui/icons/PhoneRounded'
import MoreVertRoundedIcon from '@material-ui/icons/MoreVertRounded'
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button";
import faker from 'faker'

export default function ChatBox() {
    
    const classes = useStyles()
    let [msg, updateMsg] = useState('')
    let [myMessage, updateMyMessage] = useState([])
    
    let renderContent = () => {
        if(myMessage.length === 0) {
            return (
            <div className={classes.incomingMessage}>
                        <Typography className={classes.message} style={{display: 'flex'}}>
                        <span>
                            <Avatar alt="Kakashi" src={faker.image.people()} />
                        </span><span style={{margin: '0.5rem 0 0 0.5rem'}}>Hey There!</span></Typography>
            </div>
            )

        } else {
            return (
                <div>
                    <div className={classes.incomingMessage}>
                    <Typography className={classes.message} style={{display: 'flex'}}>
                        <span>
                            <Avatar alt="Kakashi" src={faker.image.people()} />
                        </span><span style={{margin: '0.5rem 0 0 0.5rem'}}>Hey There!</span></Typography>
                    </div>
                    <div>{myMessage.map(msg => <Typography className={classes.outgoingMessage}><span style={{margin: '0.5rem 0.5rem 0 0'}}>{msg}</span><span>
                        <Avatar alt="Surya" src="https://avatars.githubusercontent.com/u/67203625?v=4" />
                        </span></Typography>)}
                    </div>
                </div>
            )
        }
    }

    let onInputChange = e => updateMsg(e.target.value)
    let onInputClick = () => {
        updateMyMessage(prev => [...prev, msg])
        updateMsg('')   
    }
    

    return(
        <div>
            <div className={classes.topbar}>
                <div className={classes.options}>
                    <Typography variant="h6" className={classes.currChat}>Kakashi Hatake</Typography>
                </div>
                <div>
                    <PhoneRoundedIcon  className={classes.phone} />
                    <VideoCallRoundedIcon className={classes.video} />
                    <MoreVertRoundedIcon className={classes.settings} />
                </div>
            </div>
            <Divider />
            <div>
                <div className={classes.chats}>{renderContent()}</div>
                <div className={classes.input}>
                <TextField
                    id="outlined-basic"
                    variant="outlined"
                    color="secondary"
                    className={classes.textField}
                    value={msg}
                    onChange={onInputChange}
                    placeholder="Type here..."
                />
                        <Button onClick={onInputClick} style={{background: '#FF5757', color: 'white', margin: '0 0 0 1vw', width: '5rem'}}>Send</Button>
                </div>
            </div>
        </div>
    )
}

// styles
var useStyles = makeStyles((theme) => ({
    topbar: {
        [theme.breakpoints.down('xs')]: {
            height: '3.7rem'
          },
        height: '5rem',
        background: '#f5f5f5',
        borderTopLeftRadius: '10px',
        display: 'flex'
    },
    options: {
        display: 'flex',
        flexGrow: 1
    },
    currChat: {
        margin: '1.4rem 0 0 2vw'
    },
    video: {
        margin : '1.5rem 2rem 0 2rem',
        fontSize: '2.2rem'
    },
    phone: {
        margin: '0.5rem 1rem 0 2rem',
        fontSize: '2.2rem'
    },
    settings: {
        fontSize: '2.2rem',
        margin: '1rem 0 0 0'
    },
    input: {
        margin: '1vh 0 0 8vw',
        display: 'flex',
    },
    textField: {
        width: '45vw'
    },
    chats: {
        height: '64vh',
        margin: '2rem 10.5vw 0 7vw'
    },
    message: {
        padding: '1rem 0 1rem 1rem',
        margin: '1rem 0 0 0.3rem',
        width: '10vw',
        borderRadius: '10px',
        boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
    },
    incomingMessage: {
        height: '1.7rem',
        margin: '0 0 5rem 0'
    },
    outgoingMessage: {
        display: 'flex',
        justifyContent: 'flex-end',
        borderRadius: '10px',
        boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
        margin: '3rem 0 0 40vw',
        padding: '1rem 1rem 1rem 1rem',
        // width: '10vw'
    }
  }));