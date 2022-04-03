import { memo } from 'react';
import { HeaderWrapper } from '../styles/Header.style';
import LogoWhite from '../assets/images/logo-white.png';
import Hamburger from './Hamburger';

const Header = () => {
    return (
        <HeaderWrapper>
            <div>
                <div className="logo">
                    <img src={LogoWhite} alt="Logo" />
                </div>
                <ul>
                    <li>
                        <a href="tel:+79281012345">+7 (928)-101-23-45</a>
                    </li>
                    <li>/</li>
                    <li>
                        <a href="mailto:mikael.moore@gmail.com">MIKAEL.MOORE@GMAIL.COM</a>
                    </li>
                </ul>
            </div>
            <div className="hamburger">
                <Hamburger />
            </div>
        </HeaderWrapper>
    );
};

export default memo(Header);
