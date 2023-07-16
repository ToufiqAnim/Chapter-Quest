import {
  BsBook,
  BsArrowLeftCircle,
  BsFillJournalBookmarkFill,
} from "react-icons/bs";
import { MdOutlineAccountCircle } from "react-icons/md";
import { useState } from "react";
import { AiOutlineBook, AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div
        className={` ${
          open ? "w-60" : " m-6 w-24 border-r-2 border-[#d8d5cc]"
        } bg-[#f0eee2] border-r-2 border-[#d8d5cc] h-screen p-5  pt-8 relative duration-300`}
      >
        <div>
          <BsBook
            className={`cursor-pointer w-10 h-10 duration-500 text-[#a59d85]  ${
              open && "rotate-[360deg] mx-auto"
            }  ${!open && " mt-16"} `}
          />
        </div>
        <div>
          <BsArrowLeftCircle
            className={`absolute cursor-pointer -right-3 top-9 w-7 h-7 bg-white border-2 rounded-full text-[#a59d85] ${
              !open && "rotate-180"
            }`}
            onClick={() => setOpen(!open)}
          />
          <h1
            className={` font-medium text-xl duration-500 text-center ${
              !open && "scale-0"
            }`}
          >
            Chapter Quest
          </h1>
        </div>
        <div className="flex">
          <ul className="pt-6 my-20">
            <Link to="/">
              <li
                className={
                  "flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-black text-xl items-center gap-x-4 pb-10"
                }
              >
                <div className="hover:bg-[#e36065] duration-300 rounded hover:p-2 hover:text-white ">
                  <AiOutlineHome className={"w-8 h-8  "} />
                </div>

                <span
                  className={`${!open && "hidden"} origin-left duration-200 `}
                >
                  Home
                </span>
              </li>
            </Link>

            <Link to="/books">
              <li
                className={
                  "flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-black text-xl items-center gap-x-4 pb-10"
                }
              >
                <div className="hover:bg-[#e36065] duration-300 rounded hover:p-2 hover:text-white">
                  <AiOutlineBook className={"w-8 h-8"} />
                </div>
                <span
                  className={`${!open && "hidden"} origin-left duration-200`}
                >
                  Books
                </span>
              </li>
            </Link>

            <Link to="/wishlist">
              <li
                className={
                  "flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-black text-xl items-center gap-x-4 pb-10"
                }
              >
                <div className="hover:bg-[#e36065] duration-300 rounded hover:p-2 hover:text-white ">
                  <BsFillJournalBookmarkFill className={"w-8 h-8"} />
                </div>
                <span
                  className={`${!open && "hidden"} origin-left duration-200`}
                >
                  Whishlist
                </span>
              </li>
            </Link>
            <Link to="/account">
              <li
                className={
                  "flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-black text-xl items-center gap-x-4 pb-10"
                }
              >
                <div className="hover:bg-[#e36065] duration-300 rounded hover:p-2 hover:text-white">
                  <MdOutlineAccountCircle className={"w-8 h-8"} />
                </div>
                <span
                  className={`${!open && "hidden"} origin-left duration-200`}
                >
                  Account
                </span>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
