import React from 'react';
import './NavbarSecondary.css'
import NavbarSecondaryOption from './NavbarSecondaryOptions/NavbarSecondaryOptions';

function NavbarSecondary({show, options, handleSecondaryNavbarChange, activeSecondary}) {
    return (
        <div className={`navbarSecondary ${!show && 'hide'}`}>
            {options.map((option, i) => {
                return(
                    <div className="navbarSecondary__option" key={i}>
                        <NavbarSecondaryOption 
                            title={option}
                            index={i}
                            handleSecondary={handleSecondaryNavbarChange}
                            activeSecondary={activeSecondary}
                        />
                    </div>
            )})}
            
        </div>
    )
}

export default NavbarSecondary
