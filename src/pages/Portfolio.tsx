import { memo } from 'react';
import { PortfolioWrapper } from '../styles/Portfolio.style';
import { ComponentItem } from '../interfaces/general.interface';

const Portfolio = ({ componentItem, activePosition }: { componentItem: ComponentItem; activePosition: number }) => {
    const viewActive = componentItem.position === activePosition;
    return (
        <PortfolioWrapper id="portfolio" elevated={viewActive ? false : componentItem.elevated}>
            Portfolio Page
        </PortfolioWrapper>
    );
};

export default memo(Portfolio, (prevProps, nextProps) => {
    return (
        prevProps.activePosition === nextProps.activePosition &&
        prevProps.componentItem.elevated === nextProps.componentItem.elevated
    );
});
