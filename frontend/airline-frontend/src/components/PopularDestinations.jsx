const destinations = [
  {
    id: 1,
    city: "Goa",
    country: "India",
    price: "₹3,499",
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800",
  },
  {
    id: 2,
    city: "Dubai",
    country: "UAE",
    price: "₹18,999",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800",
  },
  {
    id: 3,
    city: "Singapore",
    country: "Singapore",
    price: "₹22,999",
    image:
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800",
  },
  {
    id: 4,
    city: "Paris",
    country: "France",
    price: "₹45,999",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800",
  },
  {
    id: 5,
    city: "Bali",
    country: "Indonesia",
    price: "₹23,999",
    image:
      "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=800",
  },
  {
    id: 6,
    city: "Maldives",
    country: "Maldives",
    price: "₹28,999",
    image:
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=800",
  },
];

const PopularDestinations = () => {
  return (
    <section className="destinations">
      <h2>Popular Destinations</h2>

      <div className="destination-grid">
        {destinations.map((destination) => (
          <div className="destination-card" key={destination.id}>
            <img
              src={destination.image}
              alt={destination.city}
            />

            <div className="destination-info">
              <h3>{destination.city}</h3>
              <p>{destination.country}</p>
              <h4>From {destination.price}</h4>

              <button>Explore</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularDestinations;