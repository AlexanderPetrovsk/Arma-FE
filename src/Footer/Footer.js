import './footer.scss';
import phone from '../assets/icons/phone.svg';
import email from '../assets/icons/email.svg';
import location from '../assets/icons/location.svg';
import armaLogo from '../assets/images/arma-logo-white.png';

import { NavLink } from 'react-router-dom';

function Footer() {
    const topFooterLinks = ['Range', 'Club', 'Museum', 'Shop', 'Contact', 'Forum'];
    const bottomFooterLinks = ['Terms and Conditions ', 'Privacy Policy', 'Site notice'];

    return (
        <div className='footer-container'>
            <div className='top-footer'>
                <img src={armaLogo} alt='' />
                <p>© 2023 Arma Shooting Centre. All rights reserved</p>
                <div className='top-footer-links'>
                    {topFooterLinks.map((link, index) => {
                        return (
                            <NavLink
                                className='top-footer-link' 
                                to={`/${link}`}
                                key={index}
                            >
                                { link }
                            </NavLink>
                        )
                    })}
                </div>
                <div className='conact-info'>
                    <div className='contact-item'>
                        <img src={phone} alt=''/>
                        <p>+(389)65 434 345</p>
                    </div>
                    <div className='contact-item'>
                        <img src={email} alt=''/>
                        <p>infoarma@gmail.com</p>
                    </div>
                    <div className='contact-item'>
                        <img src={location} alt=''/>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>
            </div>
            <div className='bottom-footer'>
                <p>© 2023 Arma Shooting Centre. All rights reserved</p>
                <div className='bottom-footer-links'>
                    {bottomFooterLinks.map((link, index) => {
                        return (
                            <NavLink
                                className='bottom-footer-link' 
                                to={`/${link}`}
                                key={index}
                            >
                                { link }
                            </NavLink>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default Footer;