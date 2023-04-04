import { motion as m } from "framer-motion";
import Navbar from "./../Components/Navbar";
import Founders from "../Components/Founders";
import AboutGallery from "../Components/AboutGallery";
import Footer from "../Components/Footer";

const AboutUs = () => {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75 }}
      className="bg-[#849E8F]"
    >
      <Navbar />
      <Founders />
      <AboutGallery />
      <Footer />
    </m.div>
  );
};

export default AboutUs;
