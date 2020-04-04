import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import {useAuth} from '../login/useAuth'
// import {UserContext} from '../../App'
const Header = () => {
    // const user = useContext(UserContext)
    const auth = useAuth()
    return (
        <div className="header">
            <img src={logo} alt=""/>
            <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Order Review</a>
                <a href="/inventory"> inventory </a>
               
                {
                    auth.user && <span style={{color:'yellow'}}>Welcome {auth.user.name}</span>
                }
                {
                    auth.user ? <a href = "/login">Sign out</a>
                    : <a href = "/login">Sign in</a>
                }
                
            </nav>
            
        </div>
    );
};

export default Header;