import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { MOCK_FLIGHTS } from "../Data/mockFlights";
import "../styles/flights.css";

const FlightDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [seatNotice, setSeatNotice] = useState(false);

  // Find flight by id or fallback to first flight
  const flight = MOCK_FLIGHTS.find((f) => f.id === id) || MOCK_FLIGHTS[0];

  const handleSelectSeats = () => {
    setSeatNotice(true);
    setTimeout(() => {
      setSeatNotice(false);
    }, 4000);
  };

  const handleBookNow = () => {
    navigate(`/booking/${flight.id}`);
  };

  return (
    <>
      <Navbar />
      <div className="flight-details-container">
        <div className="details-card-wrapper">
          <div className="details-header">
            <Link to="/flights" className="back-link">
              ← Back to Flights
            </Link>
            <h2>Flight Details</h2>
          </div>

          <div className="details-content">
            <div className="flight-main-badge">
              <span className="airline-title">{flight.airline}</span>
              <span className="flight-code">{flight.flightNumber}</span>
            </div>

            <div className="details-route">
              <span className="route-city">{flight.from}</span>
              <span className="route-arrow">→</span>
              <span className="route-city">{flight.to}</span>
            </div>

            <div className="details-grid">
              <div className="details-item">
                <span className="item-label">Departure</span>
                <span className="item-value">{flight.departure}</span>
              </div>
              <div className="details-item">
                <span className="item-label">Arrival</span>
                <span className="item-value">{flight.arrival}</span>
              </div>
              <div className="details-item">
                <span className="item-label">Duration</span>
                <span className="item-value">{flight.duration}</span>
              </div>
              <div className="details-item">
                <span className="item-label">Price</span>
                <span className="item-value price-tag">{flight.price}</span>
              </div>
            </div>

            {seatNotice && (
              <div className="seat-notice">
                ℹ️ Seat selection will be enabled in the upcoming seat booking update!
              </div>
            )}

            <div className="details-actions">
              <button className="select-seats-btn" onClick={handleSelectSeats}>
                Select Seats
              </button>
              <button className="book-btn" onClick={handleBookNow}>
                Proceed to Booking
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FlightDetails;
