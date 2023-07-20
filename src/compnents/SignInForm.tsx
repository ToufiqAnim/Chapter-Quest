import { loginUser } from "@/redux/features/user/userSlice";
import { useAppDispatch } from "@/redux/hooks";
import { useForm } from "react-hook-form";

interface SignInFormInputs {
  email: string;
  password: string;
}

export default function SignInForm() {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SignInFormInputs>();

  const onSubmit = (data: SignInFormInputs) => {
    dispatch(loginUser(data));
    reset();
  };

  return (
    <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-control w-full max-w-xs">
        <label className="label block text-gray-700">Email Address</label>
        <input
          type="text"
          placeholder="Enter Email Address"
          className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none border-1 border-gray-400"
          {...register("email", { required: "Email is required" })}
        />
        {errors.email && (
          <p className="form_error my-2 text-red-600">{errors.email.message}</p>
        )}
      </div>
      <div className="form-control w-full max-w-xs mt-6">
        <label className="block text-gray-700">Password</label>
        <input
          type="password"
          placeholder="Enter Password"
          className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none border-gray-400"
          {...register("password", { required: "Password is required" })}
        />
        {errors.password && (
          <p className="form_error my-2 text-red-600">
            {errors.password.message}
          </p>
        )}
      </div>
      <div className="mt-3">
        <button
          className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
              px-4 py-3 mt-6"
        >
          Log In
        </button>
      </div>
    </form>
  );
}
