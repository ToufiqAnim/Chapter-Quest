import {
  BsBook,
  BsArrowLeftCircle,
  BsFillJournalBookmarkFill,
} from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
import { MdOutlineAccountCircle } from "react-icons/md";

import { AiOutlineBook, AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";
const Navbar = () => {
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

          <Link to="/wishlist">
            <li
              className={
                "flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-black text-xl items-center  "
              }
            >
              <div className="hover:bg-[#e36065] duration-300 rounded hover:p-2 hover:text-white flex gap-1 items-center">
                <BsFillJournalBookmarkFill className={"w-6 h-6"} />
                <p>Whishlist</p>
              </div>
            </li>
          </Link>
          <Link to="/account">
            <li
              className={
                "flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-black text-xl items-center "
              }
            >
              <div className="hover:bg-[#e36065] duration-300 rounded hover:p-2 hover:text-white flex gap-1 items-center">
                <MdOutlineAccountCircle className={"w-6 h-6"} />
                <p>Account</p>
              </div>
            </li>
          </Link>
        </ul>
      </div>
      <div className="flex gap-2">
        {/* search bar */}

        <div className=" flex items-center h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
          <div className="grid place-items-center h-full w-12 text-black">
            <BsSearch />
          </div>

          <input
            className="outline-none text-sm text-gray-700 pr-2"
            type="text"
            id="search"
            placeholder="Search book title, author, genre..."
          />
        </div>
        <div className="flex items-center gap-2">
          <VscAccount className="w-6 h-6" />
          <p className="font-medium">John Doe</p>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
