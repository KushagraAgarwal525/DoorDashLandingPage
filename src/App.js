import './App.css';
import Hero from './Hero';
import OrderProcess from './OrderProcess';

function App() {
    return (
        <div className="App">
            <Hero />
            <OrderProcess />
            <div className="secondary-banner">
                <span className="secondary-banner-text">Serving over 391,000 restaurants.</span>
            </div>
        </div>
    );
}

export default App;
