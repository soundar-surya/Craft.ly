import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import MoreHorizRoundedIcon from '@material-ui/icons/MoreHorizRounded';
import { deepOrange } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '80%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
    margin: '1vh 0 0 2vw'
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500]
  }
}));

export default function AlignItemsList() {

  let state = useSelector(({chartReducer: {groups}}) => groups)
  let defaultList = [...state].slice(0, 5)
  const classes = useStyles();
  const renderContent = () => {
      if(state.length <= 0) {
        return <Typography noWrap>Empty</Typography>;
      } else {
        return (
          <Fragment>
              {defaultList.map(({name, description}) => (
                <Fragment key={name}>
                  <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar className={classes.orange}>{name[0].toUpperCase()}</Avatar>
                  </ListItemAvatar>
                  <ListItemText
                      primary={<Typography noWrap>{name}</Typography>}
                      secondary={
                    <Fragment>
                      <Typography
                        noWrap
                        color="textPrimary"
                        style={{fontSize: '1.5vh'}}
                    >
                      {description}
                    </Typography>
                    </Fragment>
                    }
                  />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                </Fragment>
              ))}
              {state.length >= 5 ? <MoreHorizRoundedIcon  style={{margin: '3vh 0 0 0'}}/> : null}
        </Fragment>
        );
      }
  }

  return (
    <List className={classes.root}>
      {renderContent()}
    </List>
  );
}

