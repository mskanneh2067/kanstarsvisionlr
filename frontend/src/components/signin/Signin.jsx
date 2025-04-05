import logo from "../../assets/images/logo.png";
import Loader from "../loader/Loader";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useLoginMutation } from "../../features/auth/authsSlice";
import { setCredentials } from "../../features/users/userSlice";
import { toast } from "react-toastify";


const Signin = () => {
  const [viewpwd, setViewPWD] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login, { isLoading }] = useLoginMutation();
  const { userInfo } = useSelector((state) => state.user);

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate("/");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
      // console.log(err?.data?.message || err.error);
    }
  };
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
          className="w-full p-5 flex flex-col items-center min-w-[344px] max-w-[344px] mx-auto -mt-7 bg-white rounded-md border shadow-md "
        >
          <div className="w-full my-1">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              autoComplete="off"
              placeholder="Email"
              required
              className=" w-full rounded-md border p-2 mb-3 bg-[rgb(234,237,255)] placeholder:font-normal"
            />
          </div>

          <div className="relative w-full my-1">
            <input
              type={viewpwd ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              autoComplete="off"
              placeholder="Password"
              required
              className="w-full rounded-md border p-2 mb-3 bg-[rgb(234,237,255)] placeholder:font-normal"
            />
            {viewpwd ? (
              <FaEye
                className="absolute top-3 right-2 cursor-pointer"
                onClick={() => setViewPWD(false)}
              />
            ) : (
              <FaEyeSlash
                className="absolute top-3 right-2 cursor-pointer"
                onClick={() => setViewPWD(true)}
              />
            )}
          </div>

          <div className="flex items-center mb-6">
            <Link
              to="/forgot-password"
              className="text-sm text-center p-2 mb-3 text-[#002c38] font-normal  hover:underline"
            >
              Forgot password?
            </Link>
          </div>
          <button
            type="submit"
            className="w-full rounded-md p-2 mb-3  bg-[#002c38] text-white font-bold"
          >
            Login
          </button>

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

export default Signin;
