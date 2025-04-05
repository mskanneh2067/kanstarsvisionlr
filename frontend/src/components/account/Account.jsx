import { Outlet, useLocation } from "react-router-dom";
import { Menu } from "../../routes/Routes";

const Account = () => {
  const {pathname} = useLocation();
  return (
    <>
      <div className="flex pt-6 mt-40 md:mt-28 min-h-[70vh]">
        <Menu />
        <div className="w-full bg-white rounded-t-md p-2">
          {pathname === "/account" && <div className="">ACCOUNT SUMMARY</div>}
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Account;
