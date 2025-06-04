import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { MdFacebook } from "react-icons/md";
import useGoogleAuth from "../Features/Auth/Hooks/useGoogleAuth";

const SignWithSocialMedia = () => {
  const { handleClick } = useGoogleAuth();
  return (
    <div className="flex flex-col items-center gap-3 mt-5">
      <div className="border-white hover:border-2 cursor-pointer border-1 w-72 flex gap-2 justify-around items-center p-2 rounded-full">
        <div>
          <FcGoogle size={20} />
        </div>
        <div onClick={handleClick}>
          <h1 className="font-bold">Continue with Google</h1>
        </div>
      </div>
      <div className="border-white hover:border-2 cursor-pointer border-1 w-72 flex gap-2 justify-around items-center p-2 rounded-full">
        <div>
          <FaApple size={20} />
        </div>
        <div>
          <h1 className="font-bold">Continue with Apple</h1>
        </div>
      </div>
      <div className="border-white hover:border-2 cursor-pointer border-1 w-72 flex gap-2 justify-around items-center p-2 rounded-full">
        <div>
          <MdFacebook size={20} color="skyblue" />
        </div>
        <div>
          <h1 className="font-bold">Continue with Facebook</h1>
        </div>
      </div>
      <hr className="h-[1px] w-[30pc] my-5 border-none bg-gray-600 max-sm:w-[15pc]" />
    </div>
  );
};

export default SignWithSocialMedia;
