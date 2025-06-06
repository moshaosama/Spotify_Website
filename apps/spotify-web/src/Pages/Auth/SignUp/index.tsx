import FormSignUp from "../../../Features/Auth/Components/FormSignUp";
import { NavigatePages } from "../../../Features/Auth/Components/NavigatePages";
import { useSignUpContext } from "../../../Features/Auth/Context/SignUpContext";

const SignUp = () => {
  const { isCreatePassword } = useSignUpContext();
  return (
    <>
      {!isCreatePassword && <FormSignUp />}
      <NavigatePages />
    </>
  );
};

export default SignUp;
