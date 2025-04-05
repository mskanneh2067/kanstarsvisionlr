import { FaCheck } from "react-icons/fa";
import { IoIosWarning } from "react-icons/io";
const Activation = () => {
  return (
    <div className="z-106 fixed top-0 bottom-0 left-0 w-full h-full bg-[rgb(118,134,146)]">
      <div className="mt-10  w-full md:w-[50%] rounded-sm shadow-sm bg-white mx-auto">
        <h1
          className="p-5 text-2xl md:text-4xl mb-2 font-light text-[#111111] font-sans"
        >
          New registration
        </h1>
        <hr className="mb-5 w-full" />
        <div className="p-5">
          <div className="flex items-center justify-between  bg-[rgb(40,167,69)] text-white rounded-sm p-5">
            <p className="text-lg">
              <span className="font-semibold">
                Your registration has been submitted!
              </span>{" "}
              Now you have to activate your user account.
            </p>
            <FaCheck className="text-[rgb(126,202,143)] text-2xl" />
          </div>
          <div className="flex items-center justify-between border border-gray-400 rounded-sm p-5 mt-5">
            <p className="text-lg">
              <span className="font-bold">
                Important:
              </span>{" "}
              Your registration is only complete after you have confirmed your email address.
            </p>
            <IoIosWarning className="text-[rgb(181,181,181)] text-2xl" />
          </div>
          <p className="mt-5">Please check the inbox of the email account you registered with. We have sent you a message containing a confirmation link. This link will be active for 48 hours, starting now. After you have confirmed your email address, your user account is activated. Then you will be automatically redirected to the login page. </p>
          <p className="mt-5"><span className="font-bold">Note:</span> Sometimes there may be a delay in the delivery of the confirmation email. Should you not have received an email, please check the spam/junk mail folder of your email account or contact support@kvilr.com</p>
        </div>
      </div>
    </div>
  );
};

export default Activation;
