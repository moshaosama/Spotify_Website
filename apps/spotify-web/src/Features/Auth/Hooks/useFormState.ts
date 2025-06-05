import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../../Store/store";
import { fetchLogin } from "../Actions/Login";

export const useFormState = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch<AppDispatch>();

  const OnSubmit = (data: any) => {
    dispatch(fetchLogin(data));
  };

  return { register, handleSubmit, errors, OnSubmit };
};
