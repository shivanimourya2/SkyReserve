import { FaPlane, FaGlobeAsia, FaUsers, FaStar } from "react-icons/fa";

const stats = [
  {
    id: 1,
    icon: <FaPlane />,
    number: "10K+",
    title: "Flights Booked",
  },
  {
    id: 2,
    icon: <FaGlobeAsia />,
    number: "120+",
    title: "Destinations",
  },
  {
    id: 3,
    icon: <FaUsers />,
    number: "1M+",
    title: "Happy Travelers",
  },
  {
    id: 4,
    icon: <FaStar />,
    number: "4.9",
    title: "Customer Rating",
  },
];

const Stats = () => {
  return (
    <section className="stats">

      <div className="section-title">
        <h2>Trusted by Thousands of Travelers</h2>
        <p>Your journey begins with confidence.</p>
      </div>

      <div className="stats-grid">
        {stats.map((stat) => (
          <div className="stat-card" key={stat.id}>
            <div className="stat-icon">{stat.icon}</div>

            <h2>{stat.number}</h2>

            <p>{stat.title}</p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Stats;