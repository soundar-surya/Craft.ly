import { Fragment, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import {useSelector} from 'react-redux'; 

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
    margin: '4vh 5vw 0 5vw',
  }
}));

export default function Users({groupName}) {
  const state = useSelector(({chartReducer: {groups}}) => groups)
  const classes = useStyles();
  let {users} = state.find(({name}) => name === groupName)

const renderContent = () => {
  
    return users.map(user => {
        return(
            <Fragment>
                <Chip
                    icon={<FaceIcon />}
                    label={user}
                    variant="outlined"
                />
            </Fragment>
        )
    })
}

  return (
    <div className={classes.root}>
        {renderContent()}
    </div>
  );
}
