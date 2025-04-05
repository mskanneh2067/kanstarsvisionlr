import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useVerifyEmailMutation } from "../../features/auth/authsSlice";
import { toast } from "react-toastify";
import logo from "../../assets/images/logo.png";
import Loader from "../../components/loader/Loader";
const VerifyEmail = () => {
  const [verifyEmail, { isLoading }] = useVerifyEmailMutation();

  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);
  const navigate = useNavigate();

  const handleChange = (index, value) => {
    const newCode = [...code];

    // Handle pasted content
    if (value.length > 1) {
      const pastedCode = value.slice(0, 6).split("");
      for (let i = 0; i < 6; i++) {
        newCode[i] = pastedCode[i] || "";
      }
      setCode(newCode);

      // Focus on the last non-empty input or the first empty one
      const lastFilledIndex = newCode.findLastIndex((digit) => digit !== "");
      const focusIndex = lastFilledIndex < 5 ? lastFilledIndex + 1 : 5;
      inputRefs.current[focusIndex].focus();
    } else {
      newCode[index] = value;
      setCode(newCode);

      // Move focus to the next input field if value is entered
      if (value && index < 5) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const verificationCode = code.join("");
    console.log(typeof verificationCode);
    try {
      await verifyEmail({
        verificationCode,
      }).unwrap();
      navigate("/email-verified");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
      console.log(err?.data?.message || err.error);
    }
  };

  // Auto submit when all fields are filled
  useEffect(() => {
    if (code.every((digit) => digit !== "")) {
      submitHandler(new Event("submit"));
    }
  }, [code]);
  return (
    <>
      <div className="z-106 fixed top-0 bottom-0 left-0 w-full h-full bg-[#f5f3f0]">
        <div className="w-full h-32 flex items-center justify-center bg-[#002c38]">
          <Link to="/" className="my-1">
            <div className="flex  items-center cursor-pointer ">
              <img src={logo} alt="" className="w-16 lg:w-20" />
            </div>
          </Link>
        </div>
        <form
          onSubmit={submitHandler}
          className="w-full p-5 flex flex-col items-center md:min-w-[344px] md:max-w-[344px] md:mx-auto -mt-7  bg-white rounded-md border shadow-md "
        >
          <div className="flex space-x-2 md:space-x-1 mb-5">
            {code.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                maxLength="6"
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-12 h-12 text-center text-xl font-bold bg-gray-700 text-white border-2 border-gray-600 rounded-lg focus:border-green-500 focus:outline-none"
              />
            ))}
          </div>

          <div className="flex items-center mb-2">
            <Link
              to="/forgot-password"
              className="text-sm text-center p-2 mb-3 text-[#002c38] font-normal  hover:underline"
            >
              Resend Email Verification
            </Link>
          </div>

          <div className="w-full text-center my-3">
            <p className=" text-[#002c38] font-semibold text-sm mb-3">
              Don&apos;t have an account?
            </p>
            <Link to="/createaccount">
              <p className=" rounded-md p-2  bg-[rgb(0,205,0)] text-white font-bold ">
                Create new account
              </p>
            </Link>
          </div>
        </form>
        {isLoading && <Loader />}
      </div>
    </>
  );
};

export default VerifyEmail;
