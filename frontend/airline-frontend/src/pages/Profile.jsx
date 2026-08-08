import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/home.css";

const Profile = () => {
  return (
    <>
      <Navbar />
      <div style={{ padding: "100px 20px", textAlign: "center", minHeight: "60vh" }}>
        <h2 style={{ fontSize: "32px", color: "#1e293b", marginBottom: "12px" }}>
          User Profile
        </h2>
        <p style={{ color: "#64748b", fontSize: "16px" }}>
          User profile management will be available in a future update.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Profile;