import { useEffect, useState } from "react";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { FaRegCircle, FaRegDotCircle } from "react-icons/fa";
const ImageSlider = ({ url }) => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errMsg, setErrMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchImages = async (getUrl) => {
    try {
      setLoading(true);

      const response = await fetch(getUrl);
      const data = await response.json();
      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (err) {
      setErrMsg(err.message);
    }
  };

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);

  if (loading) {
    return <div>Loading data ! Please wait.</div>;
  }

  if (errMsg !== null) {
    return <div>Error Occured ! {errMsg}</div>;
  }

  const handlePrev = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };

  const handleNext = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  };
  return (
    <section className="relative flex justify-center items-center w-[600px] h-[450px] mx-auto">
      <button
        style={{ transition: "background-color 100ms ease-in-out" }}
        className="absolute left-4 w-8 h-8  p-4 cursor-pointer  hover:bg-[rgb(0,0,0,0.2)]"
        aria-label="View Previous Image"
        onClick={handlePrev}
      >
        <AiOutlineLeft aria-hidden className="bg-black text-white w-8 h-8" />
      </button>
      {images && images.length
        ? images.map((e, i) => (
            <img
              src={e.photo}
              alt={e.photo}
              key={e._id}
              className={
                currentSlide === i
                  ? "rounded-[0.5rem] shadow-sm w-full h-full"
                  : "rounded-[0.5rem] shadow-sm w-full h-full hidden"
              }
            />
          ))
        : null}

      <button
        style={{ transition: "background-color 100ms ease-in-out" }}
        className="absolute right-4 w-8 h-8  p-4 cursor-pointer   hover:bg-[rgb(0,0,0,0.2)]"
        aria-label="View Next Image"
        onClick={handleNext}
      >
        <AiOutlineRight aria-hidden className="bg-black text-white w-8 h-8" />
      </button>
      <div className="absolute flex bottom-[1rem]  ">
        {images && images.length
          ? images.map((_, i) => (
              <button
                key={i}
                className="block cursor-pointer w-4 h-4"
                onClick={() => setCurrentSlide(i)}
              >
                <FaRegCircle
                  aria-hidden
                  className={
                    currentSlide === i
                      ? "text-white rounded-full bg-black w-full h-full hover:scale-[1.2] transition duration-[100ms] ease-in-out"
                      : "text-black rounded-full bg-white w-full h-full hover:scale-[1.2] transition duration-[100ms] ease-in-out"
                  }
                />
              </button>
            ))
          : null}
      </div>
    </section>
  );
};

export default ImageSlider;
