import './App.css';
import { useEffect } from 'react';
import Hero from './Hero';

function App() {
    useEffect(() => {document.title = "DoorDash Food Delivery & Takeout - From Restaurants Near You"}, []);
    return (
        <div className="App">
            <Hero /> 
        </div>
    );
}

export default App;
