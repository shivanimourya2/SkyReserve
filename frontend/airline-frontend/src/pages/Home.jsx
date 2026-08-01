import "../styles/home.css";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SearchBox from "../components/SearchBox";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero/>
      <SearchBox/>
    </>
  );
};

export default Home;