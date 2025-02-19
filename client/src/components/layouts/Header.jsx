import { FaRegUser } from "react-icons/fa";
import { CgLogIn } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavbarStore } from "../../store/useNavbarStore";

const Header = () => {
  const { changeNavbarState } = useNavbarStore();

  return (
    <div className="col-span-2 bg-slate-700 px-6 py-2 text-white flex items-center sticky top-0 z-50">
      <div className="w-full flex justify-between text-xl text-slate-300">
        <div className="flex justify-center items-center gap-4">
          <GiHamburgerMenu
            onClick={changeNavbarState}
            className="md:hidden fixed top-2 left-4 hover:text-slate-200 hover:bg-slate-400 hover:opacity-75 rounded-lg w-12 h-12 p-2 hover:scale-110 scale-transition"
          />
          <h1 className="flex items-center text-4xl md:ml-0 ml-14">LOGO</h1>
        </div>

        <div className="flex justify-center items-center gap-8 text-lg">
          <p className="cursor-pointer hover:text-slate-400 flex items-center gap-1">
            User <FaRegUser size={20} />
          </p>
          <p className="cursor-pointer hover:text-slate-400 flex items-center gap-1">
            Login <CgLogIn size={26} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
