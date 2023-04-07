import { motion as m } from "framer-motion";
import CarouselT from "../Components/CarouselT";
import AboutOluwatobiloba from "../Components/AboutOluwatobiloba";
import Footer from "../Components/Footer";

const Oluwatobiloba = () => {
  return (
    <m.div
      initial={{ opacity: 0.6 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeIn" }}
      exit={{ opacity: 1 }}
      className="bg-[#849E8F]"
    >
      <CarouselT />
      <AboutOluwatobiloba />
      <Footer />
    </m.div>
  );
};

export default Oluwatobiloba;
