import { motion as m } from "framer-motion";
import AboutPascal from "../Components/AboutPascal";
import Footer from "../Components/Footer";

const Pascal = () => {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75 }}
      className="bg-[#849E8F]"
    >
      <AboutPascal />
      <Footer />
    </m.div>
  );
};

export default Pascal;
