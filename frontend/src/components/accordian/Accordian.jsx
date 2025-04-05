import { useState } from "react";
import { faq } from "../../data/DataSource";
import { FaToggleOff } from "react-icons/fa";
import { FaToggleOn } from "react-icons/fa";
import logo from "../../assets/images/logo.png"
import {Link} from "react-router-dom"

const Accordian = () => {
  const [select, setSelect] = useState(null);
  const [multiselect, setMultiselect] = useState([]);
  const [toggleSelect, setToggleSelect] = useState(false);
  const singleSelectionHandler = (id) => {
    setSelect(id === select ? null : id);
  };
  const multiSelectionHandler = (id) => {
    let multiSelectCopy = [...multiselect];
    const currentIdIndex = multiSelectCopy.indexOf(id);
    console.log(currentIdIndex);
    if (currentIdIndex === -1) multiSelectCopy.push(id);
    else multiSelectCopy.splice(currentIdIndex, 1);
    setMultiselect(multiSelectCopy);
    console.log(select, multiselect);
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full h-full">
      <div>
        <div className="grid grid-cols-10  bg-[#002c38]">
        <div className=" h-16 flex items-center justify-center col-span-2 bg-[#002c38]">
          <Link to="/" className="my-1">
            <div className="flex  items-center cursor-pointer ">
              <img src={logo} alt="" className="w-16 lg:w-20" />
            </div>
          </Link>
        </div>
          <div className="uppercase text-[10px] md:text-lg p-1 md:p-3 font-bold flex items-center justify-center col-span-6 md:col-span-6 text-white">
            Fequently Asked Questions
          </div>
          <div className="col-span-2 md:col-span-2 flex items-center justify-center flex-col text-4xl bg-white">
           
            {toggleSelect ? (<FaToggleOn onClick={()=>setToggleSelect(false)} className="text-[#5f8543] cursor-pointer"/>) :( <FaToggleOff onClick={()=>setToggleSelect(true)} className="text-red-600 cursor-pointer"/>)}
            <div className="text-[7px] font-bold"> Multi Selection</div>
          </div>
        </div>
        {faq && faq.length > 0 ? (
          faq.map((e) => (
            <div key={e.id} className="p-5">
              <div
                className="text-sm md:text-lg flex items-center justify-between "
                onClick={
                  toggleSelect
                    ? () => multiSelectionHandler(e.id)
                    : () => singleSelectionHandler(e.id)
                }
              >
                <h3 className="font-bold p-2 text-1xl">{e.q}</h3>
                <p className="font-bold p-2  text-2xl cursor-pointer">+</p>
              </div>

              {toggleSelect
                ? multiselect.indexOf(e.id) !== -1 && <div className="font-normal text-sm md:text-lg p-2 text-1xl">{e.a}</div>
                : select === e.id && <div className="font-normal text-sm md:text-lg p-2 text-1xl">{e.a}</div>}
            </div>
          ))
        ) : (
          <div>No data found!</div>
        )}
      </div>

      <div>
        <img
          src="https://readlins.io/wp-content/uploads/2024/07/mindset.jpg"
      
          alt="FAQ mindset image"
        />
      </div>
    </div>
  );
};

export default Accordian;
