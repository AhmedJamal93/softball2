import React from 'react';
import './NavbarSecondaryOptions.css';


function NavbarSecondaryOption({title, index, handleSecondary, activeSecondary}) {

    const changeIndex = () => {
        handleSecondary(index)
    }

    return (
        <div className={`navbarSecondaryOption ${activeSecondary === index && 'selected'}`} onClick={changeIndex}>
            {title}
        </div>
    )
}

export default NavbarSecondaryOption;