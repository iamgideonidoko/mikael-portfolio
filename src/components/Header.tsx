import { memo } from 'react';
import { HeaderWrapper } from '../styles/Header.style';
import Hamburger from './Hamburger';

const Header = ({ activePosition }: { activePosition: number }) => {
    const isDark = (): boolean => {
        switch (activePosition) {
            case 1:
                return true;
            case 2:
                return false;
            default:
                return true;
        }
    };
    return (
        <HeaderWrapper isDark={isDark()}>
            <div>
                <div className="logo">
                    <h2>Mikael.</h2>
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
