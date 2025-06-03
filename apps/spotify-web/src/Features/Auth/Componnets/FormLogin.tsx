import { FcGoogle } from "react-icons/fc";
import { LogoSpotify } from "../../../Contsants/LogoSpotify";
import { MdFacebook } from "react-icons/md";
import { FaApple } from "react-icons/fa";

const FormLogin = () => {
  return (
    <div className="flex justify-center mt-20 text-white">
      <div
        className="flex flex-col gap-3 items-center justify-center w-1/2 py-3 rounded-xl shadow-2xl"
        style={{ backgroundColor: "var(--primary-color)" }}
      >
        <div>
          <LogoSpotify />
        </div>
        <div>
          <h1 className="text-3xl font-bold">Log in to Spotify</h1>
        </div>
        <div className="flex flex-col items-center gap-3 mt-5">
          <div className="border-white hover:border-2 cursor-pointer border-1 w-72 flex gap-2 justify-around items-center p-2 rounded-full">
            <div>
              <FcGoogle size={20} />
            </div>
            <div>
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
          <hr className="h-[1px] w-[30pc] my-5 border-none bg-gray-600" />
        </div>
        <form action="">
          <p className="flex flex-col gap-1">
            <label htmlFor="Email">Email or username</label>
            <input
              type="text"
              id=""
              placeholder="Email or username"
              className="border-1 p-2 w-72"
            />
          </p>
          <p className="my-4">
            <button className="bg-green-500 cursor-pointer text-black w-72 py-2 rounded-full font-bold">
              Continue
            </button>
          </p>
        </form>
        <div>
          <h1 className="text-[#7C7C7C] font-bold">
            Don't have an account?
            <span className="text-white underline mx-2 cursor-pointer">
              Sign up for Spotify
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default FormLogin;
