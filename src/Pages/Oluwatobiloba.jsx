import { motion as m } from "framer-motion";
import AboutOluwatobiloba from "../Components/AboutOluwatobiloba";
import Footer from "../Components/Footer";
import DFDF from "./../Components/DFDF";

const Oluwatobiloba = () => {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75 }}
      className="bg-[#849E8F]"
    >
      <AboutOluwatobiloba />
      <Footer />
    </m.div>
  );
};

export default Oluwatobiloba;
