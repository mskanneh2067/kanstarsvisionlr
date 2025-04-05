import { useState } from "react";
// import Request from "../quote/RequestMeeting";
import app from "../../assets/images/src/landing/app.png";
const Landing = () => {
  const [request, setRequest] = useState(false);
  const closeHandler = () => setRequest(false);
  return (
    <>
      <section className="w-full h-full mt-[160px]  md:mt-[150px] mb-16  md:max-h-[422px] ">
        <div className="max-w-[1259px] min-h-[427px] bg-[#cdcdcd] mx-auto grid grid-cols-1 md:grid-cols-2 rounded-sm">
          <div className="p-8 sm:p-8 md:p-11">
            <h1 className="text-xl  md:text-1xl font-extrabold font-sans ">
              We Want To Be Part
              <br /> of Your Success
            </h1>

            <p className="font-sans tracking-wide pt-5  md:pt-7 text-lg font-medium">
              <span className="font-extrabold text-lg  md:text-2xl ">
                Kanstars Vision
              </span>{" "}
              products and solutions help customers minimized ICT cost at the
              same time not compromising quality. Our mindset about ICT
              Infrastructure solutions is helping customer mitigate risk, remain
              compliant, and grow revenues.{" "}
            </p>

          {/*   <div className="" onClick={() => setRequest(true)}>
              <button className="text-white bg-black rounded-md p-4 text-lg font-extrabold uppercase font-sans mt-5">
                Submit your Request
              </button>
            </div> */}
          </div>

          <div className="item-center justify-center ">
            <img
              src={app}
              alt="Mobile Applications Development Pictures"
              className=" w-full h-full block object-cover"
            />
          </div>
        </div>
      </section>
      {/* <Request onClose={closeHandler} visible={request} /> */}
    </>
  );
};

export default Landing;
