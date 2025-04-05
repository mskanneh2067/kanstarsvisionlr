import { Link } from "react-router-dom";

const Cookiebar = ({ openCookie }) => {
  return (
    <div className="z-107 fixed w-full h-full  top-0 left-0 ">
      <div className="z-108 w-full md:max-w-[467px] border shadow-md  p-5 rounded-md grid grid-cols-1 mx-0 md:mx-auto md:mt-[20vh] md:flex bg-white">
        <div className="flex-[2]">
          <h1 className="text-lg font-bold font-sans p-3">Kanstars Vision</h1>
          <p className="text-sm p-3 flex flex-wrap text-[#002c38] font-medium">
            We use cookies to personalize content and ads, to provide social
            media features and to analyze our traffic. Some of these cookies
            also help improve your user experience on our websites, assist with
            navigation and your ability to provide feedback, and assist with our
            promotional and marketing efforts. Please read our{" "}
            <Link to="/privacy" className="text-read font-normal">
              Cookie Policy{" "}
            </Link>
            for a more detailed description and click on the settings button to
            customize how the site uses cookies for you.
          </p>
        </div>
        <div className="grid grid-cols-1 flex-[1] gap-1 p-7  ">
          <button className="text-sm border-2 border-[#002c38] max-h-11 p-1 text-black font-bold">
            Customize
          </button>
          <button className="text-sm  border-2 border-[#002c38] max-h-11 p-1 bg-[rgb(255,40,40)] text-white font-bold">
            Reject All
          </button>
          <button className="text-sm  border-2 border-[#002c38] max-h-11 p-1 bg-[rgb(0,205,0)] text-white font-bold">
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cookiebar;
