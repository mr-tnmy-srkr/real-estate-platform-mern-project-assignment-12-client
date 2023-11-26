import { GrLogout } from "react-icons/gr";
import { FcSettings } from "react-icons/fc";
import { AiOutlineBars } from "react-icons/ai";
import { BsGraphUp } from "react-icons/bs";
import { BsFillHouseAddFill } from "react-icons/bs";
import { MdHomeWork, MdOutlineHouseSiding } from "react-icons/md";
import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useRole from "../../../hooks/useRole";

const Sidebar = () => {
    const { logOut } = useAuth();
    const [role] = useRole();
    const [isActive, setActive] = useState(false);

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <div>

<div className="bg-gray-100 text-gray-800 flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold">
         <span className="flex text-3xl"> Dream <MdOutlineHouseSiding size={40} /></span>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200"
        >
          <AiOutlineBars className="h-5 w-5" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className="w-full flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-blue-200 mx-auto">
            <span className="flex text-3xl"> Dream <MdOutlineHouseSiding size={40} /></span>
            </div>
          </div>

          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1 mt-6">
          lll
            {/* If a user is host */}
            {/* {role === "host" && <ToggleBtn toggleHandler={toggleHandler} />} */}

            <nav>
              {/* <MenuItem */}
                {/* icon={BsGraphUp} */}
                {/* label="Statistics" */}
                {/* address="/dashboard" */}
              {/* /> */}

              {/* Host Menu Items */}
              {/* {role === "guest" && <GuestMenu />} */}
              {/* {role === "host" ? toggle ? <HostMenu /> : <GuestMenu /> : ""} */}
              {/* {role === "admin" && <AdminMenu />} */}
            </nav>
          </div>
        </div>

        <div>
          <hr />

         {/*  <MenuItem
            icon={FcSettings}
            label="Profile"
            address="/dashboard/profile"
          /> */}
          <button
            onClick={logOut}
            className="flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform"
          >
            <GrLogout className="w-5 h-5" />

            <span className="mx-4 font-medium">Logout</span>
          </button>
        </div>
      </div>
    
    </div>
  )
}

export default Sidebar