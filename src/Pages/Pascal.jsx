import { motion as m } from "framer-motion";
import AboutPascal from "../Components/AboutPascal";
import Footer from "../Components/Footer";
import Carousel from "../Components/Carousel";

const Pascal = () => {
  return (
    <m.div
      initial={{ opacity: 0.6 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeIn" }}
      exit={{ opacity: 1 }}
      className="bg-[#849E8F] relative"
    >
      <Carousel />
      <AboutPascal />
      <Footer />
    </m.div>
  );
};

export default Pascal;
