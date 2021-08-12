import {Fragment} from 'react';

import logo from '../../assets/logo.png'
import clyLogo from '../../assets/cly.png'

export const Logo = () =>  {
    return(
        <Fragment>
              <img src={logo} alt='logo' style={{width: '5.4rem', height: '2rem',  margin: '1.2em 0px 0px 0px'}}/>
        </Fragment>
    );
}

export const ClyLogo = () =>  {
    return(
        <Fragment>
              <img src={clyLogo} alt='logo' style={{width: '2.8rem', height: '1.7rem',  margin: '1.5em 5em 0px 0px'}}/>
        </Fragment>
    );
}
// export default Logo;