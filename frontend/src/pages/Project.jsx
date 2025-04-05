import { useState } from "react";
import { AiOutlineProject } from "react-icons/ai";
import { project } from "../data/data";
import { assets } from "../assets/assets";
function Project() {
  const [accordions, setAccordion] = useState(project);

  const toggleAccordion = (accordionkey) => {
    const updatedAccordions = accordions.map((accord) => {
      if (accord.key === accordionkey) {
        return { ...accord, isOpen: !accord.isOpen };
      } else {
        return { ...accord, isOpen: false };
      }
    });

    setAccordion(updatedAccordions);
  };
  return (
    <div className="p-2 m-8">
      <h2 className="text-2xl mb-2 mx-auto uppercase font-bold">Projects</h2>

      <div className="grid md:grid-cols-2 gap-7 md:5">
        <div className="">
          <img src={assets.analysis} alt="" className="rounded-lg" />
        </div>
        <div className="grid grid-cols-1 gap-14">
          {accordions.map((accordion, index) => (
            <div className="rounded-xl bg-white p-6 shadow-xl" key={index}>
              <div
                className={`mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full  shadow-lg shadow-teal-500/40 bg-${accordion.bg}`}
              >
                <AiOutlineProject size={30} />
              </div>

              <h1
                onClick={() => toggleAccordion(accordion.key)}
                className="text-darken mb-3 text-xs md:text-sm font-bold px-5 uppercase transition duration-300"
              >
                {accordion.title}
                <span
                  className={`float-right transform ${
                    accordion.isOpen ? "rotate-180" : "rotate-0"
                  } transition-transform duration-300`}
                >
                  &#9660;
                </span>
              </h1>
              {accordion.isOpen && (
                <>
                  <div>
                    {accordion.data.one !== "" && (
                      <p className="px-4 py-5 text-gray-700 border rounded-lg mb-4">
                        {accordion.data.one}
                      </p>
                    )}

                    {accordion.data.two !== "" && (
                      <p className="px-4 py-5 text-gray-700 border rounded-lg mb-4">
                        {accordion.data.two}
                      </p>
                    )}

                    {accordion.data.three !== "" && (
                      <p className="px-4 py-5 text-gray-700 border rounded-lg mb-4">
                        {accordion.data.three}
                      </p>
                    )}

                    {accordion.data.four !== "" && (
                      <p className="px-4 py-5 text-gray-700 border rounded-lg mb-4">
                        {accordion.data.four}
                      </p>
                    )}

                    {accordion.data.five !== "" && (
                      <p className="px-4 py-5 text-gray-700 border rounded-lg mb-4">
                        {accordion.data.five}
                      </p>
                    )}
                    {accordion.data.six !== "" && (
                      <p className="px-4 py-5 text-gray-700 border rounded-lg mb-4">
                        {accordion.data.six}
                      </p>
                    )}
                  </div>
                  <button className="bg-blue-800 px-14 py-3 rounded-lg text-white text-sm my-6">
                    View Project Artifacts
                  </button>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
