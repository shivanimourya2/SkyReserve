import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/home.css";

const Booking = () => {
  const { id } = useParams();

  return (
    <>
      <Navbar />
      <div style={{ padding: "100px 20px", textAlign: "center", minHeight: "60vh" }}>
        <h2 style={{ fontSize: "32px", color: "#1e293b", marginBottom: "12px" }}>
          Flight Booking
        </h2>
        <p style={{ color: "#64748b", fontSize: "16px", marginBottom: "24px" }}>
          Booking procedure for flight ID: <strong style={{ color: "#2563eb" }}>{id || "6e-234"}</strong>
        </p>
        <Link
          to="/flights"
          style={{
            color: "#2563eb",
            fontWeight: "600",
            textDecoration: "none",
            fontSize: "15px"
          }}
        >
          ← Back to Flights
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default Booking;
