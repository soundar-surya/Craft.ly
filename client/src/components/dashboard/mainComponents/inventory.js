import { Fragment, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'

import Chart from './charts/chart'
import PreLoader from './preLoader'
import { Box, Typography } from '@material-ui/core'
import MorningIcon from '../../../assets/clouds-and-sun.png'
import MoonIcon from '../../../assets/moon.png'

const useStyles = makeStyles((theme) => ({
   greetContainer: {
        [theme.breakpoints.up('sm')]: {
            height: '7em'
        },
       height: '10vh',
       display: 'flex',
       borderRadius: '10px',
       boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 50px'
    },
    timeIcon: {
        [theme.breakpoints.down('xs')]: {
            margin: '0.5em 0 0 0',
        },
        margin: '2.1vh 0 0 1vw',
        width: '4em',
        height: '4em',
    },
    greetingText: {
        [theme.breakpoints.down('xs')]: {
            margin: '1.4em 0 0 1rem',
            fontSize: '1.2em',
        },
        margin: '1.2em 0 0 1rem',
        fontSize: '1.7em',
        color: '#5a5a61'
    }, 
    preLoader: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '35vh'
    },
    newChart: {
        [theme.breakpoints.down('xs')]: {
            // margin: '1em 0 0 0',
            display: 'none'
        },
        margin: '2.1vh 1vw 0 0',
        width: '4em',
        height: '4em',
    },
    fab: {
        [theme.breakpoints.down('xs')]: {
            width: '3em',
            height: '3em',
        },
        background: '#FF5757',
        color: 'white',
        "&:hover": {
            backgroundColor: "#FF5757"
        }
    },
    name: {
        color: '#FF5757'
    }
  }))

  
function Inventory() {
    let classes = useStyles()
    let state = useSelector(({chartReducer}) => chartReducer)
    // let state = useSelector(({chartReducer: {arrayOfChartObjects}}) => arrayOfChartObjects)
    let greetings = ['Good Morning', 'Good Afternoon', 'Good Evening', 'You deserve rest']
    let [currentTime, setCurrentTime] = useState(0)
    let greeting = () => {
        let myDate = new Date()
        let hrs = myDate.getHours()
        if (hrs < 12) {
            setCurrentTime(0)
        }
        else if (hrs >= 12 && hrs <= 15) {
            setCurrentTime(1)
        }
        else if (hrs > 15 && hrs <= 18) {
            setCurrentTime(1)
        }
        else if (hrs > 18 && hrs <= 24) {
            setCurrentTime(2)
        }
    }

    useEffect( () => {
        greeting()
    })

    const renderContent = () => {
        if(state.loading) {
            return <div className={classes.preLoader}><PreLoader /></div>
        } else if(!state.loading && state.arrayOfChartObjects.length > 0) {
            return <Chart />
        } else {
            return <div className={classes.preLoader}><PreLoader /></div>
        }
    }

    return(
        <div>
            <Box className={classes.greetContainer}>
                <Box>
                    <img src={currentTime <= 1 ? MorningIcon : MoonIcon} className={classes.timeIcon}/>
                </Box>
                <Box flexGrow={1}>
                    <Typography className={classes.greetingText}>{greetings[currentTime]}, <span className={classes.name}>Surya</span></Typography>
                </Box>
                <Box className={classes.newChart}>
                    <Fab className={classes.fab} aria-label="add">
                         <AddIcon/>
                    </Fab>
                </Box>
            </Box>
            {renderContent()}
        </div>
    );
}

export default Inventory
