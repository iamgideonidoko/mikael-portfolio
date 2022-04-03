import { memo } from 'react';
import { HomeWrapper, StatCard } from '../styles/Home.style';
import { ComponentItem } from '../interfaces/general.interface';

const Home = ({ componentItem, activePosition }: { componentItem: ComponentItem; activePosition: number }) => {
    return (
        <HomeWrapper id="home" elevated={componentItem.position === activePosition ? false : componentItem.elevated}>
            <div>
                <h5>MIKAEL MOORE</h5>
                <h1>
                    I&apos;m Product <br /> Designer
                </h1>
                <div>
                    <StatCard>
                        <span>12</span>
                        <h5>
                            COMPLETED <br /> PROJECT
                        </h5>
                    </StatCard>
                    <StatCard>
                        <span>18</span>
                        <h5>
                            SATISFIED <br /> CUSTOMERS
                        </h5>
                    </StatCard>
                </div>
                <a className="resume-link" href="#">
                    Watch Resume
                </a>
            </div>
            <div></div>
            <div className="home-bg-wrapper">
                <div className="home-img-bg"></div>
                <div className="home-circle-bg"></div>
            </div>
            {/* <div className="home-pattern-bg"></div> */}
        </HomeWrapper>
    );
};

export default memo(Home, (prevProps, nextProps) => {
    return (
        prevProps.activePosition === nextProps.activePosition &&
        prevProps.componentItem.elevated === nextProps.componentItem.elevated
    );
});
