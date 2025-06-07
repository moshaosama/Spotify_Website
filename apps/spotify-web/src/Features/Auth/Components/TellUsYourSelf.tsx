import { IoIosArrowBack } from "react-icons/io";
import { useSignUpContext } from "../Context/SignUpContext";
import { useFormContext } from "react-hook-form";
import { useFormSignUpContext } from "../Context/FormSignUpContext";

export const TellUsYourSelf = () => {
  const { handleTriggerTellUsYoursef } = useSignUpContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormContext();
  const { updateFormData, onSubmitSignUp } = useFormSignUpContext();
  return (
    <>
      <div className="flex flex-col justify-center mr-56 mt-2 items-center text-[#7c7c7c] font-bold text-md gap-3">
        <div className="flex justify-center items-center gap-2 ">
          <div>
            <button onClick={handleTriggerTellUsYoursef}>
              <IoIosArrowBack size={30} cursor={"pointer"} />
            </button>
          </div>
          <div>
            <p>Step 2 of 2</p>
            <p>Create a password</p>
          </div>
        </div>

        <form
          action=""
          className="ml-56 gap-2 my-12"
          onSubmit={handleSubmit((data) => {
            updateFormData({ firstName: data.Name, Date: data.Date });
            onSubmitSignUp(data);
          })}
        >
          <p className="flex flex-col gap-2">
            <div>
              <label htmlFor="Name">Name</label>
              <p>This name will appear on your profile</p>
            </div>
            <input
              type="text"
              className="py-2 w-96 border-2 border-[#7c7c7c]"
              {...register("firstName", { required: "Name is required" })}
            />
          </p>
          {errors.firstName && (
            <p className="text-red-500">{errors.firstName.message as string}</p>
          )}
          <p className="flex flex-col gap-2 mt-5">
            <div>
              <label htmlFor="Date of birth">Date of birth</label>
              <p>
                Why do we need your date of birth?{" "}
                <span className="underline">Learn more.</span>
              </p>
            </div>
            <input
              type="text"
              className="py-2 w-96 border-2 border-[#7c7c7c]"
              {...register("Date", { required: "Date is required" })}
            />
          </p>
          {errors.Date && (
            <p className="text-red-500">{errors.Date.message as string}</p>
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
