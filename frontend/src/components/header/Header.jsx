import Top from "./Top";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import menu from "../../data/MenuData";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { BiMenu, BiX } from "react-icons/bi";
import Mobile from "./Mobile";

const Header = () => {
  //Open and close state of the Navbar & sub menu itemsS
  const [open, setOpen] = useState(false);

  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");

  return (
    <>
      <Top />
      <nav className="z-104 w-full fixed top-[94px] md:top-16">
        {/* Main Navbar starts here */}
        <div className="flex items-center justify-end pr-2 md:pr-0  w-full font-medium h-16 bg-[#002c38] md:text-[rgb(0,44,56)]">
          <div className="hidden md:relative md:flex md:w-full md:items-center md:justify-center h-16 bg-white">
            {menu.map((menulink) => (
              <div
                key={menulink.id}
                className=" font-bold px-3 text-left md:cursor-pointer group h-16"
              >
                <h1
                  className="uppercase text-[12px] flex justify-between items-center  group h-16"
                  onClick={() => {
                    heading !== menulink.menutitle
                      ? setHeading(menulink.menutitle)
                      : setHeading("");
                    setSubHeading("");
                  }}
                >
                  {menulink.menutitle}

                  <span className="text-sm md:hidden inline ">
                    {heading === menulink.menutitle ? (
                      <BiChevronUp />
                    ) : (
                      <BiChevronDown />
                    )}
                  </span>
                  <span className="text-xl  md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                    <BiChevronDown />
                  </span>
                </h1>

                {menulink.submenu && (
                  <div className="absolute top-16 hidden group-hover:md:block left-0 right-0 min-w-[500px] min-h-[250px] md:mx-48 lg:mx-80  xl:mx-80  bg-white">
                    <div className="bg-white grid grid-cols-2  md:mx-auto md:max-w-[768px] md:mt-1">
                      <div className=" p-4 rounded-md min-w-[227px]">
                        {menulink.sublinks.map((submenulinks) => (
                          <div key={submenulinks.id}>
                            <h1 className="font-bold ">{submenulinks.Head}</h1>
                            {submenulinks.sublink.map((sublink) => (
                              <Link
                                key={sublink.idn}
                                to={sublink.link}
                                className="text-sm text-text-[#002c38] my-2.5 block font-medium"
                              >
                                {sublink.menuitems}
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>

                      {menulink.sublinks.map((e) => (
                        <Link className="relative cursor-pointer  " key={e.id}>
                          <div className="w-full h-full">
                            <img
                              src={e.src}
                              className="w-full h-full object-fill block"
                            />
                          </div>

                          <div className="absolute top-0 p-1 bg-black bg-opacity-65 w-full rounded-b-md text-center">
                            <span className="text-white font-bold tracking-tight text-2xl ">
                              {e.portfolio}
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div
            className="z-105 md:hidden text-3xl bg-black text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <BiX /> : <BiMenu />}
          </div>
        </div>
        {/* Main Navbar ends here */}
      </nav>

      {/* Mobile nav starts here */}
      <div
        className={`z-104 fixed md:hidden w-full  top-40 p-5
           duration-500 ${open ? "left-0" : "left-[-100%]"} bg-white`}
      >
        <Mobile />
      </div>
      {/* Mobile nav ends here */}
    </>
  );
};

export default Header;
