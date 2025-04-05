import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRegisterMutation } from "../../features/auth/authsSlice";
import { setCredentials } from "../../features/users/userSlice";
import { toast } from "react-toastify";
import Loader from "../../components/loader/Loader";
import logo from "../../assets/images/logo.png";
const Signup = () => {
  const [firstName, setFname] = useState("");
  const [middleName, setMname] = useState("");
  const [lastName, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [register, { isLoading }] = useRegisterMutation();
  const { userInfo } = useSelector((state) => state.user);
  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
    } else {
      try {
        const res = await register({
          firstName,
          middleName,
          lastName,
          email,
          password,
          confirmPassword,
        }).unwrap();
        dispatch(setCredentials({ ...res }));
        navigate("/");
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };
  return (
    <div className="bg-Hero h-screen  w-screen flex items-center justify-center ">
      <div className="z-101 container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2 bg-white">
        <h3 className="text-headingColor text-[16px] leading-9 font-bold mb-5">
          Welcome! Create an account
        </h3>
        <Link to="/">
          <img src={logo} alt="logo" className="w-16" />
        </Link>
        <form className="flex flex-col gap-5 p-4 " onClick={submitHandler}>
          <label className="text-gray-700 text-sm font-bold flex-1">
            First Name
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFname(e.target.value)}
              required
              className="border rounded w-full py-1 px-2 font-normal"
            ></input>
          </label>
          <label className="text-gray-700 text-sm font-bold flex-1">
            Middle Name{" "}
            <span className="text-gray-400 font-medium">(Optional)</span>
            <input
              type="text"
              value={middleName}
              onChange={(e) => setMname(e.target.value)}
              required
              className="border rounded w-full py-1 px-2 font-normal"
            ></input>
          </label>
          <label className="text-gray-700 text-sm font-bold flex-1">
            Last Name
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLname(e.target.value)}
              required
              className="border rounded w-full py-1 px-2 font-normal"
            ></input>
          </label>
          <label className="text-gray-700 text-sm font-bold flex-1">
            Email
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border rounded w-full py-1 px-2 font-normal"
            ></input>
          </label>
          <label className="text-gray-700 text-sm font-bold flex-1">
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="border rounded w-full py-1 px-2 font-normal"
            ></input>
          </label>
          <label className="text-gray-700 text-sm font-bold flex-1">
            Confirm Password
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="border rounded w-full py-1 px-2 font-normal"
            ></input>
          </label>
          <div className="text-[12px] ">
            <button
              type="submit"
              className="w-full bg-[#003580d5] text-white p-2 font-bold hover:bg-[#003580] text-lg"
            >
              Sign Up
            </button>
          </div>
        </form>
        {isLoading && <Loader />}
        <div>
          <span className="text-gray-400 font-medium">
            Already have an account?
          </span>{" "}
          <Link
            className="no-underline border-b border-blue text-blue-800 font-bold"
            to="/login"
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
