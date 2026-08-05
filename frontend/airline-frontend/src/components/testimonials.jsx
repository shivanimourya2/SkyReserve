import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    city: "Mumbai",
    review:
      "Booking my flight was incredibly smooth. The interface is clean and easy to use.",
  },
  {
    id: 2,
    name: "Rahul Mehta",
    city: "Delhi",
    review:
      "Found the best fares within minutes. Definitely my preferred booking platform.",
  },
  {
    id: 3,
    name: "Ayesha Khan",
    city: "Pune",
    review:
      "Amazing experience! The booking process was quick and secure.",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">

      <div className="section-title">
        <h2>What Our Travelers Say</h2>
        <p>Trusted by thousands of happy customers.</p>
      </div>

      <div className="testimonial-grid">

        {testimonials.map((user) => (

          <div className="testimonial-card" key={user.id}>

            <div className="stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            <p>"{user.review}"</p>

            <h4>{user.name}</h4>

            <span>{user.city}</span>

          </div>

        ))}

      </div>

    </section>
  );
};

export default Testimonials;