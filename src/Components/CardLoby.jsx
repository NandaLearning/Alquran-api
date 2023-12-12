const CardLoby = (props) => {
  return (
    <div className=" w-80 h-40 md:w-[650px] md:h-96 xl:w-[800px] bg-white drop-shadow-lg rounded-xl font-bold">
      <div className=" p-1 ml-2">
        <img src={`${props.img}`} className=" float-left h-40 md:h-96"></img>
        <p className=" mt-8 text-lg md:text-5xl  xl:text-7xl p-1">{`${props.text}`}</p>
        <p className="  mt-1 text-lg md:text-4xl xl:text-7xl p-1">{`${props.text2}`}</p>

      </div>
    </div>
  )
}

export default CardLoby
