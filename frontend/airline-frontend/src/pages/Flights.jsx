import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FlightCard from "../components/FlightCard";
import { MOCK_FLIGHTS } from "../Data/mockFlights";
import "../styles/flights.css";

const Flights = () => {
  // Search inputs state
  const [fromCity, setFromCity] = useState("Mumbai");
  const [toCity, setToCity] = useState("Delhi");
  const [departureDate, setDepartureDate] = useState("");

  // Filter inputs state
  const [selectedAirline, setSelectedAirline] = useState("All");
  const [departureTimeCategory, setDepartureTimeCategory] = useState("All");
  const [maxPrice, setMaxPrice] = useState(10000);

  // Active flights state (displayed list)
  const [flightsList, setFlightsList] = useState(MOCK_FLIGHTS);
  const [hasSearched, setHasSearched] = useState(false);

  // Unique lists for dropdowns
  const availableCities = ["Mumbai", "Delhi", "Bangalore", "Goa", "Kolkata", "Hyderabad", "Chennai"];
  const availableAirlines = ["All", "IndiGo", "Air India", "Vistara", "SpiceJet", "Akasa Air"];
  const availableTimeCategories = ["All", "Morning", "Afternoon", "Evening", "Night"];

  // Handle Search button click
  const handleSearch = (e) => {
    e.preventDefault();
    setHasSearched(true);

    const filtered = MOCK_FLIGHTS.filter((flight) => {
      // From & To matching
      const matchesFrom = fromCity ? flight.from.toLowerCase() === fromCity.toLowerCase() : true;
      const matchesTo = toCity ? flight.to.toLowerCase() === toCity.toLowerCase() : true;

      // Filter matching
      const matchesAirline = selectedAirline === "All" ? true : flight.airline === selectedAirline;
      const matchesTime = departureTimeCategory === "All" ? true : flight.departureCategory === departureTimeCategory;
      const matchesPrice = flight.priceNumeric <= maxPrice;

      return matchesFrom && matchesTo && matchesAirline && matchesTime && matchesPrice;
    });

    setFlightsList(filtered);
  };

  // Reset filters
  const handleResetFilters = () => {
    setFromCity("Mumbai");
    setToCity("Delhi");
    setDepartureDate("");
    setSelectedAirline("All");
    setDepartureTimeCategory("All");
    setMaxPrice(10000);
    setFlightsList(MOCK_FLIGHTS);
    setHasSearched(false);
  };

  return (
    <>
      <Navbar />
      <div className="flights-page-container">
        {/* Search Section */}
        <section className="flights-search-section">
          <div className="flights-search-card">
            <h2 className="search-title">Search Flights</h2>

            <form onSubmit={handleSearch} className="flights-search-form">
              <div className="form-group">
                <label htmlFor="from-select">From:</label>
                <select
                  id="from-select"
                  value={fromCity}
                  onChange={(e) => setFromCity(e.target.value)}
                >
                  {availableCities.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="to-select">To:</label>
                <select
                  id="to-select"
                  value={toCity}
                  onChange={(e) => setToCity(e.target.value)}
                >
                  {availableCities.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="departure-date">Departure:</label>
                <input
                  id="departure-date"
                  type="date"
                  value={departureDate}
                  onChange={(e) => setDepartureDate(e.target.value)}
                />
              </div>

              <button type="submit" className="search-submit-btn">
                Search Flights
              </button>
            </form>
          </div>
        </section>

        {/* Main Content: Filters + Available Flights */}
        <div className="flights-main-layout">
          {/* Filters Sidebar */}
          <aside className="filters-sidebar">
            <div className="filters-card">
              <div className="filters-header">
                <h3>Filters</h3>
                <button className="reset-btn" onClick={handleResetFilters}>
                  Reset
                </button>
              </div>

              <div className="filter-group">
                <label htmlFor="airline-filter">Airline</label>
                <select
                  id="airline-filter"
                  value={selectedAirline}
                  onChange={(e) => setSelectedAirline(e.target.value)}
                >
                  {availableAirlines.map((airline) => (
                    <option key={airline} value={airline}>
                      {airline}
                    </option>
                  ))}
                </select>
              </div>

              <div className="filter-group">
                <label htmlFor="time-filter">Departure Time</label>
                <select
                  id="time-filter"
                  value={departureTimeCategory}
                  onChange={(e) => setDepartureTimeCategory(e.target.value)}
                >
                  {availableTimeCategories.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>

              <div className="filter-group">
                <label htmlFor="price-filter">
                  Max Price: ₹{maxPrice.toLocaleString()}
                </label>
                <input
                  id="price-filter"
                  type="range"
                  min="3000"
                  max="10000"
                  step="500"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                />
                <div className="price-range-labels">
                  <span>₹3,000</span>
                  <span>₹10,000</span>
                </div>
              </div>

              <button className="apply-filter-btn" onClick={handleSearch}>
                Apply Filters
              </button>
            </div>
          </aside>

          {/* Results List */}
          <section className="flights-results-section">
            <h2 className="section-heading">Available Flights</h2>

            {flightsList.length > 0 ? (
              <div className="flights-grid">
                {flightsList.map((flight) => (
                  <FlightCard key={flight.id} {...flight} />
                ))}
              </div>
            ) : (
              <div className="no-flights-found">
                <div className="no-flights-icon">✈️</div>
                <h3>No flights found</h3>
                <p>Try adjusting your search criteria or filters to find available flights.</p>
                <button className="view-all-btn" onClick={handleResetFilters}>
                  View All Flights
                </button>
              </div>
            )}
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Flights;