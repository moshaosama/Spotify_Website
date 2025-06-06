import { IoIosArrowBack } from "react-icons/io";
import { useSignUpContext } from "../Context/SignUpContext";

export const CreatePassword = () => {
  const { handleTriggerCreatePassword, handleTriggerTellUsYoursef } =
    useSignUpContext();
  return (
    <>
      <div className="flex flex-col justify-center mr-56 mt-2 items-center text-[#7c7c7c] font-bold text-md gap-3">
        <div className="flex justify-center items-center gap-2 ">
          <div>
            <IoIosArrowBack
              size={30}
              cursor={"pointer"}
              onClick={handleTriggerCreatePassword}
            />
          </div>
          <div>
            <p>Step 1 of 2</p>
            <p>Create a password</p>
          </div>
        </div>
        <form action="" className="ml-56 gap-2 my-16">
          <p className="flex flex-col gap-2">
            <label htmlFor="Password">Password</label>
            <input
              type="password"
              className="py-2 w-96 border-2 border-[#7c7c7c]"
            />
          </p>
          <p className="my-4">
            <button
              onClick={() => {
                handleTriggerCreatePassword();
                handleTriggerTellUsYoursef();
              }}
              className="bg-green-500 cursor-pointer text-black w-96 my-3 py-2 rounded-full font-bold"
            >
              Next
            </button>
          </p>
        </form>
      </div>
    </>
  );
};
