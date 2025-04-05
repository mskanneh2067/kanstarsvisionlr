import { useState } from "react";
import { imageDB } from "../../data/imageData";

const Challenges = () => {
  const getRanNum = (length) => {
    return Math.floor(Math.random() * length);
  };

  const randomImage = getRanNum(imageDB.length);
  const defaultImage = imageDB[randomImage].url;
  console.log(defaultImage);
  const [image, setImage] = useState(defaultImage);

  const changeImageHandler = ()=>{
    const randomImage = getRanNum(imageDB.length);
    const defaultImage = imageDB[randomImage].url;
    setImage(defaultImage)
  
  }

  const [name,setName] = useState('')
  const [quote,setQuote] = useState('')


  const inputNameHandler = (e)=>{
    
   setName(e.target.value)
   
  }
  const inputQuoteHandler = (e)=>{
   setQuote(e.target.value)
  }
  return (
    <>
      <section className="w-full  bg-slate-200 mb-5">
        <div className="w-1/2  mx-auto bg-green-300">
          <div className="p-2 w-full ">
            <input
              type="text"
              placeholder="Enter Quote"
              className="p-2 w-full"
              onChange={inputQuoteHandler }
            />
          </div>
          <div className="p-2 w-full ">
            <input
              type="text"
              placeholder="Enter Name"
              className="p-2 w-full"
              onChange={inputNameHandler}
            />
          </div>
          <div className="p-2 w-full ">
            <button 
            className="w-full p-1 bg-blue-700 text-white text-[10px] font-bold rounded-sm"
            onClick={changeImageHandler}
            >
              Change Image Background
            </button>
          </div>
        </div>
      </section>

      <section className="w-full bg-orange-300">
        <div className="relative  mx-auto w-1/2">
          <img src={image} alt="" />
          <div className="absolute top-5 left-64 w-1/2 bg-yellow-500 pl-3">

          <p className="text-lg font-bold mb-2">"{quote}"</p>
          <p className="text-lg font-bold">Author: {name}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Challenges;
