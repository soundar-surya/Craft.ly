import { Fragment } from 'react';
import {useSelector} from 'react-redux'; 
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import EqualizerRoundedIcon from '@material-ui/icons/EqualizerRounded';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
    margin: '2vh 0 02vh 0',
  },
  iconColor: {
    color: 'white',
  },
  chipColor: {
    color: 'white', 
    background: '#FF5757', 
    border: 'none'
  }
}));

export default function Users({groupName}) {
  const state = useSelector(({chartReducer: {groups}}) => groups)
  const classes = useStyles();
  let {charts} = state.find(({name}) => name === groupName)
  
const renderContent = () => {
  if(charts) {
    return charts.map(chart => {
        return(
            <Fragment key={chart}>
                <Chip
                    className={classes.chipColor}
                    icon={<EqualizerRoundedIcon className={classes.iconColor}/>}
                    label={chart}
                    variant="outlined"
                />
            </Fragment>
        )
    })
  }
    
}

  return (
    <div className={classes.root}>
        {renderContent()}
    </div>
  );
}
