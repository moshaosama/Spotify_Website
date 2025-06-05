import { Link } from "react-router";
import { LogoSpotify } from "../../../Components/LogoSpotify";
import SignWithSocialMedia from "../../../Components/SignWithSocialMedia";
import { useFormState } from "../Hooks/useFormState";

const FormLogin = () => {
  const { OnSubmit, errors, handleSubmit, register } = useFormState();
  return (
    <div className="flex justify-center mt-20 text-white">
      <div
        className="flex flex-col gap-3 items-center max-sm:w-[25pc] justify-center w-1/3 h-[40pc] sm:mt-10 py-3 rounded-xl shadow-2xl"
        style={{ backgroundColor: "var(--primary-color)" }}
      >
        <div>
          <LogoSpotify />
        </div>
        <div>
          <h1 className="text-3xl font-bold">Log in to Spotify</h1>
        </div>
        <SignWithSocialMedia />
        <form action="" onSubmit={handleSubmit(OnSubmit)}>
          <p className="flex flex-col gap-1">
            <label htmlFor="Email">Email or username</label>
            <input
              type="text"
              id=""
              placeholder="Email or username"
              className="border-1 p-2 w-72"
              {...register("email", {
                required:
                  "Please enter your Spotify username or email address.",
              })}
            />
          </p>
          {errors.email && (
            <p className="text-red-600 w-80 text-sm mt-2 font-bold">
              {errors.email.message as string}
            </p>
          )}
          <p className="my-4">
            <button className="bg-green-500 cursor-pointer text-black w-72 py-2 rounded-full font-bold">
              Continue
            </button>
          </p>
        </form>
        <div>
          <h1 className="text-[#7C7C7C] font-bold">
            Don't have an account?
            <Link
              to={"/signup"}
              className="text-white underline mx-2 cursor-pointer"
            >
              Sign up for Spotify
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default FormLogin;
