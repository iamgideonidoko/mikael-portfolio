import Home from '../pages/Home';
import Services from '../pages/Services';
import Experience from '../pages/Experience';
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
        </>
    );
};

export default RouteMain;
