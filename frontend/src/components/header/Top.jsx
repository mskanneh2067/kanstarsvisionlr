// import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLogoutMutation } from "../../features/auth/authsSlice";
import profile from "../../assets/images/src/profile/profile.png";
import { logOut } from "../../features/users/userSlice";
import {
  FaShoppingCart,
  FaSearch,
  FaUser,
  FaUserPlus,
  FaGlobe,
} from "react-icons/fa";
import { RiArrowDownSFill } from "react-icons/ri";
import logo from "../../assets/images/logo.png";
import { FiDollarSign } from "react-icons/fi";
import { FaHeadset } from "react-icons/fa";

import Cart from "../cart/Cart";

const Top = () => {
  const { userInfo } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logout] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logout().unwrap();
      dispatch(logOut());
      navigate("/login");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="z-105 w-full  fixed top-0 md:flex  text-white bg-[#002c38] h-16">
      {/* first */}
      <div className="w-full grid grid-cols-3 place-items-center py-2   ">
        <Link to="/">
          <div className="flex  items-center cursor-pointer ">
            <img src={logo} alt="" className="w-10 lg:w-20" />
          </div>
        </Link>

        <div className="flex flex-col items-center cursor-pointer ">
          <FaHeadset className="text-sm lg:text-xl" />
          <h1 className="text-[10px] lg:text-sm font-bold">Support</h1>
        </div>

        <div className="flex flex-col items-center cursor-pointer  ">
          <FaSearch className="text-sm lg:text-xl" />
          <h1 className="text-[10px] lg:text-sm font-bold">Search</h1>
        </div>
      </div>
      {/* second */}
      {userInfo ? (
        <div className="w-full grid grid-cols-4 place-items-center  text-[#002c38] py-2 bg-white">
          <div className="flex flex-col  space-y-1 items-center justify-center cursor-pointer">
            <FiDollarSign className="text-sm lg:text-xl" />
            <h1 className="text-[10px] lg:text-sm font-bold ">USD</h1>
          </div>

          <div className="flex flex-col  space-y-1 items-center justify-center cursor-pointer ">
            <FaGlobe className="text-sm lg:text-xl" />
            <h1 className="text-[10px] lg:text-sm font-bold">En</h1>
          </div>

          <div className="relative flex flex-col  space-y-1 items-center justify-center group">
            <div
              className="flex flex-col items-center justify-center"
              // onClick={toggleAccount}
            >
              <img
                src={userInfo.avatar || profile}
                alt=""
                className="w-5 h-5 object-contain rounded-full"
              />

              <div className="flex items-center justify-evenly ">
                <div className="text-xs font-normal ">Me</div>
                <RiArrowDownSFill className="text-lg " />
              </div>
            </div>

            <div className="z-106  absolute top-8 md:top-8  lg:top-8 xl:top-[30px] min-w-[227px]   rounded-sm border shadow-lg text-[#002c38] bg-white  hidden group-hover:block">
              <div className="bg-[#002c38] w-full px-3 pt-5 text-white font-bold rounded-t-md">
                Your Account
              </div>
              <div className="w-full px-3 pt-5 pb-1 text-[#002c38] font-bold">
                CUSTOMER
              </div>
              <div className="w-full px-3 font-normal">
                {userInfo.firstName}
              </div>

              <div className="w-full px-3 pt-5 pb-1">
                <Link to="account">
                  <div className="text-md font-bold py-3 px-1">Account</div>
                </Link>

                <div
                  className="text-md font-bold py-3 px-1 cursor-pointer"
                  onClick={logoutHandler}
                >
                  Logout
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex items-center  space-x-1 md:space-x-1 cursor-pointer group">
            <FaShoppingCart className="text-sm md:text-lg" />
            <p className="text-sm md:text-xl font-medium">$0.00</p>
            <RiArrowDownSFill className="text-lg" />
            <Cart />
          </div>
        </div>
      ) : (
        <div className="relative w-full grid grid-cols-5 place-items-center  text-[#002c38] py-2 bg-white">
          <Link to="/login">
            <div className="flex flex-col  space-y-1 items-center justify-center cursor-pointer">
              <FaUser className="text-sm lg:text-xl" />
              <div className="text-[10px] lg:text-sm font-bold">Login</div>
            </div>
          </Link>
          <Link to="/createaccount">
            <div className="flex flex-col  space-y-1 items-center justify-center cursor-pointer ">
              <FaUserPlus className="text-sm lg:text-xl" />
              <div className="text-[10px] lg:text-sm font-bold">Sign Up</div>
            </div>
          </Link>

          <div className="flex flex-col  space-y-1 items-center justify-center cursor-pointer ">
            <FiDollarSign className="text-sm lg:text-xl" />
            <div className="text-[10px] lg:text-sm font-bold">USD</div>
          </div>

          <div className="flex flex-col  space-y-1 items-center justify-center cursor-pointer ">
            <FaGlobe className="text-sm lg:text-xl" />
            <div className="text-[10px] lg:text-sm font-bold">En</div>
          </div>
          <div className="relative flex items-center  space-x-1 md:space-x-1 cursor-pointer group">
            <FaShoppingCart className="text-sm md:text-lg" />
            <p className="text-sm md:text-xl font-medium">$0.00</p>
            <RiArrowDownSFill className="text-lg" />
            <Cart />
          </div>
        </div>
      )}
    </div>
  );
};

export default Top;
