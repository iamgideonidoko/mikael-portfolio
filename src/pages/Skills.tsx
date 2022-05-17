import { memo } from 'react';
import { SkillsWrapper } from '../styles/Skills.style';
import { ComponentItem } from '../interfaces/general.interface';

const Skills = ({ componentItem, activePosition }: { componentItem: ComponentItem; activePosition: number }) => {
    const viewActive = componentItem.position === activePosition;
    return (
        <SkillsWrapper id="skills" elevated={viewActive ? false : componentItem.elevated}>
            Skills Page
        </SkillsWrapper>
    );
};

export default memo(Skills, (prevProps, nextProps) => {
    return (
        prevProps.activePosition === nextProps.activePosition &&
        prevProps.componentItem.elevated === nextProps.componentItem.elevated
    );
});
