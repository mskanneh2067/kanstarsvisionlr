import { CiCircleCheck } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
const EmailVerified = () => {
const navigate = useNavigate()
  setTimeout(()=>{
      navigate('/login')
  },5000)
  return (
    <div className="z-106 fixed top-0 bottom-0 left-0 w-full h-full bg-[#002c38] flex items-center justify-center ">
      <div className="w-full min-h-screen flex flex-col items-center justify-center md:min-w-[344px] md:max-w-[344px] md:min-h-[50vh] md:max-h-[30vh]  bg-white border shadow-md text-black m-2">
        <div className="w-full flex justify-center items-center mb-5">
          <CiCircleCheck className="text-green-500 text-9xl" />
        </div>
        <p className="font-normal text-gray-500 text-xl mb-5">Email Verified</p>
        <p className="font-normal text-gray-400 text-base">Your email address was successfully verified.</p>
      </div>
    </div>
  );
};

export default EmailVerified;
