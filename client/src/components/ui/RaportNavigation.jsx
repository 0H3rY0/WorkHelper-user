import { FaArrowDown } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import { NavLink } from "react-router";
import { IoIosNotifications } from "react-icons/io";
import { FaRegCalendarCheck } from "react-icons/fa";

const DevicesNavigation = () => {
  const [openList, setOpenList] = useState(true);

  return (
    <div className="flex flex-col gap-2 ">
      <p
        className="flex items-center gap-2 cursor-pointer hover:text-slate-400"
        onClick={() => setOpenList((prev) => !prev)}
      >
        <IoIosNotifications size={32} /> Zgloszenia
        {openList ? <FaArrowRight size={16} /> : <FaArrowDown size={16} />}
      </p>
      <ul
        className={`${openList ? "block" : "hidden"} flex flex-col gap-1 mt-2`}
      >
        <NavLink
          to="/laptopy"
          className={({ isActive }) => (isActive ? "text-slate-500" : "")}
        >
          <li className="cursor-pointer ml-4 text-lg font-normal flex items-center gap-1 hover:text-slate-400">
            <FaRegCalendarCheck size={16} /> Zrob zgloszenie
          </li>
        </NavLink>

        <NavLink
          to="/pc"
          className={({ isActive }) => (isActive ? "text-slate-500" : "")}
        >
          <li className="cursor-pointer ml-4 text-lg font-normal flex items-center gap-1 hover:text-slate-400">
            <IoIosNotifications size={16} /> Moje zgloszenia
          </li>
        </NavLink>
      </ul>
    </div>
  );
};

export default DevicesNavigation;
