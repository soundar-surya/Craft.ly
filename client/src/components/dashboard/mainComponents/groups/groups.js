import { useEffect, useState } from 'react'
import { useSelector } from "react-redux"
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

import SearchGroup from './searchGroup'
import ManageGroup from './manageGroup'

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing(5),
    marginTop: theme.spacing(3),
    height: 700,
    boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'
  },
  titleMargin: {
    margin: '3vh 0 0 0'
  } 
}));

export default function CreateComponent() {
  let [selectGroup, setSelectGroup] = useState('')
  const classes = useStyles();
  let [primary, setPrimary] = useState(true)

  return (
    <div>
      <Grid container spacing={5}>
        <Grid item xs={12} md={4} lg={3}>
          <Paper className={classes.paper}>
              <Typography variant="subtitle1" className={classes.titleMargin} gutterBottom>Groups</Typography>
                <SearchGroup setPrimary={setPrimary} selectGroup={selectGroup} setSelectGroup={setSelectGroup}/>
        </Paper>
        </Grid>
        <Grid item xs={12} md={8} lg={9}>
          <Paper className={classes.paper}>
                <ManageGroup primary={primary} setPrimary={setPrimary} selectGroup={selectGroup}/>
          </Paper>
        </Grid>
      </Grid>
      <Typography variant="subtitle1" gutterBottom>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={6} style={{textAlign:'center'}}>
            crafted with ❤️ by <span style={{color:'#FF5757'}}>Craft.ly</span>
          </Grid>
          <Grid item xs={12} md={6} lg={6} style={{textAlign:'center'}}>
        &copy; 2021 Craft.ly
          </Grid>
        </Grid>
      </Typography>
    </div>
  );
}



