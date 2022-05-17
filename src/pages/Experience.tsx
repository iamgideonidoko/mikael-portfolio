import { memo } from 'react';
import { ExperienceWrapper } from '../styles/Experience.style';
import { ComponentItem } from '../interfaces/general.interface';

const Experience = ({ componentItem, activePosition }: { componentItem: ComponentItem; activePosition: number }) => {
    const viewActive = componentItem.position === activePosition;
    return (
        <ExperienceWrapper id="experience" elevated={viewActive ? false : componentItem.elevated}>
            Experience Page
        </ExperienceWrapper>
    );
};

export default memo(Experience, (prevProps, nextProps) => {
    return (
        prevProps.activePosition === nextProps.activePosition &&
        prevProps.componentItem.elevated === nextProps.componentItem.elevated
    );
});
