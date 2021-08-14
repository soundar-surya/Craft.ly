import { Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import Export from './exportXLSX'

const useStyles = makeStyles(theme => ({
  table: {
    [theme.breakpoints.up('sm')]: {
      // width: '50vw',
    },
  },
}));

export default function AcccessibleTable({ tableHead, tableBody: {xAxisLabelNames, yAxisLabelData}, name }) {

  const classes = useStyles();

  const generatedataSet = () => {
    let data = xAxisLabelNames.map((record, index) => {
      let resObject = {}
      resObject[tableHead[0]] = record
      resObject[tableHead[1]] = yAxisLabelData[index]
      return resObject
    })
    return data
  }

  return (
    <Fragment>
          <Grid container spacing={2} >
    <Grid item style={{display: 'flex', justifyContent: 'flex-start'}} xs={6} sm={6} md={6} lg={6} key={name}>
      <Typography variant='subtitle1'>{name}</Typography>
    </Grid>
    <Grid item xs={6} sm={6} md={6} lg={6} key={'component'} style={{display: 'flex', justifyContent: 'flex-end'}}>
        <Export csvData={generatedataSet()} fileName={`CraftedByCraft-ly.xlsx`}/>
    </Grid>
    </Grid>

    <TableContainer component={Paper} style={{boxShadow: 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px'}}>
      <Table className={classes.table} aria-label="caption table">
        <TableHead>
          <TableRow>
              {
                tableHead.map((head, index) => <TableCell align={index > 0 ? 'right' : 'left'} key={head}>{head}</TableCell>)
              }
          </TableRow>
        </TableHead>
        <TableBody>
            {
                xAxisLabelNames.map((label, index) => (
                <TableRow key={label}>
                    <TableCell component="th" scope="row" align='left'>
                        {label}
                    </TableCell>
              <TableCell align="right">{yAxisLabelData[index]}</TableCell>
            </TableRow>
                ))
            }
        </TableBody>
      </Table>
    </TableContainer>
    </Fragment>
  );
}


