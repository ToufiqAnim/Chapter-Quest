/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useSignupMutation } from '../redux/features/auth/authApi';
import React from 'react';

import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
interface ISignUpFormInputs {
  name: string;
  email: string;
  password: string;
}

export default function SignUpForm() {
  const navigate = useNavigate();
  const [signup, { isLoading }] = useSignupMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ISignUpFormInputs>();

  const onSubmit = async (data: ISignUpFormInputs) => {
    try {
      const response = await signup(data);
      if ('error' in response) {
        //@ts-ignore
        toast.error(response.error.data.errorMessages[0].message);
      } else {
        toast.success(response.data.message);
        navigate('/signin');
      }
    } catch (error) {
      alert('An unexpected error occurred. Please try again later.');
    }

    reset();
  };

  return (
    <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-control w-full max-w-xs mt-6">
        <label className="label block text-gray-700"> Name</label>
        <input
          type="text"
          placeholder="Enter Your Name"
          className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none border-1 border-gray-400"
          {...register('name', { required: 'Email is required' })}
        />
        {errors.email && (
          <p className="form_error my-2 text-red-600">{errors.email.message}</p>
        )}
      </div>
      <div className="form-control w-full max-w-xs mt-6">
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
          <div className="flex justify-center">
            <button className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-gray-900"></button>
          </div>
        ) : (
          <button
            className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
              px-4 py-3 mt-6"
          >
            Signup
          </button>
        )}
      </div>
    </form>
  );
}
