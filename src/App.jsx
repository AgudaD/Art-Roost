import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutUs from "./Pages/AboutUs";
import Press from "./Pages/Press";
import Pascal from "./Pages/Pascal";
import Oluwatobiloba from "./Pages/Oluwatobiloba";
import LoadingScreen from "./Components/LoadingScreen";
import Carousel from "./Components/Carousel";


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <>
      {loading === false ? (
        <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/press" element={<Press />} />
        <Route path="/pascal" element={<Pascal />} />
        <Route path="/oluwatobiloba" element={<Oluwatobiloba />} />
      </Routes>
      ) : (<LoadingScreen />)}
      {/* <Carousel /> */}
    </>
  );
}

export default App;