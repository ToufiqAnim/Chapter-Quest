import { useGetSingleBookQuery } from '../redux/features/book/bookApi';
import React from 'react';
import { FiEdit } from 'react-icons/fi';
import { Link, useParams } from 'react-router-dom';
import DeleteBook from './DeleteBook';
import AddToWishlist from '../compnents/AddToWishlist';
import AddToReadingList from '../compnents/AddToReadingList';
import AddReview from '../compnents/PostReviews';
import Reviews from '../compnents/Reviews';

function BooksDetails() {
  const { id } = useParams();

  const storedAuthData = localStorage.getItem('auth');
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
              <div className="flex gap-4 items-center justify-between">
                <button className="mt-3 bg-slate-800 text-white px-8 py-3 rounded text-xl">
                  Start Reading
                </button>
                {user && (
                  <div className="">
                    <div className="flex gap-5 items- center">
                      <div className="hover:bg-[#e36065] duration-300 rounded hover:p-2 hover:text-white flex gap-1 items-center">
                        <Link to={`/books/edit/${book?._id}`}>
                          <FiEdit size={30} />
                        </Link>
                      </div>

                      <div className="hover:bg-[#e36065] duration-300 rounded hover:p-2 hover:text-white flex gap-1 items-center">
                        <DeleteBook id={book?._id} />
                      </div>

                      <div className="hover:bg-[#e36065] duration-300 rounded hover:p-2 hover:text-white flex gap-1 items-center">
                        <AddToWishlist id={book?._id} />
                      </div>

                      <div className="hover:bg-[#e36065] duration-300 rounded hover:p-2 hover:text-white flex gap-1 items-center ">
                        <AddToReadingList id={book?._id} />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="container mx-auto p-28 flex justify-around items-center gap-28  bg-[#f1f1ee] shadow-lg mt-[-60px] mb-20">
            <div className="flex flex-col gap-6 font-lobstar w-2/4">
              <h1 className="text-3xl">Description</h1>
              <p>{book?.description}</p>

              <div className="flex flex-col gap-6">
                <h1 className="text-3xl">Reviews</h1>
                <AddReview id={book?._id} />
                <Reviews id={book?._id} />
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
