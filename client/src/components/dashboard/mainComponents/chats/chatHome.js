import { makeStyles } from "@material-ui/core/styles"
import { Avatar, Divider, Paper } from "@material-ui/core"
import { Typography } from "@material-ui/core"
import faker from 'faker'
import SearchRoundedIcon from '@material-ui/icons/SearchRounded'
import MoreVertRoundedIcon from '@material-ui/icons/MoreVertRounded'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader'

export default function ChatHome() {
    
    const classes = useStyles()

    return (
        <div>
            <div className={classes.chatTopbar}>
                <div  className={classes.userAvatar}>
                    <Avatar alt="Surya" src="https://avatars.githubusercontent.com/u/67203625?v=4" />
                </div>
                <Typography className={classes.you}>SoundarSurya</Typography>
                <div className={classes.options}>
                    <SearchRoundedIcon />
                    <MoreVertRoundedIcon />
                </div>
            </div>
            <Divider/>
                <Paper className={classes.contacts}>
                    <Card className={classes.card} style={{background: '#f5f5f5'}}>
                        <CardHeader
                            avatar={
                            <Avatar src={faker.image.people()} className={classes.avatar}>
                            </Avatar>
                            }
                            title="Kakashi Hatake"
                            subheader="Kakashi: Hey there!"
                        />
                    </Card>
                    <Card className={classes.card}>
                        <CardHeader
                            avatar={
                            <Avatar src={faker.image.avatar()} className={classes.avatar}>
                            </Avatar>
                            }
                            title="Obito Uchiha"
                            subheader="Obito: Hey There!"
                        />
                    </Card>
                    <Card className={classes.card}>
                        <CardHeader
                            avatar={
                            <Avatar src={faker.image.people()} className={classes.avatar}>
                            </Avatar>
                            }
                            title="Minato Namikaze"
                            subheader="Minato: Hey there!"
                        />
                    </Card>
                    <Card className={classes.card}>
                        <CardHeader
                            avatar={
                            <Avatar src={faker.image.image()} className={classes.avatar}>
                            </Avatar>
                            }
                            title="Kushina Uzumaki"
                            subheader="Kushina: Hey there!"
                        />
                    </Card>
                    <Card className={classes.card}>
                        <CardHeader
                            avatar={
                            <Avatar src={faker.image.image()} className={classes.avatar}>
                            </Avatar>
                            }
                            title="Rock Lee"
                            subheader="Rock: Believe it!"
                        />
                    </Card>
                    <Card className={classes.card}>
                        <CardHeader
                            avatar={
                            <Avatar src={faker.image.people()} className={classes.avatar}>
                            </Avatar>
                            }
                            title="Naruto Uzumaki"
                            subheader="Naruto: I swear it!"
                        />
                    </Card>
                    <Card className={classes.card}>
                        <CardHeader
                            avatar={
                            <Avatar src={faker.image.avatar()} className={classes.avatar}>
                            </Avatar>
                            }
                            title="Hinata Hyuga"
                            subheader="Hinata: naruto kun"
                        />
                    </Card>
                    
                </Paper>
        </div>
    )
}

// styles
var useStyles = makeStyles((theme) => ({
    chatTopbar: {
        [theme.breakpoints.down('xs')]: {
            height: '3.7rem'
          },
        height: '5rem',
        background: '#f5f5f5',
        borderTopLeftRadius: '10px',
        display: 'flex'
    },
    userAvatar: {
        [theme.breakpoints.down('xs')]: {
            margin: '1rem 0 0 1rem'
          },
        position: 'absolute',
        margin: '1rem 0 0 2vw',
    },
    you: {
        margin: '1.5rem 0 0 5.2rem'
    },
    options: {
        margin: '1.5rem 0 0 9vw',
    },
    contacts: {
        boxShadow: 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px',
        margin: '1rem',
        height: '73vh',
    },
    card: {
        boxShadow: 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px',
    }
  }));