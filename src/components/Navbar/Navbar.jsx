import React from 'react';
import './Navbar.css';
import NavbarOption from './NavbarOption/NavbarOption';

function Navbar({handleNavbarChange, handleSecondaryOptions, active}) {
    return (
        <div className='navbar'>
            <div className="navbar__option home">
                <NavbarOption
                    title='Home'
                    index={0}
                    changeTab={handleNavbarChange}
                    activeTab={active}
                    secondaryOptions={handleSecondaryOptions}
                />
            </div>
            <div className="navbar__option">
                <NavbarOption
                    title='Team'
                    index={1}
                    changeTab={handleNavbarChange}
                    activeTab={active}
                    secondaryOptions={handleSecondaryOptions}
                />
            </div>
            <div className="navbar__option">
                <NavbarOption 
                    title='Schedule'
                    index={2}
                    changeTab={handleNavbarChange}
                    activeTab={active}
                />
            </div>
            <div className="navbar__option">
                <NavbarOption 
                    title='Gallery'
                    index={3}
                    changeTab={handleNavbarChange}
                    activeTab={active}
                />
            </div>
            <div className="navbar__option sponsors">
                <NavbarOption 
                    title='Sponsors'
                    index={4}
                    changeTab={handleNavbarChange}
                    activeTab={active}
                />
            </div>
        </div>
    )
}

export default Navbar
