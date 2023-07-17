import React, { useEffect, useState } from "react";
import { IBooks } from "../types/tpyes";
import BookCard from "../compnents/BookCard";
import { useLocation } from "react-router-dom";
import AliceCarousel from "react-alice-carousel";

const Books = () => {
  const [books, setBooks] = useState<IBooks[]>([]);
  const { pathname } = useLocation();
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };
  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) =>
        pathname.includes("/books")
          ? setBooks(data)
          : setBooks(data.slice(0, 10))
      );
  }, []);

  return (
    <div>
      <div className="py-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-8">
        {books?.map((book) => (
          <BookCard book={book} key={book.id} />
        ))}
      </div>
    </div>
  );
};

export default Books;
