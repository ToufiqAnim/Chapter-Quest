import React, { useEffect, useState } from "react";
import { IBooks } from "../types/interface";
import BookCard from "../compnents/BookCard";
import { useLocation } from "react-router-dom";
import AliceCarousel from "react-alice-carousel";
import { useGetAllBooksQuery } from "@/redux/features/book/bookApi";

const Books = () => {
  const { pathname } = useLocation();
  const { data } = useGetAllBooksQuery(undefined);

  return (
    <div>
      <div className="py-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-8">
        {!pathname.includes("/books")
          ? data?.data
              .slice(0, 10)
              .map((book: IBooks) => <BookCard book={book} key={book._id} />)
          : data?.data.map((book: IBooks) => (
              <BookCard book={book} key={book._id} />
            ))}
      </div>
    </div>
  );
};

export default Books;
