import { useNavigate } from "react-router-dom";
import "../styles/flights.css";

const FlightCard = ({
  id = "6e-234",
  airline = "IndiGo",
  flightNumber = "6E-234",
  from = "Mumbai",
  to = "Delhi",
  departure = "08:30 AM",
  arrival = "10:40 AM",
  duration = "2h 10m",
  price = "₹4,999"
}) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/flights/${id}`);
  };

  const handleBookNow = () => {
    navigate(`/booking/${id}`);
  };

  return (
    <div className="flight-card">
      <div className="flight-card-header">
        <div className="airline-info">
          <span className="airline-badge">{airline}</span>
          <span className="flight-number">{flightNumber}</span>
        </div>
        <div className="flight-price">{price}</div>
      </div>

      <div className="flight-route-container">
        <div className="route-point">
          <span className="city-name">{from}</span>
          <span className="time-text">Departure: {departure}</span>
        </div>

        <div className="route-line-box">
          <span className="duration-badge">{duration}</span>
          <div className="route-line">
            <span className="line-dot"></span>
            <span className="line-arrow">→</span>
            <span className="line-dot"></span>
          </div>
        </div>

        <div className="route-point">
          <span className="city-name">{to}</span>
          <span className="time-text">Arrival: {arrival}</span>
        </div>
      </div>

      <div className="flight-card-actions">
        <button className="details-btn" onClick={handleViewDetails}>
          View Details
        </button>
        <button className="book-btn" onClick={handleBookNow}>
          Book Now
        </button>
      </div>
    </div>
  );
};

export default FlightCard;
