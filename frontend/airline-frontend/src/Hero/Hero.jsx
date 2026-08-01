import "./Hero.css"

const Hero =()=> {
    return (
        <section className="hero">
            <div className="hero-const">
                <h1>
                    Fly Smarter with <span>SkyReserve</span>
                </h1>

                <p>
                    Book domestic and international flights with ease.
                    compare prices, choose your perfect journey and travel with confidence.
                </p>

                <button className="hero-btn">
                    Explore Flights
                </button>
            </div>
            <div className="hero-image"> ✈ </div>


        </section>
    );
};
export default Hero;