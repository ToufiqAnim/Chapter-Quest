import React, { useEffect, useState } from "react";
import { IBooks } from "../types/tpyes";
import BookCard from "../compnents/BookCard";

const Books = () => {
  const [books, setBooks] = useState<IBooks[]>([]);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div>
      <div className="col-span-9 grid grid-cols-3 gap-10 pb-20">
        {books?.map((book) => (
          <BookCard book={book} />
        ))}
      </div>
    </div>
  );
};

export default Books;
