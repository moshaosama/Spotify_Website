import { Link } from "react-router";
import { LogoSpotify } from "../../../Components/LogoSpotify";
import SignWithSocialMedia from "../../../Components/SignWithSocialMedia";

const FormSignUp = () => {
  return (
    <>
      <div className="flex justify-center mt-10 flex-col items-center gap-4">
        <LogoSpotify />
        <div>
          <h1 className="text-white font-bold text-5xl w-80 text-center">
            Sign up to start listening
          </h1>
        </div>
        <form action="" className="mt-10">
          <p className="flex flex-col gap-1">
            <label htmlFor="Email" className="text-gray-500 font-bold">
              Email Address
            </label>
            <input
              type="text"
              id=""
              placeholder="Email or username"
              className="border-1 border-gray-300 p-2 w-80 text-gray-300"
            />
          </p>

          <p className="my-4">
            <button className="bg-green-500 cursor-pointer text-black w-80 py-2 rounded-full font-bold">
              Next
            </button>
          </p>
        </form>
        <div className="text-white">
          <SignWithSocialMedia />
        </div>
        <div>
          <p className="text-gray-500">
            Already have an account?
            <Link to={"/login"} className="text-white font-bold underline">
              Log in here.
            </Link>
          </p>
        </div>
        <p className="text-white text-sm w-[16pc] text-[10px] text-center mt-42">
          This site is protected by reCAPTCHA and the Google Privacy Policy and
          Terms of Service apply.
        </p>
      </div>
    </>
  );
};

export default FormSignUp;
