import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import React from "react";
import Grid from '@material-ui/core/Grid';

import Logo from '../assets/logo.png';

import Dashboard from './dashboard/dashboard'

const x = {
  margin:'0',
  padding:'0',  
  display:'flex',
  flexDirection:'column',
  justifyContent:'space-between',
  minHeight:'100vh'
}

function Home() {

    return(
      <div>
        <Dashboard/>
        <footer>
          {/* <hr/> */}
          <AppBar position="static">
        <Toolbar variant="dense">
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          {/* <Typography variant="h6" color="inherit">
            Photos
          </Typography> */}
        </Toolbar>
      </AppBar>
        {/* <Typography variant="subtitle1" gutterBottom>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={6} style={{textAlign:'center'}}>
            crafted with <span style={{color:'#FF5757'}}>&#10084;</span> by <span style={{color:'#FF5757', width: '1em'}}>Craft.ly</span>
            <img src={Logo} style={{width: '2em', height: '1em'}}/>
          </Grid>
          <Grid item xs={12} md={6} lg={6} style={{textAlign:'center'}}>
        &copy; 2021 Craft.ly
          </Grid>
        </Grid>
      </Typography> */}
        </footer>
      </div>
    )
  }

export default Home
  