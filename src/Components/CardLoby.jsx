const CardLoby = (props) => {
  return (
    <div className=" w-80 h-40 md:w-96 md:h-40  bg-white drop-shadow-lg rounded-xl font-bold">
      <div className=" p-1 ml-2">
        <img src={`${props.img}`} className=" float-left h-40"></img>
        <p className=" mt-8 text-lg md:text-2xl">{`${props.text}`}</p>
        <p className="  mt-1 text-lg md:text-4xl">{`${props.text2}`}</p>

      </div>
    </div>
  )
}

export default CardLoby
