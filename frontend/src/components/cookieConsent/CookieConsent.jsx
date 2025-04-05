import { Link } from "react-router-dom";

const CookieConsent = ({ openCookie }) => {
  return (
    <div className="z-107 fixed w-full h-full  top-0 left-0 ">
      <div className="z-108 w-full md:max-w-[467px] border shadow-md  p-5 rounded-md grid grid-cols-1 mx-0 md:mx-auto md:mt-[20vh] md:flex bg-white">
        <div className="flex-[2]">
          <h1 className="text-lg font-bold font-sans p-3">Kanstars Vision</h1>
          <p className="text-sm p-3 flex flex-wrap text-[#002c38] font-medium">
            This website uses cookies and other tracking technologies to enhance
            user experience and to analyze performance and traffic on our
            website.We also share information about your use of our site with
            our social media, advertising and analytics partners. If we have
            detected an opt-out preference signal then it will be honored.
            Further information are available in our{" "}
            <Link to="/privacy">
              <span className="text-[rgb(255,0,0)] font-bold">
                Privacy Policy
              </span>
            </Link>
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

export default CookieConsent;
