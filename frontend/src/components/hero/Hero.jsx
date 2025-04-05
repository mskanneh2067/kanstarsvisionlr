import React, { useState, useEffect } from "react";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { FaRegCircle, FaRegDotCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
const Hero = ({ hero }) => {
  const [imgIdx, setImgIdx] = useState(0);
  const sLength = hero.length;

 /*  const prevSlide = () => {
    setImgIdx(imgIdx === 0 ? sLength - 1 : imgIdx - 1);
   
  }; */

  const prevSlide = () => {
    if (imgIdx === 0) {
      setImgIdx(sLength - 1)
      return
    }
    setImgIdx(imgIdx - 1)
  }


  const nextSlide  = () => {
    if (imgIdx === sLength - 1) {
      setImgIdx(0)
      return
    }
    setImgIdx(imgIdx + 1)
  }

 /*  const nextSlide = () => {
    setImgIdx(imgIdx === sLength - 1 ? 0 : imgIdx + 1);

   
  }; */

 
  const autoScroll = true;
  let slideInterval;
  let IntervalTime = 6747;

  function auto() {
    slideInterval = setInterval(nextSlide, IntervalTime);
  }

  useEffect(() => {
    setImgIdx(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [imgIdx]);

  return (
    <section
      aria-label="Image Slider"
      className="relative w-full h-full mt-[100px]"
    >
      <div className="w-full h-full flex overflow-hidden">
        {hero.map((e, i) => (
          <>
            <img
              src={e.url}
              alt={e.alt}
              className="w-full h-full "
              key={e.id}
              aria-hidden={imgIdx !== i}
              style={{
                translate: `${-100 * imgIdx}%`,
                flexShrink: "0",
                flexGrow: "0",
                transition: "translate 712ms ease-in-out",
              }}
            />

            {i === imgIdx && (
              <div
                id="content"
                className="flex justify-center absolute top-10 left-[52px]"
              >
                <div className=" block p-6 rounded-lg shadow-lg bg-white max-w-sm">
                  <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
                    {e.title}
                  </h5>
                  <p className="text-gray-700 text-base mb-4">{e.desc}</p>

                  <Link
                    to={e.calltoactionlink}
                    className="inline-block px-6 py-2.5 bg-[#CC0000] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#CC0000] hover:shadow-lg focus:bg-[#CC0000] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#CC0000] active:shadow-lg transition duration-150 ease-in-out cursor-pointer"
                  >
                    {e.calltoaction}
                  </Link>
                </div>
              </div>
            )}
          </>
        ))}
      </div>
      <button
        style={{ transition: "background-color 100ms ease-in-out" }}
        onClick={prevSlide}
        className="block absolute top-0 bottom-0 p-4 cursor-pointer left-0 hover:bg-[rgb(0,0,0,0.2)]"
        aria-label="View Previous Image"
      >
        <AiOutlineLeft aria-hidden className="bg-black text-white w-8 h-8" />
      </button>

      <button
        style={{ transition: "background-color 100ms ease-in-out" }}
        onClick={nextSlide}
        className="block absolute top-0 bottom-0 p-4 cursor-pointer right-0  hover:bg-[rgb(0,0,0,0.2)]"
        aria-label="View Next Image"
      >
        <AiOutlineRight aria-hidden className="bg-black text-white w-8 h-8" />
      </button>
      <div className="absolute flex bottom-[.5rem] left-[35%] lg:left-[40%]  -translate-y-[-50%] gap-[1rem] pb-1">
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
    </section>
  );
};

export default Hero;
