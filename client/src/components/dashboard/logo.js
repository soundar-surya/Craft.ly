import {Fragment} from 'react';

import logo from '../../assets/logo.png'

function Logo() {
    return(
        <Fragment>
              <img src={logo} alt='logo' style={{width: '5.4rem', height: '2rem',  margin: '1.2em 0px 0px 0px'}}/>
        </Fragment>
    );
}


export default Logo;