import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import React from "react";
import Grid from '@material-ui/core/Grid';

import Logo from '../assets/logo.png';

import Dashboard from './dashboard/dashboard'

function Home() {

    return(
      <div>
        <Dashboard/>
        <footer>
          <AppBar position="static" style={{background: '#f5f5f5',bototm: 0, boxShadow: 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px'}}>
            <Toolbar variant="dense">
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} lg={6} style={{textAlign:'center', color: '#5a5a61'}}>
                crafted with <span style={{color:'#FF5757'}}>&#10084;</span> by <span style={{color:'#FF5757', fontSize: '17px', fontFamily: 'Pacifico'}}>Craft.ly</span>
              </Grid>
              <Grid item xs={12} md={6} lg={6} style={{textAlign:'center', color: '#5a5a61'}}>
                &copy; 2021 Craft.ly
              </Grid>
            </Grid>
            </Toolbar>
        </AppBar>
      </footer>
      </div>
    )
  }

export default Home
  