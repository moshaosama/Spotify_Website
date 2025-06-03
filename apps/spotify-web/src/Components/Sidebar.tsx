import clsx from "clsx";
import { useOpenSidebar } from "../Context/OpenSidebar";
import { IoMdExit } from "react-icons/io";
import { Link } from "react-router";

const Sidebar = () => {
  const { isOpenSidebar, handleTriggerSidebar } = useOpenSidebar();
  return (
    <div
      className={clsx(
        "absolute top-0 right-0 h-full bg-black overflow-hidden transition-all duration-700 ease-in-out shadow-lg ",
        isOpenSidebar ? "w-full" : "w-0"
      )}
    >
      <div className="flex justify-end p-4">
        <IoMdExit
          color="white"
          size={40}
          cursor={"pointer"}
          onClick={handleTriggerSidebar}
        />
      </div>
      <div className="text-white mx-20 font-bold flex flex-col gap-5 text-xl">
        <Link to={"/login"}>Log in</Link>
        <h1>Sign up</h1>
        <hr className="w-14 rounded-xl my-5 h-1 bg-white" />
      </div>
      <div className="text-white mx-20 font-bold flex flex-col gap-5 text-sm my-10">
        <h1>premium</h1>
        <h1>Help</h1>
        <h1>Download</h1>
        <h1>Privacy</h1>
        <h1>Terms</h1>
      </div>
    </div>
  );
};

export default Sidebar;
