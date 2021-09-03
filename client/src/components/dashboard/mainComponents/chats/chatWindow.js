import { Box, Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

import ChatHome from "./chatHome"
import ChatBox from "./chatBox"

export default function ChatWindow() {
    const classes = useStyles()

    return (
        <Box className={classes.root}>
            <Grid container>
                <Grid  className={classes.home} item xs={12} md={4} lg={3}>
                    <ChatHome/>     
                </Grid>
                <Grid className={classes.chats} item xs={12} md={8} lg={9}>
                    <ChatBox />
                </Grid>
            </Grid>
        </Box>
    )
}

// styles
var useStyles = makeStyles((theme) => ({
    root: {
        margin: '0.5rem 0 0 0 ',
        boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
        borderRadius: '10px',
        height: '85vh',
        width: '100%'
    },
    home: {
        [theme.breakpoints.down('xs')]: {
            height: 300
          },
        borderRight: '2px solid rgba(0, 0, 0, 0.05)',
        height: '85vh'
    },
    chats: {
        height: '85vh',
        [theme.breakpoints.down('xs')]: {
            height: 300
          },
    }
  }));