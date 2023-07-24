import {
  useGetAllBooksQuery,
  useGetSingleBookQuery,
} from "@/redux/features/book/bookApi";

import { FiEdit } from "react-icons/fi";
import { Link, useParams } from "react-router-dom";
import DeleteBook from "./DeleteBook";
import AddToWishlist from "@/compnents/AddToWishlist";
import AddToReadingList from "@/compnents/AddToReadingList";

function BooksDetails() {
  const { id } = useParams();

  const storedAuthData = localStorage.getItem("auth");
  const authData = storedAuthData ? JSON.parse(storedAuthData) : null;
  const user = authData ? authData.user : null;
  const { data, isLoading } = useGetSingleBookQuery(id);
  const book = data?.data;

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center h-[100vh]">
          <button className="animate-spin rounded-full h-24 w-24 border-t-2 border-b-2 border-gray-900"></button>
        </div>
      ) : (
        <div>
          <div className="container mx-auto flex justify-evenly items-center mt-10">
            <div className="shadow-2xl p-4">
              <img src={book?.image} alt="" className="w-60" />
            </div>
            <div className="font-lobstar ">
              <h1 className="text-6xl mb-6">{book?.title}</h1>
              <p className="text-2xl mb-6">{book?.author}</p>
              <p className="text-md mb-6">
                {book?.description.slice(0, 200)}...
              </p>
              <div className="flex gap-4 items-center">
                <button className="mt-3 bg-slate-800 text-white px-8 py-3 rounded text-xl">
                  Start Reading
                </button>
                {user && (
                  <div>
                    <div className="flex gap-3 items-center ">
                      <Link to={`/books/edit/${book?._id}`}>
                        <FiEdit size={30} />
                      </Link>
                      <button>
                        <DeleteBook id={book?._id} />
                      </button>
                    </div>
                  </div>
                )}
                <div className="flex justify-end space-x-8">
                  <button className="border p-2 flex rounded-full">
                    <AddToWishlist id={book?._id} />
                  </button>
                  <div className="border p-2 flex rounded-full">
                    <AddToReadingList id={book?._id} />
                  </div>
                </div>
              </div>

              {/*   <div className="flex justify-end space-x-8">
                <div className="border p-2 flex rounded-full">
                  <AddToWishList id={book?._id} />
                </div>
                <div className="border p-2 flex rounded-full">
                  <AddToReadingList id={book?._id} />
                </div>*/}
            </div>
          </div>
          <div className="container mx-auto p-28 flex justify-around items-center gap-28  bg-[#f1f1ee] shadow-lg mt-[-60px] mb-20">
            <div className="flex flex-col gap-6 font-lobstar w-2/4">
              <h1 className="text-3xl">Description</h1>
              <p>{book?.description}</p>

              <div className="flex flex-col gap-6">
                <h1 className="text-3xl">Reviews</h1>
                {/*      <div>
                  <p className="text-2xl mb-4">Rob Lee</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Nihil numquam quasi consequatur repellendus vitae magnam,
                    beatae quas
                  </p>
                </div> */}
              </div>
            </div>
            <div className=" font-lobstar">
              <h1 className="text-3xl mb-4">Editor</h1>
              <p className="text-xl mb-6">Harper Lee (author)</p>
              <h1 className="text-2xl mb-2">Language</h1>
              <p className="mb-4">Standard English (USA & UK)</p>
              <h1 className="text-2xl mb-2">Paperback</h1>
              <p>
                Paper textured, full color, 335 pages,
                <br /> ISBN:9876789
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default BooksDetails;
