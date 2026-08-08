import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/home.css";

const Login = () => {
  return (
    <>
      <Navbar />
      <div style={{ padding: "100px 20px", textAlign: "center", minHeight: "60vh" }}>
        <h2 style={{ fontSize: "32px", color: "#1e293b", marginBottom: "12px" }}>
          Login to SkyReserve
        </h2>
        <p style={{ color: "#64748b", fontSize: "16px" }}>
          Authentication functionality will be integrated in a later phase.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Login;
