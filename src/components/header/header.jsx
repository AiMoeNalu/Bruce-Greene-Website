import React from 'react';
import {Link} from 'react-router-dom';

//import {ReactComponent as Logo} from '../../assets/img/littlebrucebig.png';
import SocialMediaNav from '../Social-Media/Social-Media-Nav/SocialMediaNav';

import './header.scss';

import { auth } from '../../firebase/firebase.utils';

const Header = ({ currentUser }) => (
 
    <div className='header'>
        <SocialMediaNav />        

        <Link className='logo-container' to="/">
            {/*<Logo className='logo'/>*/}
        </Link>
   
        <div className='options'>
            <Link className='option' to='/'>
                SHOP
            </Link>
            <Link className='option' to='/'>
                CONTACT
            </Link>
            {
                currentUser ?
                <div className='option' onClick={() => auth.signOut()}>
                    SIGN OUT
                </div>
                :
                <Link className='option' to='/'>
                    SIGN IN
                </Link>
            }
        </div>
    </div>
);

export default Header;