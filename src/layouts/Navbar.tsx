import React from "react";
import { BsBook } from "react-icons/bs";

import {
  AiOutlineBook,
  AiOutlineCheckCircle,
  AiOutlineRead,
  AiOutlineStar,
} from "react-icons/ai";
import { NavLink, useNavigate } from "react-router-dom";

import { useAppDispatch } from "../redux/hooks";
import { logout } from "../redux/features/auth/authSlice";
import { useState } from "react";
const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const dispatch = useAppDispatch();
  const storedAuthData = localStorage.getItem("auth");
  const navigate = useNavigate();
  const token = storedAuthData ? JSON.parse(storedAuthData).token : null;

  const onFinishHandle = (e) => {
    e.preventDefault();
    navigate(`/search/${encodeURIComponent(searchTerm)}`);
  };

  const handleLogout = () => {
    localStorage.removeItem("auth");
    dispatch(logout());
    navigate("/");
  };
  return (
    <nav className=" top-0 shadow-md px-8 py-8 flex justify-evenly font-lobstar">
      <NavLink to="/" className=" flex items-center gap-2">
        <BsBook className="cursor-pointer w-12 h-12  " />
        <h1 className="font-medium text-3xl ">Chapter Quest</h1>
      </NavLink>
      <div className=" flex   items-center ">
        <ul className=" flex items-center gap-6 ">
          <NavLink to="/books">
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
          </NavLink>
          {token && (
            <>
              <NavLink to="books/add-book">
                <li
                  className={
                    "flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-black text-xl items-center   "
                  }
                >
                  <div className="hover:bg-[#e36065] duration-300 rounded hover:p-2 hover:text-white flex gap-1 items-center">
                    <AiOutlineBook className={"w-6 h-6"} />
                    <p>Add Books</p>
                  </div>
                </li>
              </NavLink>
              <NavLink to="/wishlist">
                <li
                  className={
                    "flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-black text-xl items-center   "
                  }
                >
                  <div className="hover:bg-[#e36065] duration-300 rounded hover:p-2 hover:text-white flex gap-1 items-center">
                    <AiOutlineStar className={"w-6 h-6"} />
                    <p>Wishlist</p>
                  </div>
                </li>
              </NavLink>
              <NavLink to="/reading-list">
                <li
                  className={
                    "flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-black text-xl items-center   "
                  }
                >
                  <div className="hover:bg-[#e36065] duration-300 rounded hover:p-2 hover:text-white flex gap-1 items-center">
                    <AiOutlineRead className={"w-6 h-6"} />
                    <p>Reading List</p>
                  </div>
                </li>
              </NavLink>
              <NavLink to="finished-books">
                <li
                  className={
                    "flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-black text-xl items-center   "
                  }
                >
                  <div className="hover:bg-[#e36065] duration-300 rounded hover:p-2 hover:text-white flex gap-1 items-center">
                    <AiOutlineCheckCircle className={"w-6 h-6"} />
                    <p>Finished Books</p>
                  </div>
                </li>
              </NavLink>
            </>
          )}
        </ul>
      </div>
      <div className="flex gap-3 items-center">
        {/* search bar */}

        <div className=" flex items-center h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden ">
          <form action="" onSubmit={onFinishHandle} className="border-gray-400">
            <input
              className="outline-none text-sm text-gray-700 p-2 "
              type="text"
              id="search"
              placeholder="Search book title, author, genre..."
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </form>
          {/*   <div
            className="grid place-items-center h-full w-16 text-black"
            onClick={() => handleSearch()}
          >
            <BsSearch />
          </div> */}
        </div>
        {token ? (
          <NavLink to="/signin">
            <div className="flex items-center gap-2" onClick={handleLogout}>
              <p className="font-medium text-xl">Logout</p>
            </div>
          </NavLink>
        ) : (
          <>
            <NavLink to="/signin">
              <div className="flex items-center gap-2">
                <p className="font-medium text-xl">Sign In</p>
              </div>
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
