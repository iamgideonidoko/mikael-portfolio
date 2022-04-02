import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import RouteMain from './components/RouteMain';

const App = () => {
    useEffect(() => {
        console.log('App Loaded');
    }, []);

    return (
        <div className="main">
            <Header />
            <Routes>
                <Route path="/" element={<RouteMain />} />
            </Routes>
            <Footer />
        </div>
    );
};

export default App;
