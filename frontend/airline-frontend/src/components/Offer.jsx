const offers = [
  {
    id: 1,
    title: "Summer Sale",
    discount: "Up to 50% OFF",
    description: "Book domestic & international flights."
  },
  {
    id: 2,
    title: "Weekend Escape",
    discount: "25% OFF",
    description: "Perfect for short vacations."
  },
  {
    id: 3,
    title: "Student Special",
    discount: "15% OFF",
    description: "Exclusive discounts for students."
  }
];

const Offers = () => {
  return (
    <section className="offers">

      <div className="section-title">
        <h2>Exclusive Flight Offers</h2>
        <p>Grab exciting discounts before they fly away.</p>
      </div>

      <div className="offers-grid">
        {offers.map((offer) => (
          <div className="offer-card" key={offer.id}>
            <h3>{offer.title}</h3>
            <h1>{offer.discount}</h1>
            <p>{offer.description}</p>
            <button>Book Now</button>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Offers;