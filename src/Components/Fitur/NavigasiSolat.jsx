import ButtonNavigasi from "./ButtonNavigasi";
const NavigasiSolat = () => {
    return (
      <div className="w-60 h-10 bg-white rounded-3xl drop-shadow-xl">
        <div className="flex justify-center items-center space-x-3">
            <div className=" mt-2">
        <ButtonNavigasi text="Home" color="text-slate-500"/>
        <ButtonNavigasi bg="bg-black" text="Solat Time" color="text-white" />
            </div>
        </div>
      </div>
    );
  };
  
  export default NavigasiSolat;
  