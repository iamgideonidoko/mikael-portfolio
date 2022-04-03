import { useState, WheelEventHandler, WheelEvent, useEffect, KeyboardEvent } from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import RouteMain from './components/RouteMain';
import { ComponentItem } from './interfaces/general.interface';

let scrollerTimer: ReturnType<typeof setTimeout>;

const App = () => {
    const [components, setComponents] = useState<Array<ComponentItem>>([
        {
            id: 'home',
            elevated: false,
            position: 1,
        },
        {
            id: 'services',
            elevated: false,
            position: 2,
        },
    ]);
    const [activePosition, setActivePosition] = useState<number>(1);

    console.log('components => ', components);
    console.log('activePosition => ', activePosition);

    const nextPage = () => {
        // go to next page
        setComponents((prev) =>
            prev.map((item) => {
                if (item.position >= activePosition) {
                    // === instead
                    return { ...item, elevated: false };
                }
                return { ...item, elevated: true };
                // return item;
            }),
        );
        // setTimeout(() => {
        //     setComponents((prev) =>
        //         prev.map((item) => {
        //             if (item.position >= activePosition) {
        //                 return { ...item, elevated: false };
        //             }
        //             return { ...item, elevated: true };
        //         }),
        //     );
        // }, 1000);
        if (activePosition >= 1 && activePosition < components.length) {
            setActivePosition((prev) => prev + 1);
        }
    };

    const previousPage = () => {
        setComponents((prev) =>
            prev.map((item) => {
                if (item.position >= activePosition) {
                    // === instead
                    return { ...item, elevated: false };
                }
                return { ...item, elevated: true };
                // return item;
            }),
        );
        // setTimeout(() => {
        //     setComponents((prev) =>
        //         prev.map((item) => {
        //             if (item.position >= activePosition) {
        //                 return { ...item, elevated: false };
        //             }
        //             return { ...item, elevated: true };
        //         }),
        //     );
        // }, 1000);
        if (activePosition > 1 && activePosition <= components.length) {
            setActivePosition((prev) => prev - 1);
        }
    };

    const handleScroll: WheelEventHandler<HTMLDivElement> = (e: WheelEvent<HTMLDivElement>) => {
        clearTimeout(scrollerTimer);
        scrollerTimer = setTimeout(() => {
            // const homeWrapper = document.getElementById('home') as HTMLElement;
            // const servicesWrapper = document.getElementById('services') as HTMLElement;
            // console.log('ACTIVE POSITION => ', activePosition);
            // console.log('COMPONENTS => ', components);
            // console.log('wheeling...', homeWrapper.scrollHeight, homeWrapper.offsetHeight, homeWrapper.scrollTop);
            // console.log('Delta => ', e.deltaY);
            // check if srolling up or down
            if (e.deltaY > 0) {
                console.log('scrolling down');
                // scrolling down
                nextPage();
            } else {
                console.log('scrolling up');
                previousPage();
            }
        }, 0);
    };

    useEffect(() => {
        const mainElement = window.document.getElementById('main');
        if (mainElement) {
            mainElement.focus();
        }
    }, []);

    const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
        switch (e.key) {
            case 'ArrowDown':
            case 'ArrowRight':
                nextPage();
                break;
            case 'ArrowUp':
            case 'ArrowLeft':
                previousPage();
                break;
            default:
        }
    };

    // window.document.addEventListener('keydown', (e) => {
    //     console.log('key down window', e.keyCode);
    // });

    return (
        <div
            id="main"
            className="main"
            onWheel={handleScroll}
            onKeyDown={handleKeyDown}
            tabIndex={1}
            onClick={() => console.log('clicked')}
        >
            <Header />
            <Routes>
                <Route path="/" element={<RouteMain components={components} activePosition={activePosition} />} />
            </Routes>
            <Footer />
        </div>
    );
};

export default App;
