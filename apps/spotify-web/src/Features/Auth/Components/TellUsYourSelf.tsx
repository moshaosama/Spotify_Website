import { IoIosArrowBack } from "react-icons/io";

export const TellUsYourSelf = () => {
  return (
    <>
      <div>
        <div className="flex justify-center items-center gap-2 ">
          <div>
            <IoIosArrowBack size={30} cursor={"pointer"} />
          </div>
          <div>
            <p>Step 1 of 2</p>
            <p>Create a password</p>
          </div>
        </div>
      </div>
    </>
  );
};
