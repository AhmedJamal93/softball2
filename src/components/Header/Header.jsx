import React from 'react';
import banner from '../images/banner2.png';
import './Header.css';

function Header() {
    return (
        <div className="header">
            <img src={banner} alt="team banner"/>
        </div>
    )
}

export default Header
