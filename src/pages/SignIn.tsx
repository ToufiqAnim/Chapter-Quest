import SignInForm from '../compnents/SignInForm';
import React from 'react';
import { Link } from 'react-router-dom';

function SignIn() {
  return (
    <>
      <div className="m-20">
        <div className="flex flex-col md:flex-row items-center xl:w-4/6 mx-auto ">
          <div className="md:hidden lg:block w-full md:w-1/2 xl:w-2/3 ">
            <img
              src="https://i.ibb.co/7C58r24/harry-Potter-4.webp "
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <div
            className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto  md:w-1/2 xl:w-1/2  px-6 lg:px-16 xl:px-12
        flex items-center justify-center"
          >
            <div className="w-full h-100 mb-10">
              <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">
                Log in to your account
              </h1>

              <SignInForm />

              <hr className="my-4 border-gray-300 w-full" />

              <p className="mt-4 ">
                <span>Don't have an account? </span>
                <Link to="/signup">
                  <a
                    href="#"
                    className="text-blue-500 hover:text-blue-700 font-semibold"
                  >
                    Signup Here
                  </a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
