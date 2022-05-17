import { memo } from 'react';
import { ExperienceWrapper } from '../styles/Experience.style';
import { ComponentItem } from '../interfaces/general.interface';

const Experience = ({ componentItem }: { componentItem: ComponentItem; activePosition: number }) => {
    console.log(componentItem);
    return <ExperienceWrapper id="experience">Experience Page</ExperienceWrapper>;
};

export default memo(Experience, (prevProps, nextProps) => {
    return (
        prevProps.activePosition === nextProps.activePosition &&
        prevProps.componentItem.elevated === nextProps.componentItem.elevated
    );
});
