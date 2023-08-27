import React from 'react';
import { IBooks } from '../types/interface';
import { Link } from 'react-router-dom';

export function BookCard(book: IBooks) {
  return (
    <div>
      <Link to={`/books-details/${book._id}`}>
        <div className="shadow-xl shadow-gray-400 w-full lg:max-w-full lg:flex items-center h-72 max-md:h-[500px]">
          <div className="h-48 lg:h-72 lg:w-48 flex-none bg-cover text-center overflow-hidden ">
            <img src={book.image} alt="" className="h-72 p-4" />
          </div>
          <div className=" p-4 flex flex-col justify-between ">
            <div className="mb-8">
              <p className="text-sm text-gray-600 flex items-center font-lobstar">
                <svg
                  className="fill-current text-gray-500 w-3 h-3 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                </svg>
                Members only
              </p>
              <div className="text-gray-900 font-bold text-xl mb-2 font-lobstar">
                {book.title}
              </div>
              <p className="text-gray-500 text-base font-lobstar">
                {book.description.slice(0, 150)}...
              </p>
            </div>
            <div className="flex items-center">
              <img
                className="w-10 h-10 rounded-full mr-4"
                src={book.image}
                alt="Avatar of Writer"
              />
              <div className="text-sm">
                <p className="text-gray-900 leading-none font-lobstar">
                  {book.author}
                </p>
                <p className="text-gray-600 font-lobstar">{book.genre}</p>
                <p className="text-gray-600 font-lobstar">
                  {book.publicationDate}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/*    {!pathname.includes("books") && (
        <div>
          <div className=" shadow-2xl shadow-gray-400">
            <img src={book.image} alt="" className="h-80 mx-auto p-4" />
          </div>

          <p className="font-lobstar pt-2 text-lg">{book.title}</p>
        </div>
      )} */}
      </Link>
    </div>
  );
}

export default BookCard;
