import {
  BsBook,
  BsArrowLeftCircle,
  BsFillJournalBookmarkFill,
} from "react-icons/bs";
import { BsSearch } from "react-icons/bs";

import { MdOutlineAccountCircle } from "react-icons/md";

import {
  AiOutlineBook,
  AiOutlineHome,
  AiOutlineRead,
  AiOutlineStar,
} from "react-icons/ai";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

import { useAppDispatch } from "@/redux/hooks";
import { logout } from "@/redux/features/auth/authSlice";
const Navbar = () => {
  const dispatch = useAppDispatch();
  const storedAuthData = localStorage.getItem("auth");
  const navigate = useNavigate();
  const token = storedAuthData ? JSON.parse(storedAuthData).token : null;
  const handleLogout = () => {
    localStorage.removeItem("auth");
    dispatch(logout());
    navigate("/");
  };
  return (
    <nav className=" top-0 shadow-md px-8 py-8 flex justify-evenly font-lobstar">
      <div className=" flex items-center gap-2">
        <BsBook className="cursor-pointer w-12 h-12  " />
        <h1 className="font-medium text-3xl ">Chapter Quest</h1>
      </div>
      <div className=" flex   items-center ">
        <ul className=" flex items-center gap-6 ">
          <Link to="/">
            <li
              className={
                " rounded-md p-2 cursor-pointer hover:bg-light-white text-black text-xl items-center "
              }
            >
              <div className="hover:bg-[#e36065] duration-300 rounded hover:p-2 hover:text-white flex gap-1 items-center ">
                <AiOutlineHome className={"w-6 h-6  "} />
                <p>Home</p>
              </div>
            </li>
          </Link>

          <Link to="/books">
            <li
              className={
                "flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-black text-xl items-center   "
              }
            >
              <div className="hover:bg-[#e36065] duration-300 rounded hover:p-2 hover:text-white flex gap-1 items-center">
                <AiOutlineBook className={"w-6 h-6"} />
                <p>Books</p>
              </div>
            </li>
          </Link>
          {token && (
            <>
              <li className="hover:bg-[#e36065] duration-300 rounded hover:p-2 hover:text-white flex gap-1 items-center">
                <NavLink to="books/add-book">Add Books</NavLink>
              </li>
              <li className="hover:bg-[#e36065] duration-300 rounded hover:p-2 hover:text-white flex gap-1 items-center">
                <NavLink to="/wishlist">
                  <AiOutlineStar />
                  <span>Wishlist</span>
                </NavLink>
              </li>
              <li className="hover:bg-[#e36065] duration-300 rounded hover:p-2 hover:text-white flex gap-1 items-center">
                <NavLink to="/reading-list">
                  <AiOutlineRead />
                  <span>Reading List</span>
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="flex gap-3 items-center">
        {/* search bar */}

        <div className=" flex items-center h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
          <div className="grid place-items-center h-full w-16 text-black">
            <BsSearch />
          </div>

          <input
            className="outline-none text-sm text-gray-700 pr-2"
            type="text"
            id="search"
            placeholder="Search book title, author, genre..."
          />
        </div>
        {token ? (
          <Link to="/signin">
            <div className="flex items-center gap-2" onClick={handleLogout}>
              <p className="font-medium text-xl">Logout</p>
            </div>
          </Link>
        ) : (
          <>
            <Link to="/signin">
              <div className="flex items-center gap-2">
                <p className="font-medium text-xl">Sign In</p>
              </div>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
