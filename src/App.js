import './App.css';
import Hero from './Hero';
import OrderProcess from './OrderProcess';
import Footer from './Footer';

function App() {
    return (
        <div className="App">
            <main>
                <Hero />
            </main>
            <OrderProcess />
            <div className="secondary-banner">
                <span className="secondary-banner-text">Serving over 391,000 restaurants.</span>
            </div>
            <Footer />
        </div>
    );
}

export default App;
