import { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
import AddRoundedIcon from "@material-ui/icons/AddRounded";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";

import GroupList from './groupList'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 300,
    boxShadow:
      "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
  },
  input: {
    marginLeft: theme.spacing(0),
    flex: 1
  },
  iconButton: {
    padding: 15
  },
  button: {
    height: 55,
    background: '#FF5757',
    color: 'white',
    '&:hover':{
        backgroundColor: '#f46969'
    },
  },
  search: {
    margin: '3.2vh 0 0 2.5vw',
    width: '100%'
  },
  divider: {
    margin: '5vh 0 0 0'
  }
}));

export default function Groups({setPrimary, selectGroup, setSelectGroup}) {
  const classes = useStyles();

  return (
    <Fragment>
      <Grid container spacing={2} className={classes.search}>
        <Grid item style={{ display: "flex" }} xs={6} sm={6} md={6} lg={6}>
          <Paper component="form" className={classes.root}>
            <IconButton
              className={classes.iconButton}
              aria-label="search"
            >
              <SearchIcon />
            </IconButton>
            <InputBase
              className={classes.input}
              placeholder="Search Groups"
              inputProps={{ "aria-label": "search google maps" }}
              onChange={(e) => setSelectGroup(e.target.value)}
            />
          </Paper>
        </Grid>
        <Grid item xs={6} sm={6} md={6} lg={6} style={{ display: "flex" }}>
          <Button
            variant="contained"
            className={classes.button}
            startIcon={<AddRoundedIcon />}
            onClick={() => setPrimary(false)}
          >
            new
          </Button>
        </Grid>
      </Grid>
      <Divider  className={classes.divider}/>
      <GroupList/>
    </Fragment>
  );
}
