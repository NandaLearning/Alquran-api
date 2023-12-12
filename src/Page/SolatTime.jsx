import { Link } from "react-router-dom"
import CardLoby from "../Components/CardLoby"
import { useEffect } from "react"
import TitikUi from "../Components/TitikUi"
import Aos from "aos"
import "aos/dist/aos.css"
import NavigasiSolat from "../Components/Fitur/NavigasiSolat"
import NightBrightMode from "../Components/Fitur/NightBrightMode"
import Footer from "../Components/Footer"

const SolatTime = () => {

    useEffect(() => {
        Aos.init()
    },[])

  return (
    <div className=" text-black" >
        <div className=" flex justify-between p-4">
            <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" data-aos-duration="1000">
            <TitikUi/>
            </div>
            <div className=" mt-4" data-aos="fade-up" data-aos-duration="2000">
            <Link to={"/"}><NavigasiSolat /></Link>
            </div>
            <NightBrightMode/>
        </div>
        <div className=" p-4 flex justify-center items-center mt-24" data-aos="fade-up" data-aos-duration="2000">
          <Link to={"/listwaktusolat"}><CardLoby img="time.png" text="وقت الصلاة" text2="Solat Time"/></Link>  
        </div>

        <Footer/>

    </div>
  )
}

export default SolatTime 