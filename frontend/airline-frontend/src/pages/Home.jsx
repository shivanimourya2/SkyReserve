import "../styles/home.css";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SearchBox from "../components/SearchBox";
import PopularDestinations from "../components/PopularDestinations";
import Features from "../components/Features";
import Offers from "../components/Offer";
const Home = () => {
  return (
    <>
      <Navbar />
      <Hero/>
      <SearchBox/>
      <PopularDestinations/>
      <Features />
      <offers/>
    </>
  );
};

export default Home;