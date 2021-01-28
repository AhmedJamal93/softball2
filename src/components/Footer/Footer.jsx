import React from 'react';
import './Footer.css';
import Kala from '../images/kalalaw.png';
import Erin from '../images/erindodge.png';

function Footer() {
    return (
        <div className="footer">
            <div className="footer__text">
                <h1>PROUDLY SPONSORED BY:</h1>
            </div>
            <div className="footer__sponsors">
                <img src={Kala} alt="Kala Law" className="sponsor"/>
                <img src={Erin} alt="Erin Dodge" className="sponsor"/>
            </div>
        </div>
    )
}

export default Footer
