import { memo } from 'react';
import { AwardsWrapper } from '../styles/Awards.style';
import { ComponentItem } from '../interfaces/general.interface';

const Awards = ({ componentItem, activePosition }: { componentItem: ComponentItem; activePosition: number }) => {
    const viewActive = componentItem.position === activePosition;
    return (
        <AwardsWrapper id="awards" elevated={viewActive ? false : componentItem.elevated}>
            Awards Page
        </AwardsWrapper>
    );
};

export default memo(Awards, (prevProps, nextProps) => {
    return (
        prevProps.activePosition === nextProps.activePosition &&
        prevProps.componentItem.elevated === nextProps.componentItem.elevated
    );
});
