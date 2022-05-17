import { useState, WheelEventHandler, WheelEvent, useEffect, KeyboardEvent } from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import RouteMain from './components/RouteMain';
import { ComponentItem } from './interfaces/general.interface';
// import debounce from 'debounce';

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
        {
            id: 'experience',
            elevated: false,
            position: 3,
        },
        {
            id: 'skills',
            elevated: false,
            position: 4,
        },
        {
            id: 'portfolio',
            elevated: false,
            position: 5,
        },
        {
            id: 'awards',
            elevated: false,
            position: 6,
        },
        {
            id: 'testimonials',
            elevated: false,
            position: 7,
        },
        {
            id: 'blog',
            elevated: false,
            position: 8,
        },
        {
            id: 'contact',
            elevated: false,
            position: 9,
        },
    ]);
    const [activePosition, setActivePosition] = useState<number>(1);

    const nextPage = () => {
        // go to next page
        setComponents((prev) =>
            prev.map((item) => {
                if (item.position === activePosition) return { ...item, elevated: true };
                if (item.position >= activePosition) {
                    // === instead
                    return { ...item, elevated: false };
                }
                return { ...item, elevated: true };
                // return item;
            }),
        );

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

        if (activePosition > 1 && activePosition <= components.length) {
            setActivePosition((prev) => prev - 1);
        }
    };

    const handleScroll: WheelEventHandler<HTMLDivElement> = (e: WheelEvent<HTMLDivElement>) => {
        clearTimeout(scrollerTimer);
        scrollerTimer = setTimeout(() => {
            const currentId = components[activePosition - 1]?.id;
            // get current page element
            const currentElement = window.document.querySelector<HTMLElement>(`#${currentId}`);
            if (currentElement) {
                if (e.deltaY > 0) {
                    // scrolling down
                    if (currentElement.scrollTop === currentElement.scrollHeight - currentElement.offsetHeight) {
                        // element has scrolled to bottom
                        nextPage();
                    }
                } else {
                    if (currentElement.scrollTop === 0) {
                        // element has scrolled to top
                        previousPage();
                    }
                }
            }
        }, 200);
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

    return (
        <div id="main" className="main" onWheel={handleScroll} onKeyDown={handleKeyDown} tabIndex={1}>
            <Header activePosition={activePosition} />
            <Routes>
                {/* RouteMain will hold all the components */}
                <Route path="/" element={<RouteMain components={components} activePosition={activePosition} />} />
            </Routes>
            <Footer activePosition={activePosition} />
        </div>
    );
};

export default App;
