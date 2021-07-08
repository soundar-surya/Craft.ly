import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

function drawerPanelIcons({list}) {
    return(
        <List>
               {list.map(({name, icon}) => (
                    <ListItem button key={name}>
                    <ListItemIcon>{icon}</ListItemIcon>
                    <ListItemText primary={name} />
                    </ListItem>
                ))}
        </List>
    );
}


export default drawerPanelIcons;