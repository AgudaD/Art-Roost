import { motion as m } from "framer-motion";
import Navbar from "../Components/Navbar";
import Title from "../Components/Title";
import Cards from "../Components/Cards";
import About from "../Components/About";
import Footer from "../Components/Footer";

const HomePage = () => {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75 }}
      className="bg-[#849E8F]"
    >
      <Navbar />
      <Title />
      <Cards />
      <About />
      <Footer />
    </m.div>
  );
};

export default HomePage;
