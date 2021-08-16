import {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

import Fields from './fields';

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
    maxWidth: 500,
    boxShadow: 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px'
  }
}));

export default function OptionTabs({setParams, setHeaders, setData}) {
  const classes = useStyles();
  const theme = useTheme();
  let [headersField, setHeadersField] = useState({ ['']: ''});
  let [paramsField, setParamsField] = useState({ ['']: ''});
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => setValue(newValue)
  const handleChangeIndex = index => setValue(index)
  const onTextAreaInputChange = e => {
        setData(JSON.stringify(e.target.value))
  }

  useEffect(() => setParams(paramsField), [paramsField])
  useEffect(() => setHeaders(headersField), [headersField])

  return (
    <div className={classes.root}>
      <Paper className={classes.tabs}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="secondary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Params" {...a11yProps(0)} />
          <Tab label="Headers" {...a11yProps(1)} />
          <Tab label="Query" {...a11yProps(2)} />
        </Tabs>
        </Paper>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Fields field={paramsField} setField={setParamsField} />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
        <Fields field={headersField} setField={setHeadersField} />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction} >
          <TextField
          onChange={onTextAreaInputChange}
          id="outlined-multiline-static"
          label="Query"
          multiline
          rows={2}
          defaultValue="query{}"
          variant="outlined"
          color="secondary"
        />
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
