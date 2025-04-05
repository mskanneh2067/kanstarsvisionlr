import React from "react";
import { assets } from "../../assets_admin/assets";

const Navbar = () => {
  return (
    <div className="flex items-center py-2 px-[4%] justify-between border-b-[1px]">
      
          <h1 className="font-bold text-[#002c38] text-md md:text-lg">
            ADMIN PANEL
          </h1>
       
      <button className="bg-[#002c38]  text-white px-5 py-2 sm:px-7 sm:py-2 rounded-md text-xs sm:text-sm hover:font-bold">
        Logout
      </button>
    </div>
  );
};

export default Navbar;
