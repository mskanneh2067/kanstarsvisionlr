import React, { useState, useEffect } from "react";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { FaRegCircle, FaRegDotCircle } from "react-icons/fa";




const Hero = ({ hero }) => {
  const sLength = hero.length
  const [imgIdx, setImgIdx] = useState(0);


  const prevHandler = () => {
    if (imgIdx === 0) {
      setImgIdx(sLength - 1)
      return
    }
    setImgIdx(imgIdx - 1)
  }
  const nextHandler = () => {
    if (imgIdx === sLength - 1) {
      setImgIdx(0)
      return
    }
    setImgIdx(imgIdx + 1)
  }




  return (
    <>
      <section className='relative w-full  bg-slate-400 overflow-hidden mt-[130px]'>

        <div

          className="flex w-full max-h-[447px]">

          <>
            <div className="">
              <img src={hero[imgIdx].url} alt="slider" className="object-cover"/>
            </div>

            <div className="bg-green-400 w-[calc(100%-859px)]">
              {hero[imgIdx].title}
            </div>
          </>





        </div>

      </section>



      <div className='relative w-full mb-11 flex items-center justify-center  '>


        <button
          style={{ transition: "background-color 100ms ease-in-out " }}
          onClick={prevHandler}
          className="p-4 cursor-pointer hover:bg-[#00000033] "
          aria-label="View Previous Image"
        >
          <AiOutlineLeft aria-hidden className=" text-white w-8 h-8 bg-[#002c38]" />
        </button>


        <div className=" flex items-center  gap-[1rem]">
          {hero.map((_, i) => (
            <button
              onClick={() => setImgIdx(i)}
              className="block cursor-pointer w-4 h-4"
              aria-label={`View Image ${i + 1}`}
            >
              {i === imgIdx ? (
                <FaRegDotCircle
                  aria-hidden
                  className=" text-white rounded-full bg-black w-full h-full hover:scale-[1.2] transition duration-[100ms] ease-in-out"
                />
              ) : (
                <FaRegCircle
                  aria-hidden
                  className=" text-white rounded-full bg-black w-full h-full hover:scale-[1.2] transition duration-[100ms] ease-in-out"
                />
              )}
            </button>
          ))}
        </div>


        <button
          style={{ transition: "background-color 100ms ease-in-out" }}
          onClick={nextHandler}
          className="p-4 cursor-pointer  hover:bg-[#00000033]"
          aria-label="View Next Image"
        >
          <AiOutlineRight aria-hidden className=" text-white w-8 h-8 bg-[#002c38]" />
        </button>


      </div>
    </>
  )
}

export default Hero;