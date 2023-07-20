import SignInForm from "@/compnents/SignInForm";
import { auth } from "@/lb/firebase";
import { setUser } from "@/redux/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import image from "../assets/harry Potter 4.jpg";

function SignIn() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();
  const path = location.state?.path?.pathname || "/";
  console.log(location.state);
  const { user } = useAppSelector((state) => state.user);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch(setUser(user?.email));
    });

    if (user.email) {
      navigate(path, { replace: true });
    }
  }, [dispatch, user.email, path, navigate]);
  return (
    <div className="m-20">
      <div className="flex flex-col md:flex-row items-center xl:w-4/6 mx-auto ">
        <div className="md:hidden lg:block w-full md:w-1/2 xl:w-2/3 ">
          <img src={image} alt="" className="w-full h-full object-cover" />
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
              <Link to="/signup">
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-700 font-semibold"
                >
                  Create an account
                </a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
