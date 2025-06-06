import clsx from "clsx";
import { LogoSpotify } from "../../../Components/LogoSpotify";
import { useSignUpContext } from "../Context/SignUpContext";
import { CreatePassword } from "./CreatePassword";
import { TellUsYourSelf } from "./TellUsYourSelf";

export const NavigatePages = () => {
  const { isCreatePassword, isTellUsYoursef } = useSignUpContext();
  return (
    <>
      <div className="mt-10">
        <div className="flex flex-col items-center gap-10">
          <LogoSpotify />
          <div>
            <div className="h-0.5 w-96 bg-[#7c7c7c] rounded-full">
              <div
                className={clsx(
                  "bg-green-500 h-0.5 transition-all duration-700",
                  isCreatePassword ? "w-1/2" : "w-0",
                  isTellUsYoursef ? "w-full" : "w-0"
                )}
              ></div>
            </div>
          </div>
        </div>
        <div>{isCreatePassword && <CreatePassword />}</div>
        <div>{isTellUsYoursef && <TellUsYourSelf />}</div>
      </div>
    </>
  );
};
