import React from 'react';
import {Link} from 'react-router-dom';

import SocialMediaNav from '../Social-Media/Social-Media-Nav/SocialMediaNav';
import { ReactComponent as Logo } from '../../assets/img/bruce-greene-logo2.svg';

import './header.scss';

import { auth } from '../../firebase/firebase.utils';

const Header = ({ currentUser }) => (
 
    <div className='header'>
        <div className='social-nav'>
            <SocialMediaNav />        
        </div>

        <Link className='logo-container' to="/">
            <Logo />
        </Link>
   
        <div className='options'>
            <Link className='option' to='/'>
                SHOP
            </Link>
            <Link className='option' to='/'>
                DONATE
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