import { DropDownData } from "../Data/DropDownData";
import useSaveUser from "../Hooks/useSaveUser";
import type { DropDownType } from "../types/DropDownType";

const DropDownProfile = () => {
  const { handleLogout } = useSaveUser();
  return (
    <>
      <div
        style={{ backgroundColor: "var(--primary-color)" }}
        className="absolute right-5 py-1  rounded-xl flex flex-col w-52 z-50"
      >
        {DropDownData.map((data: DropDownType, index: number) => (
          <div
            key={index}
            className="hover:bg-gray-600 px-3 rounded-xl py-3 cursor-pointer"
          >
            <h1 className="text-white text-sm font-semibold">{data.name}</h1>
          </div>
        ))}
        <hr className="bg-gray-600 h-0.5 border-none" />

        <div
          className="hover:bg-gray-600 px-3 rounded-xl py-3 mt-1 cursor-pointer"
          onClick={handleLogout}
        >
          <h1 className="text-white text-sm font-semibold">Logout</h1>
        </div>
      </div>
    </>
  );
};

export default DropDownProfile;
