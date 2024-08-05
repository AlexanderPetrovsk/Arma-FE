import './header.scss';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import ukFlag from '../assets/icons/uk-flag.svg';
import hamMenu from '../assets/icons/ham-menu.svg';
import armaLogo from '../assets/images/arma-logo.png';
import armaLogoSm from '../assets/images/arma-logo-sm.png';
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
        <img
          srcSet={`${armaLogo} 1280w, ${armaLogoSm} 768w`}
          sizes='(max-width: 768px) 768px, 1280px'
          src={armaLogo}
          alt=''
          className='header-logo'
        />
        <div className={`header-content ${isMobileMenuOpen ? 'open' : ''}`}>
          <div className='header-links-container'>
            <ul className='header-links'>
              {links.map((link, index) => 
                <NavLink
                  className="header-link"
                  to={`/${link.toLowerCase()}`}
                  key={index}
                >
                  { link }
                </NavLink>
              )}
            </ul>
            <div className='locale-dropdown'>
              <img className='locale-flag' src={ukFlag} alt='' />
              <img className='dropdown-icon' src={chevronDown} alt='' />
            </div>
          </div>
          <p className='account-access'>
            LOG IN | REGISTER
          </p>
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