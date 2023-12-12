import TitikUi from "../Components/TitikUi"

const Settings = () => {
  return (
    <div className="flex justify-center items-center p-20 drop-shadow-xl text-black">
           <div className=" w-[1000px] h-96 bg-white rounded-3xl">
           <div className=" p-5 font-bold text-2xl">
            <div className=" flex justify-between">
            <p>Settings</p>
            <TitikUi/>
            </div>
        </div>
    <div className=" bg-white w-full border h-20 text-black">
      <div className=" p-4 justify-between flex">
        <img src="bright.png" className=" w-8 md:w-12"></img>
        <p className=" font-bold text-lg md:text-xl">Bright/Dark Mode</p>
        <input type="checkbox" className="toggle bg-white"  />
      </div>
    </div>
    <div className=" bg-white w-full border h-20">
    </div>
    </div>
    </div>
 
  )
}

export default Settings
