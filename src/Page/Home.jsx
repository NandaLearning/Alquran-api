// Home.js
import { Link } from "react-router-dom";
import CardLoby from "../Components/CardLoby";
import { useEffect, useState } from "react";
import Navigasi from "../Components/Fitur/Navigasi";
import TitikUi from "../Components/TitikUi";
import Aos from "aos";
import "aos/dist/aos.css";
import NightBrightMode from "../Components/Fitur/NightBrightMode";
import Footer from "../Components/Footer";

const Home = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  // Mengambil mode dari local storage saat komponen dimuat
  const initialMode = localStorage.getItem("mode") === "dark";
  let [mode, setMode] = useState(initialMode);

  // Mengubah mode dan menyimpannya di local storage
  const toggleMode = () => {
    const newMode = !mode;
    setMode(newMode);
    localStorage.setItem("mode", newMode ? "dark" : "light");
  };

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden text-black">
      <div className="flex-grow">
      <div className="flex justify-between p-4">
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
        >
          <TitikUi />
        </div>
        <div className="mt-4" data-aos="fade-up" data-aos-duration="2000">
          <Link to={"/solattime"}>
            <Navigasi />
          </Link>
        </div>
        <button onClick={toggleMode} data-aos="fade-left" data-aos-duration="2000">
          <NightBrightMode />
        </button>
      </div>
      <div
        className="p-4 flex justify-center items-center mt-24"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <Link to={"/listsurah"}>
          <CardLoby img="lampu.png" text="القرآن الكريم" text2="AL-Quran" />
        </Link>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
