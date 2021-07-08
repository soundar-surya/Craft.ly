import {Fragment} from 'react';

import logo from '../../assets/logo.png'

function Logo() {
    return(
        <Fragment>
              <img src={logo} alt='logo' style={{width: '10vh', margin: '0em 0px 0px 0px'}}/>
        </Fragment>
    );
}


export default Logo;