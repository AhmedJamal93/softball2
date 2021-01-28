import React from 'react';
import './NavbarOption.css';


function NavbarOption({title, index, changeTab, activeTab}) {

    const changeIndex = () => {
        changeTab(index, title)
    }

    return (
        <div className={`navbarOption ${activeTab === index && 'selected'}`} onClick={changeIndex}>
            {title}
        </div>
    )
}

export default NavbarOption
