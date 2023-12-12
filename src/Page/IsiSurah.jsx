import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Aos from "aos";
import "aos/dist/aos.css";
import TitikUi from "../Components/TitikUi";
const IsiSurah = () => {
  const { id } = useParams();
  const [surahData, setSurahData] = useState(null);

  useEffect(() => {
    Aos.init();
  },[])

  useEffect(() => {
    const fetchSurahData = async () => {
      try {
        const response = await axios.get(
          `https://quran-api.santrikoding.com/api/surah/${id}`
        );
        setSurahData(response.data);
      } catch (error) {
        console.error("Error fetching surah data:", error);
      }
    };

    fetchSurahData();
  }, [id]);

  if (!surahData) {
    return;
  }

  

  return (
    <div className=" scroll-smooth text-black">
      <div className=" flex p-4 justify-between" data-aos="fade-up">
        <TitikUi/>
      <p className=" text-center font-bold text-sm p-4 md:text-2xl">بِسْــــــــــــــــــمِ اللهِ الرَّحْمَنِ الرَّحِيْمِ</p>
      <p className=" text-lg font-bold md:text-2xl">{surahData.nama}</p>
      
      </div>
      {surahData.ayat.map((ayat) => (
        
        <div key={ayat.id} data-aos = "fade-up">
          
          <div className=" bg-warnalist p-4 mx-7 md:p-3 md:mx-10 rounded-xl space-y-4 mt-7 ">
            <audio src={ayat.audio}></audio>
          <p className=" text-end font-bold text-xl">{ayat.ar}</p>
          <p className=" font-bold text-sm">{ayat.idn}</p>
          <p className=" font-bold">Ayat ke: {ayat.nomor}</p>
         </div>
        </div>
      ))}
    </div>
  );
};

export default IsiSurah;
