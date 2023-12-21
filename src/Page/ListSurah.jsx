import axios from "axios";
import Aos from "aos";
import "aos/dist/aos.css";
import Search from "../Components/Fitur/Search";
import { Link } from "react-router-dom";
import Loading from "../Components/Fitur/Loading";
import { useState,useEffect } from "react";
import Footer from "../Components/Footer";

const ListSurah = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://quran-api.santrikoding.com/api/surah")
      .then((res) => {
        setData(res.data);
        setFilteredData(res.data); // Set filteredData initially with all surahs
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false); // Set loading to false after data is fetched
      });
  }, []);

  useEffect(() => {
    Aos.init();
  }, []);

  const [mode] = useState(localStorage.getItem("mode") === "dark");

  useEffect(() => {
    // Filter surahs based on the search query
    const filteredSurahs = data.filter((item) => {
      return (
        item.nama.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.nama_latin.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });
    setFilteredData(filteredSurahs);
  }, [searchQuery, data]);

  return (
    <div className={`bg-latar min-h-screen ${mode && "bg-slate-600"}`}>
      <div className="p-4 justify-between flex flex-col w-full">
        <div className="mt-5">
          <Search
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {loading ? (
        <div className=" p-4 justify-center items-center grid">
          <Loading/>
          </div>
      ) : (
        filteredData.map((item) => (
          <Link key={item.id} to={`/isisurah/${item.nomor}`}>
            <div className="p-3 mr-5 justify-end items-end grid">
              <div
                className="w-[300px] h-28 bg-warnalist text-white rounded-xl md:w-[500px]"
                data-aos="fade-up"
              >
                <div className="flex justify-between">
                  <p className="text-start p-2 font-bold">{item.jumlah_ayat}</p>
                  <p className="text-end p-3 font-bold text-xl md:text-3xl">
                    {item.nama}
                  </p>
                </div>
                <p className="font-bold text-lg md:text-xl text-start p-3">
                  {item.nama_latin}
                </p>
              </div>
            </div>
          </Link>
        ))
      )}
      <div className=" mt-12">
        <Footer/>
      </div>
    </div>
  );
};

export default ListSurah;
