import { motion as m } from "framer-motion";
import Navbar from "../Components/Navbar";
import FromUs from "../Components/FromUs";
import Footer from "../Components/Footer";

const Press = () => {
  return (
    <m.div
      initial={{ opacity: 0.9 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeIn" }}
      exit={{ opacity: 1 }}
      className="bg-[#849E8F]"
    >
      <Navbar />
      <FromUs />
      <Footer />
    </m.div>
  );
};

export default Press;
