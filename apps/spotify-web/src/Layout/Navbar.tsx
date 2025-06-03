import { CiSearch } from "react-icons/ci";
import { FaBars } from "react-icons/fa";
import { ImSpotify } from "react-icons/im";
import { IoArrowDownCircleSharp } from "react-icons/io5";
import { RiHome2Fill } from "react-icons/ri";
import { Link } from "react-router";
import Sidebar from "../Components/Sidebar";
import { useOpenSidebar } from "../Context/OpenSidebar";

const Navbar = () => {
  const { handleTriggerSidebar } = useOpenSidebar();
  return (
    <>
      <div className="p-5 flex items-center justify-between">
        <div>
          <ImSpotify className="text-white text-4xl w-fit" />
        </div>
        <div className="sm:hidden">
          <div className="flex items-center gap-4">
            <CiSearch color="white" size={25} />
            <button className="bg-white w-24 py-1 rounded-full font-bold">
              Open App
            </button>
            <FaBars color="white" size={25} onClick={handleTriggerSidebar} />
          </div>

          <Sidebar />
        </div>
        <div className="max-sm:hidden">
          <div className="flex justify-between gap-5">
            <RiHome2Fill
              className="text-white p-2 text-5xl rounded-full w-fit cursor-pointer"
              style={{ backgroundColor: "var(--primary-color)" }}
            />
            <input
              type="text"
              style={{ backgroundColor: "var(--primary-color)" }}
              className="w-96 rounded-full text-gray-200 px-4 transition-all duration-500"
              placeholder="What do you wad to play?"
            />
          </div>
        </div>
        <div className="font-bold text-[#7C7C7C] max-sm:hidden">
          <div className="flex items-center gap-7">
            <h1 className="hover:text-white flex items-center gap-1 cursor-pointer transition-all duration-300">
              <IoArrowDownCircleSharp size={17} />
              Install App
            </h1>
            <h1 className="hover:text-white cursor-pointer transition-all duration-300">
              Sign up
            </h1>
            <Link to={"/login"}>
              <button className="bg-white text-black py-3 px-8 rounded-full cursor-pointer hover:bg-gray-200 transition-all duration-500">
                Log in
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
