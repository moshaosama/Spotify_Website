import clsx from "clsx";
import { useGetLocalStorageData } from "../Context/GetLocalStorageDataContext";
import type { CheckLoginProps } from "../types/checkLogin";
import { Link } from "react-router-dom";

const CheckLogin = (props: CheckLoginProps) => {
  const { handleCloseMessage, isGetToken } = useGetLocalStorageData();
  return (
    <>
      <div
        className={clsx(
          "bg-sky-500 w-96 rounded-xl transition-all duration-1000 p-5 absolute top-44",
          isGetToken
            ? "opacity-100 left-1/4 pointer-events-auto"
            : "opacity-0 left-1/5 pointer-events-none"
        )}
      >
        <h1 className="text-xl font-bold">{props.Header}</h1>
        <p className="text-sm text-black">{props.Description}</p>
        <p className="flex justify-end items-center gap-4 font-bold mt-5">
          <h1 onClick={handleCloseMessage} className="cursor-pointer">
            Not now
          </h1>
          <Link to={"/login"}>
            <button className="bg-white w-16 py-1 rounded-full cursor-pointer">
              Log in
            </button>
          </Link>
        </p>
      </div>
    </>
  );
};

export default CheckLogin;
