import { Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'

import WebServices from './webServices/webService'

export default function DataSource({name, setName, setData}) {

  let classes = useStyles()

  const onInputChange = e => {
    console.log(e.target.value)
    setName(e.target.value)
  }

  return (
   <Fragment>
        <div>
      <Typography noWrap variant='h6'>Preliminary step</Typography>
        <TextField
        className={classes.title}
        onChange={onInputChange}
        placeholder="Eg. Sales Analysis"
        label="Title"
        id="outlined-size-normal"
        value={name}
        variant="outlined"
        color="secondary"
          />
      </div>
      <WebServices setData={setData}/>
   </Fragment> 
  )
}


var useStyles = makeStyles((theme) => ({
  title: {
    margin: theme.spacing(4),
    [theme.breakpoints.up('md')]: {
      maxWidth: 700,
      width: '35.5em',
    },
  }
}))
