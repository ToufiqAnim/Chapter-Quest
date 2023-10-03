/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSigninMutation } from '../redux/features/auth/authApi';
import React from 'react';
import { setAuth } from '../redux/features/auth/authSlice';
import { useAppDispatch } from '../redux/hooks';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

interface SignInFormInputs {
  email: string;
  password: string;
}

export default function SignInForm() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [signin, { isLoading }] = useSigninMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SignInFormInputs>();
  const onSubmit = async (data: SignInFormInputs) => {
    try {
      const response = await signin(data);
      const loginData = await (response as any).data.data;
      if ('data' in response) {
        localStorage.clear();
        dispatch(setAuth(loginData));

        toast.success(response.data.message);
        window.location.reload();
        navigate('/');
      }
    } catch (error) {
      const response = await signin(data);
      toast.error((response as any).error.data.message);
    }

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
          {...register('email', { required: 'Email is required' })}
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
          {...register('password', { required: 'Password is required' })}
        />
        {errors.password && (
          <p className="form_error my-2 text-red-600">
            {errors.password.message}
          </p>
        )}
      </div>
      <div className="mt-3">
        {isLoading ? (
          <div className="flex justify-center ">
            <button className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-gray-900"></button>
          </div>
        ) : (
          <button
            className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
              px-4 py-3 mt-6"
          >
            Log In
          </button>
        )}
      </div>
    </form>
  );
}
