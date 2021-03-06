import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import AddBoxIcon from '@material-ui/icons/AddBoxOutlined';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCartOutlined';
import DataUsageIcon from '@material-ui/icons/DataUsageRounded';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplicationsOutlined';
import LogoutIcon from '@material-ui/icons/PowerSettingsNewRounded';
import PhoneTwoToneIcon from '@material-ui/icons/PhoneTwoTone';
import StoreMallDirectoryRoundedIcon from '@material-ui/icons/StoreMallDirectoryRounded';
import DraftsRoundedIcon from '@material-ui/icons/DraftsRounded';
import NewReleasesRoundedIcon from '@material-ui/icons/NewReleasesOutlined';
import SmsRoundedIcon from '@material-ui/icons/SmsOutlined';
import BugReportOutlinedIcon from '@material-ui/icons/BugReportOutlined';
import BackupOutlinedIcon from '@material-ui/icons/BackupOutlined';
import ScatterPlotRoundedIcon from '@material-ui/icons/ScatterPlotOutlined';

import {Logo, ClyLogo} from './logo';
import DrawerPanleIcons from './DrawerPanelIcons';

function DrawerPanel({handleDrawerClose, open, classes, current, setCurrentComponent}) {

    const theme = useTheme();
    const sidebarPrimaryIcons = [{name: 'Inventory', icon: <ShoppingCartIcon />},
                                                  {name: 'Create', icon: <AddBoxIcon/>}, 
                                                  {name: 'Data', icon: <DataUsageIcon/>},                 
                                                  {name: 'Groups', icon: <PeopleAltOutlinedIcon />},
                                                  {name: 'Market', icon: <StoreMallDirectoryRoundedIcon/>}];
    const sidebarSecondaryIcons = [{name: 'Settings', icon: <SettingsApplicationsIcon />},
                                                        {name: 'Contact', icon: <PhoneTwoToneIcon />},
                                                        {name: 'Logout', icon: <LogoutIcon />} ];
    
    const sidebarTertiaryIcons = [
        {name: 'Ask Ada', icon: <ScatterPlotRoundedIcon />},
        {name: 'Backup', icon: <BackupOutlinedIcon />},
        {name: 'Reports', icon: <BugReportOutlinedIcon />},
        ];
    const sidebarQuaternaryIcons = [
        {name: 'Alerts', icon: <NewReleasesRoundedIcon />},
        {name: 'Mails', icon: <DraftsRoundedIcon />},
        {name: 'Chats', icon: <SmsRoundedIcon />},
        ];
    
    return(
        <div>
           <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
                })}
                classes={{
                paper: clsx({
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                }),
                }} >
                <div className={classes.drawer}> 
                    {open ? <Logo /> : <ClyLogo />}
                    <IconButton onClick={handleDrawerClose} style={{marginTop: '0.34em'}}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider />
                    <DrawerPanleIcons  list={sidebarPrimaryIcons} current={current} setCurrentComponent={setCurrentComponent}/>
                <Divider />
                <DrawerPanleIcons list={sidebarTertiaryIcons} current={current} setCurrentComponent={setCurrentComponent}/>
                <Divider />
                <DrawerPanleIcons list={sidebarQuaternaryIcons} current={current} setCurrentComponent={setCurrentComponent}/>
                <Divider />
                <DrawerPanleIcons list={sidebarSecondaryIcons} current={current} setCurrentComponent={setCurrentComponent}/>
            </Drawer>
        </div>
    );
}

export default DrawerPanel;