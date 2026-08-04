import { FaPlaneDeparture, FaShieldAlt, FaBolt, FaHeadset } from "react-icons/fa";

const features = [
  {
    id: 1,
    icon: <FaPlaneDeparture />,
    title: "Best Flight Deals",
    description: "Find the best domestic and international flight prices."
  },
  {
    id: 2,
    icon: <FaShieldAlt />,
    title: "Secure Payments",
    description: "Your transactions are protected with advanced security."
  },
  {
    id: 3,
    icon: <FaBolt />,
    title: "Instant Booking",
    description: "Book your tickets in just a few clicks."
  },
  {
    id: 4,
    icon: <FaHeadset />,
    title: "24×7 Support",
    description: "Our support team is always available to assist you."
  }
];

const Features = () => {
  return (
    <section className="features">

      <div className="section-title">
        <h2>Why Choose SkyReserve?</h2>
        <p>
          Experience seamless and secure flight booking.
        </p>
      </div>

      <div className="feature-grid">

        {features.map((feature) => (
          <div className="feature-card" key={feature.id}>

            <div className="feature-icon">
              {feature.icon}
            </div>

            <h3>{feature.title}</h3>

            <p>{feature.description}</p>

          </div>
        ))}

      </div>

    </section>
  );
};

export default Features;