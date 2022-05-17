import Home from '../pages/Home';
import Services from '../pages/Services';
import Experience from '../pages/Experience';
import Skills from '../pages/Skills';
import Portfolio from '../pages/Portfolio';
import Awards from '../pages/Awards';
import Testimonials from '../pages/Testimonials';
import Blog from '../pages/Blog';
import Contact from '../pages/Contact';
import { ComponentItem } from '../interfaces/general.interface';

const RouteMain = ({ components, activePosition }: { components: ComponentItem[]; activePosition: number }) => {
    return (
        <>
            <Home
                componentItem={components.find((item) => item.id === 'home') as ComponentItem}
                activePosition={activePosition}
            />
            <Services
                componentItem={components.find((item) => item.id === 'services') as ComponentItem}
                activePosition={activePosition}
            />
            <Experience
                componentItem={components.find((item) => item.id === 'experience') as ComponentItem}
                activePosition={activePosition}
            />
            <Skills
                componentItem={components.find((item) => item.id === 'skills') as ComponentItem}
                activePosition={activePosition}
            />
            <Portfolio
                componentItem={components.find((item) => item.id === 'portfolio') as ComponentItem}
                activePosition={activePosition}
            />
            <Awards
                componentItem={components.find((item) => item.id === 'awards') as ComponentItem}
                activePosition={activePosition}
            />
            <Testimonials
                componentItem={components.find((item) => item.id === 'testimonials') as ComponentItem}
                activePosition={activePosition}
            />
            <Blog
                componentItem={components.find((item) => item.id === 'blog') as ComponentItem}
                activePosition={activePosition}
            />
            <Contact
                componentItem={components.find((item) => item.id === 'contact') as ComponentItem}
                activePosition={activePosition}
            />
        </>
    );
};

export default RouteMain;
