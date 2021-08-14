import {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper'

import { connect, useSelector} from 'react-redux'; 

import { ADD_CHART_REQUESTED, ADD_USER_REQUESTED } from '../../../../redux/actions'
import Charts from './chartsOfGroup'
import Users from './users'
import NewItem from './newItem'

function TabPanel(props) {
  
  const { children, value, index, ...other } = props;

  return (
    <div
      style={{background: '#F5F5F5', boxShadow: 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px'}}
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}

    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  tabs: {
    flexGrow: 2,
    width: '100%',
    boxShadow: 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px'
  }
}));

function OptionTabs({selectGroup, addUser, addChart}) {
  const state = useSelector(({chartReducer: {groups}}) => groups)
  const charts = useSelector(({chartReducer: {arrayOfChartObjects}}) => arrayOfChartObjects)
  const users = useSelector(({chartReducer: {users}}) => users)

  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = useState(0);
  let [currentGroup, setCurrentGroup] = useState(state[0])

  const handleChange = (event, newValue) => setValue(newValue)
  const handleChangeIndex = index => setValue(index)

  useEffect(() => {
    let x = state.find(({name}) => name.toLowerCase() === selectGroup.toLowerCase());
    if(x) {
        setCurrentGroup(x);
    }
  }, [selectGroup, state])

  return (
    <div>
      <Paper className={classes.tabs}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="secondary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Users" {...a11yProps(0)} />
          <Tab label="Charts" {...a11yProps(1)} />
        </Tabs>
        </Paper>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel style={{height: '45.3em', background: '#f5f5f5'}} value={value} index={0} dir={theme.direction}>
            <Users 
              users={currentGroup.users}
              groupName={currentGroup.name}
            />
            <NewItem 
              type='user'
              add={addUser}
              groupName={currentGroup.name}
              validItems={() => users.map(({name}) => name)}
            />
        </TabPanel>
        <TabPanel style={{height: '45.3em', borderRadius: '5px', background: '#f5f5f5'}} value={value} index={1} dir={theme.direction}>
            <Charts
              charts={currentGroup.charts}
              groupName={currentGroup.name}
            />
            <NewItem
              type='chart'
              add={addChart}
              groupName={currentGroup.name}
              validItems={() => charts.map(({name}) => name)}
              />
        </TabPanel>
       </SwipeableViews> 
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
     addUser: user => dispatch({type: ADD_USER_REQUESTED, payload: user}),
     addChart: chart => dispatch({type: ADD_CHART_REQUESTED, payload: chart})
})

export default connect(null, mapDispatchToProps)(OptionTabs)

