import { useState } from "react";
import { imageDB } from "../../data/imageData";

const Challenges = () => {
  const getRanNum = (length) => {
    return Math.floor(Math.random() * length);
  };

  let randomImage = getRanNum(imageDB.length);
  let defaultImage = imageDB[randomImage].url;

  const [image, setImage] = useState(defaultImage);
  const [name, setName] = useState("Type Your name in the name field");
  const [quote, setQuote] = useState("Type your quote in the quote field");





  const nameHandler = (e)=>{
    setName(e.target.value)
  }
  const quoteHandler = (e)=>{
    setQuote(e.target.value)
  }
  const changeImageHandler = (e) => {
    e.preventDefault();

    let randomImage = getRanNum(imageDB.length);
    let defaultImage = imageDB[randomImage].url;

    setImage(defaultImage);
    
  };

  return (
    <div className="container mx-auto  md:py-32 md:px-96 mt-32">
      <section className="h-screen">
        <form>
          <div className="w-full h-full mb-5">
            <label className="text-lg font-bold">
              First Name:
              <input type="text" className="p-2 w-full"  onChange={nameHandler}/>
            </label>
          </div>
          <div className="w-full h-full mb-5">
            <label className="text-lg font-bold">
              Quote:
              <input type="text" className="p-2 w-full" onChange={quoteHandler}/>
            </label>
          </div>

          <div className="mb-5">
            <button
              className="w-full bg-blue-600 text-white py-2 rounded-md font-bold"
              onClick={changeImageHandler}
            >
              Change Image
            </button>
          </div>

          <div className="relative w-full h-10 bg-black ">
            <img src={image} alt="image" />
            <div className="absolute top-5 left-9 ">
              
              <div className="font-semibold p-5  bg-white"> " {quote} "</div>
              
              <div className=" font-semibold p-5 bg-white"><span className="font-bold p-1 mr-2 bg-yellow-400">By:</span> {name}</div>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Challenges;
