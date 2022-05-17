import { memo } from 'react';
import { FooterWrapper } from '../styles/Footer.style';

const Footer = ({ activePosition }: { activePosition: number }) => {
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
        <FooterWrapper isDark={isDark()}>
            <div>
                <span>© 2022 COPYRIGHT.</span>
                <span>ALL RIGHTS RESERVED.</span>
            </div>
            <div>
                <div className="page-count-box">
                    <span>0{activePosition}</span>
                </div>
            </div>
        </FooterWrapper>
    );
};

export default memo(Footer);
