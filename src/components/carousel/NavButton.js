import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import './NavButton.css'


const NavButton = props => {
    const {icon, disabled, className, ...buttonProps} = props;

    return (
        <button disabled={disabled} className={`NavButton ${className}`} {...buttonProps}>
            <FontAwesomeIcon size={'5x'} icon={icon}/>
        </button>
    );
};

export default NavButton;
