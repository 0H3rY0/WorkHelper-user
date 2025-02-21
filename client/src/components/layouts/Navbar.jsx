import DevicesNavigation from "../ui/DevicesNavigation";
import { useNavbarStore } from "../../store/useNavbarStore";
import RaportNavigation from "../ui/RaportNavigation";
import { NavLink } from "react-router";
import { IoMdArrowRoundBack } from "react-icons/io";

const Navbar = () => {
  const { isNavbarActive, closeNavbar } = useNavbarStore();

  return (
    <>
      {/* navbar container */}
      <div
        className={`fixed top-0 left-0 h-full w-56 bg-gray-700 p-3 text-lg text-slate-300 font-semibold transition-transform duration-300 z-40
        ${
          isNavbarActive ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 md:block`}
      >
        <div className="flex flex-col justify-start gap-8 sticky top-24">
          {/* navigation links */}
          {/* <hr className="rounded-lg border-2 border-slate-500" /> */}
          <RaportNavigation />
          <DevicesNavigation />
          <hr className="rounded-lg border-2 border-slate-500" />

          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "text-slate-500" : "")}
          >
            <p className="flex items-center gap-2 cursor-pointer hover:text-slate-400">
              <IoMdArrowRoundBack size={32} /> Twoje obiekty
            </p>
          </NavLink>
        </div>
      </div>

      {/* dark overflow during active navbar */}
      {isNavbarActive && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-30"
          onClick={() => closeNavbar(false)}
        />
      )}
    </>
  );
};

export default Navbar;
