import { memo } from 'react';
import { SkillsWrapper } from '../styles/Skills.style';
import { ComponentItem } from '../interfaces/general.interface';
import skillImage from '../assets/images/attachment-07.jpg';
import parallaxParticle1 from '../assets/images/parallax-particle-01.png';
import parallaxParticle2 from '../assets/images/parallax-particle-02.png';
import parallaxParticle3 from '../assets/images/parallax-particle-03.png';

const Skills = ({ componentItem, activePosition }: { componentItem: ComponentItem; activePosition: number }) => {
    const viewActive = componentItem.position === activePosition;
    return (
        <SkillsWrapper id="skills" elevated={viewActive ? false : componentItem.elevated}>
            <div>
                <div>
                    <img src={skillImage} alt="" />
                    <span>
                        <img src={parallaxParticle1} alt="" />
                    </span>
                    <span>
                        <img src={parallaxParticle2} alt="" />
                    </span>
                    <span>
                        <img src={parallaxParticle3} alt="" />
                    </span>
                </div>
            </div>
            <div>
                <h2>
                    I'm using <span>top leading design</span> methods in my work.
                </h2>

                <p>Sea was very don't without i deep of Multiply Signs creature make a fifth void us face day.</p>

                <ul>
                    <li>
                        <p>Web Design - 70%</p>
                        <div className="skill-progress"></div>
                    </li>
                    <li>
                        <p>Branding - 70%</p>
                        <div className="skill-progress"></div>
                    </li>
                    <li>
                        <p>Photography - 70%</p>
                        <div className="skill-progress"></div>
                    </li>
                </ul>
            </div>
        </SkillsWrapper>
    );
};

export default memo(Skills, (prevProps, nextProps) => {
    return (
        prevProps.activePosition === nextProps.activePosition &&
        prevProps.componentItem.elevated === nextProps.componentItem.elevated
    );
});
