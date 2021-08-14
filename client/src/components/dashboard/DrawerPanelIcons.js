import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

function drawerPanelIcons({list, current, setCurrentComponent}) {
    return(
        <List>
               {list.map(({name, icon}) => (
                   <div onClick={() => setCurrentComponent(name)} style={{background: current === name ? '#f5f5f5' : null}}>
                    <ListItem button key={name}>
                    <ListItemIcon>{icon}</ListItemIcon>
                    <ListItemText primary={name} />
                    </ListItem></div>
                ))}
        </List>
    );
}


export default drawerPanelIcons;