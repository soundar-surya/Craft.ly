import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import AddBoxIcon from '@material-ui/icons/AddBoxOutlined';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCartOutlined';
import DataUsageIcon from '@material-ui/icons/DataUsageRounded';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplicationsOutlined';
import LogoutIcon from '@material-ui/icons/PowerSettingsNewRounded';
import PhoneTwoToneIcon from '@material-ui/icons/PhoneTwoTone';

import Logo from './logo';
import DrawerPanleIcons from './DrawerPanelIcons';

function DrawerPanel({handleDrawerClose, open, classes}) {

    const theme = useTheme();
    const sidebarPrimaryIcons = [{name: 'Inventory', icon: <ShoppingCartIcon />}, 
                                                  {name: 'Create', icon: <AddBoxIcon/>}, 
                                                  {name: 'Data', icon: <DataUsageIcon/>},  
                                                  {name: 'Groups', icon: <PeopleAltOutlinedIcon />}];
    const sidebarSecondaryIcons = [{name: 'Settings', icon: <SettingsApplicationsIcon />},
                                                        {name: 'Contact', icon: <PhoneTwoToneIcon />},
                                                        {name: 'Logout', icon: <LogoutIcon />} ];

    return(
        <div>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <Logo />
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider />
                    <DrawerPanleIcons list={sidebarPrimaryIcons} />
                <Divider />
                <DrawerPanleIcons list={sidebarSecondaryIcons} />
            </Drawer>
        </div>
    );
}

export default DrawerPanel;