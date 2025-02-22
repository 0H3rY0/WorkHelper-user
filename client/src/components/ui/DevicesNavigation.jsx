import { MdDevices } from "react-icons/md";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaLaptop } from "react-icons/fa";
import { PiComputerTowerFill } from "react-icons/pi";
import { BsCameraVideoFill } from "react-icons/bs";
import { useState } from "react";
import { RiRouterFill } from "react-icons/ri";
import { FaFloppyDisk } from "react-icons/fa6";
import { IoAlarmSharp } from "react-icons/io5";
import { MdOutlineSettingsInputAntenna } from "react-icons/md";
import { GrCloudSoftware } from "react-icons/gr";
import { FaBoxOpen } from "react-icons/fa";
import { NavLink } from "react-router";

const DevicesNavigation = () => {
  const [openList, setOpenList] = useState(false);

  return (
    <div className="flex flex-col gap-2 ">
      <p
        className="flex items-center gap-2 cursor-pointer hover:text-slate-400"
        onClick={() => setOpenList((prev) => !prev)}
      >
        <MdDevices size={32} /> Urzadzenia
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
            <FaLaptop size={16} /> Laptopy
          </li>
        </NavLink>

        <NavLink
          to="/pc"
          className={({ isActive }) => (isActive ? "text-slate-500" : "")}
        >
          <li className="cursor-pointer ml-4 text-lg font-normal flex items-center gap-1 hover:text-slate-400">
            <PiComputerTowerFill size={16} /> PC
          </li>
        </NavLink>

        <NavLink
          to="/kamery"
          className={({ isActive }) => (isActive ? "text-slate-500" : "")}
        >
          <li className="cursor-pointer ml-4 text-lg font-normal flex items-center gap-1 hover:text-slate-400">
            <BsCameraVideoFill size={16} /> Kamery
          </li>
        </NavLink>

        <NavLink
          to="/routers"
          className={({ isActive }) => (isActive ? "text-slate-500" : "")}
        >
          <li className="cursor-pointer ml-4 text-lg font-normal flex items-center gap-1 hover:text-slate-400">
            <RiRouterFill size={16} /> Router
          </li>
        </NavLink>

        <NavLink
          to="/nvr"
          className={({ isActive }) => (isActive ? "text-slate-500" : "")}
        >
          <li className="cursor-pointer ml-4 text-lg font-normal flex items-center gap-1 hover:text-slate-400">
            <FaFloppyDisk size={16} /> NVR
          </li>
        </NavLink>

        <NavLink
          to="/alarmy"
          className={({ isActive }) => (isActive ? "text-slate-500" : "")}
        >
          <li className="cursor-pointer ml-4 text-lg font-normal flex items-center gap-1 hover:text-slate-400">
            <IoAlarmSharp size={16} /> Alarm
          </li>
        </NavLink>

        <NavLink
          to="/anteny"
          className={({ isActive }) => (isActive ? "text-slate-500" : "")}
        >
          <li className="cursor-pointer ml-4 text-lg font-normal flex items-center gap-1 hover:text-slate-400">
            <MdOutlineSettingsInputAntenna size={16} /> Anteny
          </li>
        </NavLink>

        <NavLink
          to="/oprogramowania"
          className={({ isActive }) => (isActive ? "text-slate-500" : "")}
        >
          <li className="cursor-pointer ml-4 text-lg font-normal flex items-center gap-1 hover:text-slate-400">
            <GrCloudSoftware size={16} /> Oprogramowanie
          </li>
        </NavLink>

        <NavLink
          to="/pozostale"
          className={({ isActive }) => (isActive ? "text-slate-500" : "")}
        >
          <li className="cursor-pointer ml-4 text-lg font-normal flex items-center gap-1 hover:text-slate-400">
            <FaBoxOpen size={16} /> Pozostale
          </li>
        </NavLink>
      </ul>
    </div>
  );
};

export default DevicesNavigation;
