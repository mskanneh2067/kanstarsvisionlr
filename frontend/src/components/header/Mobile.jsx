import { useState } from "react";
import { Link } from "react-router-dom";
import menu from "../../data/MenuData";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

const Mobile = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");

  return (
    <>
      {menu.map((menulink) => (
        <div key={menulink.id} className="w-full  bg-white py-2 ">
          <div className="font-bold  px-1 text-left md:cursor-pointer group ">
            <h1
              className="uppercase flex justify-between items-center md:pr-0 pr-5 group "
              onClick={() => {
                heading !== menulink.menutitle
                  ? setHeading(menulink.menutitle)
                  : setHeading("");
                setSubHeading("");
              }}
            >
              {menulink.menutitle}

              <span className="text-xl md:hidden inline ">
                {heading === menulink.menutitle ? (
                  <BiChevronUp />
                ) : (
                  <BiChevronDown />
                )}
              </span>
              <span className="text-xl md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                <BiChevronDown />
              </span>
            </h1>

            {menulink.submenu && (
              <div>
                <div className=" w-full  hidden group-hover:md:block hover:md:block">
                  <div className="py-1">
                    <div className="w-4 h-4 left-3 absolute  rotate-45"></div>
                  </div>
                  <div className=" p-4 rounded-md min-w-[227px]">
                    {menulink.sublinks.map((submenulinks) => (
                      <div key={menulink.id}>
                        <h1 className="font-bold ">{submenulinks.Head}</h1>
                        {submenulinks.sublink.map((sublink) => (
                          <li
                            className="text-sm text-black my-2.5"
                            key={sublink.idn}
                          >
                            <Link className="hover:bg-white" to={sublink.link}>
                              {sublink.menuitems}
                            </Link>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Mobile menus */}

          <div
            className={`
                ${heading === menulink.menutitle ? "md:hidden" : "hidden"}
            `}
          >
            {/* sublink */}
            {menulink.sublinks.map((slinks) => (
              <div key={menulink.id}>
                <div>
                  <h1
                    onClick={() =>
                      subHeading !== slinks.Head
                        ? setSubHeading(slinks.Head)
                        : setSubHeading("")
                    }
                    className="bg-white py-8 pl-7 font-semibold md:pr-0 pr-5  flex justify-between items-center"
                  >
                    {slinks.Head}
                    <span className="text-xl md:mt-1 md:ml-2 inline">
                      {subHeading === slinks.Head ? (
                        <BiChevronUp />
                      ) : (
                        <BiChevronDown />
                      )}
                    </span>
                  </h1>
                  <div
                    className={`${
                      subHeading === slinks.Head ? "md:hidden" : "hidden"
                    }`}
                  >
                    {slinks.sublink.map((slink) => (
                      <li className="py-3 pl-14" key={slink.idn}>
                        <Link
                          to={slink.link}
                          className="text-sm text-text-[#002c38]  font-medium"
                        >
                          {slink.menuitems}
                        </Link>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default Mobile;
