import Inventory from './inventory';
import Create from './create';
import Data from './data';
import Groups from './groups';
import Settings from './settings';
import Contact from './contact';
import Logout from './logout';

import Typography from '@material-ui/core/Typography';


function findCurrentComponent(currentComponent='') {
    if(currentComponent == 'Inventory') {
        return <Inventory />;
    } else if(currentComponent == 'Create') {
        return <Create />;
    } else if(currentComponent == 'Data') {
        return <Data />;
    } else if(currentComponent == 'Groups') {
        return <Groups />;
    } else if(currentComponent == 'Settings') {
        return <Settings />;
    } else if(currentComponent == 'Contact') {
        return <Contact />;
    } else if(currentComponent == 'Logout') {
        return <Logout />;
    } 
};

function main({content, toolbar, current}) {
    return(
        <main className={content}>
        <div className={toolbar} />
            {
               findCurrentComponent(current)
            }
  </main>
    );
}

export default main;