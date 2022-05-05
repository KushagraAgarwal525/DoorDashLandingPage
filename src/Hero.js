import Logo from './Logo';

function Hero() {
    return (
        <div className="hero-container">
            <div className="hero">
                <Logo />
                <div className="hero-cta-button-container">
                    <div className="hero-cta-buttons">
                        <div className="hero-cta-button">
                            <a href="https://www.doordash.com/">Sign In</a>
                        </div>
                        <div className="hero-cta-button light">
                            <a href="https://www.doordash.com/">Sign Up</a>
                        </div>
                    </div>
                </div>
                <div className="hero-catchphrase-container">
                    <div className="hero-catchphrase">
                        Restraunts and more, delivered to your door
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;