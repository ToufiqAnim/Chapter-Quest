import { BsSearch } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
function Header() {
  return (
    <div>
      <div className="flex justify-between mb-10">
        {/* search bar */}
        <div className="max-w-sm ">
          <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
            <div className="grid place-items-center h-full w-12 text-black">
              <BsSearch />
            </div>

            <input
              className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
              type="text"
              id="search"
              placeholder="Search book title, author, genre..."
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <VscAccount className="w-6 h-6" />
          <span className="font-medium">John Doe</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
