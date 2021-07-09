import {useState} from 'react';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AppsSharpIcon from '@material-ui/icons/AppsSharp';


import {useStyles} from './styles/style';
import DrawerPanel from './drawer';
import Main from './mainComponents/main';

export default function PersistentDrawerLeft() {

  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const [currentComponent, setCurrentComponent] =  useState('Inventory');

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })} >
        <Toolbar>
          <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)} >
                <AppsSharpIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
              Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <DrawerPanel handleDrawerClose={handleDrawerClose} open={open} classes={classes} setCurrentComponent={setCurrentComponent}/>      
        <Main content={classes.content}  toolbar={classes.toolbar} current={currentComponent}/>
    </div>
  );
}
