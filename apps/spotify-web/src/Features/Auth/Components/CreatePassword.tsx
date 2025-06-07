import { IoIosArrowBack } from "react-icons/io";
import { useSignUpContext } from "../Context/SignUpContext";
import { useFormContext } from "react-hook-form";
import { useFormSignUpContext } from "../Context/FormSignUpContext";

export const CreatePassword = () => {
  const { handleTriggerCreatePassword, handleTriggerTellUsYoursef } =
    useSignUpContext();
  const { updateFormData } = useFormSignUpContext();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useFormContext();
  return (
    <>
      <div className="flex flex-col justify-center mr-56 mt-2 items-center text-[#7c7c7c] font-bold text-md gap-3">
        <div className="flex justify-center items-center gap-2 ">
          <div>
            <button onClick={handleTriggerCreatePassword}>
              <IoIosArrowBack size={30} cursor={"pointer"} />
            </button>
          </div>
          <div>
            <p>Step 1 of 2</p>
            <p>Create a password</p>
          </div>
        </div>
        <form
          action=""
          className="ml-56 gap-2 my-16"
          onSubmit={handleSubmit((data) => {
            handleTriggerTellUsYoursef();
            updateFormData({ password: data.Password });
          })}
        >
          <p className="flex flex-col gap-2">
            <label htmlFor="Password">Password</label>
            <input
              type="password"
              className="py-2 w-96 border-2 border-[#7c7c7c]"
              {...register("password", { required: "Password is required" })}
            />
          </p>
          {errors.password && (
            <p className="text-red-500">{errors.password.message as string}</p>
          )}
          <p className="my-4">
            <button className="bg-green-500 cursor-pointer text-black w-96 my-3 py-2 rounded-full font-bold">
              Next
            </button>
          </p>
        </form>
        <p className="text-white ml-56 text-sm w-[16pc] text-[10px] text-center mt-56">
          This site is protected by reCAPTCHA and the Google Privacy Policy and
          Terms of Service apply.
        </p>
      </div>
    </>
  );
};
