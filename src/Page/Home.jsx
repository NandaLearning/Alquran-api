import { Link } from "react-router-dom"
import CardLoby from "../Components/CardLoby"
import { useEffect } from "react"
import Navigasi from "../Components/Fitur/Navigasi"
import TitikUi from "../Components/TitikUi"
import Aos from "aos"
import "aos/dist/aos.css"
import SettingsButton from "../Components/SettingsButton"

const Home = () => {

    useEffect(() => {
        Aos.init()
    },[])



  return (
    <div className=" text-black">
        <div className=" flex justify-between p-4">
            <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" data-aos-duration="1000">
            <TitikUi/>
            </div>
            <div className=" mt-4" data-aos="fade-up" data-aos-duration="2000">
            <Link to={"/solattime"}><Navigasi/></Link>
            </div>
            <img src="sleep.png" className=" h-5 md:h-8"></img>
        </div>
        <div className=" p-4 flex justify-center items-center mt-24" data-aos="fade-up" data-aos-duration="2000">
          <Link to={"/listsurah"}><CardLoby img="lampu.png" text="القرآن الكريم" text2="AL-Quran"/></Link>  
        </div>

        <div className=" p-10 justify-end items-end flex my-20">
       <Link to={"/settings"}><SettingsButton/></Link> 
        </div>

    </div>
  )
}

export default Home
