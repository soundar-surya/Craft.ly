import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'

import Chart from './charts/chart'
import PreLoader from './preLoader'
import { Typography } from '@material-ui/core'
import MorningIcon from '../../../assets/clouds-and-sun.png'
import MoonIcon from '../../../assets/moon.png'

const useStyles = makeStyles((theme) => ({
   greetContainer: {
       height: '10vh',
       display: 'flex',
       background: '#f5f5f5',
       borderRadius: '10px',
       boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 50px'
    },
    timeIcon: {
        [theme.breakpoints.down('xs')]: {
            margin: '0.5em 0 0 0',
        },
        margin: '2.1vh 0 0 1vw',
        width: '4em',
        height: '4em'
    },
    greetingText: {
        [theme.breakpoints.down('xs')]: {
            margin: '1.2em 0 0 1rem',
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
    }
  }))

  
function Inventory() {
    let classes = useStyles()
    let state = useSelector(({chartReducer: {arrayOfChartObjects}}) => arrayOfChartObjects)
    let greetings = ['Good Morning', 'Good Afternoon', 'You deserve rest']
    let [currentTime, setCurrentTime] = useState(0)
    let greeting = () => {
        let myDate = new Date()
        let hrs = myDate.getHours()
        if (hrs < 12) {
            setCurrentTime(0)
        }
        else if (hrs >= 12 && hrs <= 17) {
            setCurrentTime(1)
        }
        else if (hrs >= 17 && hrs <= 24) {
            setCurrentTime(2)
        }
    }

    useEffect( () => {
        greeting()
    })

    const renderContent = () => {
        if(state.length == 0) {
            return <div className={classes.preLoader}><PreLoader /></div>
        } else {
            return <Chart />
        }
    }

    return(
        <div>
            <div className={classes.greetContainer}>
                <img src={currentTime <= 1 ? MorningIcon : MoonIcon} className={classes.timeIcon}/>
                <span className={classes.greetingText}>{greetings[currentTime]}, Ino</span>
            </div>
            {renderContent()}
        </div>
    );
}

export default Inventory
