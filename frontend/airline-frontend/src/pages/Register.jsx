import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/home.css";

const Register = () => {
  return (
    <>
      <Navbar />
      <div style={{ padding: "100px 20px", textAlign: "center", minHeight: "60vh" }}>
        <h2 style={{ fontSize: "32px", color: "#1e293b", marginBottom: "12px" }}>
          Create a SkyReserve Account
        </h2>
        <p style={{ color: "#64748b", fontSize: "16px" }}>
          Registration functionality will be integrated in a later phase.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Register;
