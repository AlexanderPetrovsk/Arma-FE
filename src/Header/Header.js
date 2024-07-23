import './header.scss';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import ukFlag from '../assets/icons/uk-flag.svg';
import hamMenu from '../assets/icons/ham-menu.svg';
import armaLogo from '../assets/images/arma-logo.png';
import closeIcon from '../assets/icons/close-icon.svg';
import chevronDown from '../assets/icons/chevron-down.svg';

function Header() {
    const links = ['Home', 'Club', 'Shop', 'Museum', 'Forum', 'Contact'];

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleMobileMenuClick = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    }

    return (
      <div className={`header-container ${isMobileMenuOpen ? 'open' : ''}`}>
        <img src={armaLogo} alt='' className='header-logo' />
        <div className={`header-content ${isMobileMenuOpen ? 'open' : ''}`}>
          <div className='header-links-container'>
            <ul className='header-links'>
              {links.map((link, index) => 
                <NavLink
                  className={`header-link ${({ isActive }) => (isActive ? 'active' : '')}`}
                  to={`/${link.toLowerCase()}`}
                  key={index}
                >
                  { link }
                </NavLink>
              )}
            </ul>
          </div>
          <div className='locale-dropdown'>
            <img className='locale-flag' src={ukFlag} alt='' />
            <img className='dropdown-icon' src={chevronDown} alt='' />
          </div>
          <div className='account-access'>
            <p>LOG IN | REGISTER</p>
          </div>
        </div>
        <div className='hamburger-menu'>
          <img
            src={isMobileMenuOpen ? closeIcon : hamMenu}
            alt=''
            onClick={() => handleMobileMenuClick()}
          />
        </div>
      </div>
    );
}
  
  export default Header;