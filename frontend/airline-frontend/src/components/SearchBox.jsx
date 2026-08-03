
const SearchBox = () => {
  return (
    <div className="search-box">
      <div className="search-field">
        <label>From</label>
        <select>
          <option>Mumbai</option>
          <option>Delhi</option>
          <option>Pune</option>
        </select>
      </div>
      <div className="search=field">
        <label>To</label>
        <select>
        <option>Goa</option>
        <option>Dubai</option>
        <option>Singapore</option>
        </select>

      </div>
      <div className="search-field">
        <label>Departure</label>
        <input type="date"/>
      </div>
      <button className="search-btn">
        Search Flights
      </button>

    </div>
  );
};

export default SearchBox;   