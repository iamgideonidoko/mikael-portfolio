import { HomeWrapper, StatCard } from '../styles/Home.style';

const Home = () => {
    return (
        <HomeWrapper className="home-wrapper" onWheel={() => console.log('wheeling...')}>
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

export default Home;