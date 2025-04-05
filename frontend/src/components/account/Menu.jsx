import { menuData } from "../../data/data";
import { MdManageAccounts, MdOutlineDashboard,MdModelTraining } from "react-icons/md";
import { FaShoppingBag, FaProjectDiagram,FaRegMoneyBillAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const icons = [
  MdOutlineDashboard,
  MdModelTraining,
  FaProjectDiagram,
  FaShoppingBag,
  MdManageAccounts,
  FaRegMoneyBillAlt,

];
const Menu = () => {
  return (
    <div className="flex flex-col gap-4 pl-[1%] text-[15px]">
      {menuData.map((item, i) => {
        const Icon = icons[i];
        return (
          <NavLink
            to={item.url}
            className={`flex items-center gap-3 border border-gray-400 border-r-0 px-3 py-2 rounded `}
            key={item.id}
          >
            <Icon className="w-5 h-5 md:w-7 md:h-7" />

            <span className="hidden md:block font-normal">{item.title}</span>
          </NavLink>
        );
      })}
    </div>
  );
};

export default Menu;
