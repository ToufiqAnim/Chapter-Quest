import React from "react";
import { IBooks } from "../types/tpyes";

interface IProps {
  book: IBooks;
}

export function BookCard({ book }: IProps) {
  return (
    <div>
      <div className="rounded-2xl h-[480px] flex flex-col items-start justify-between p-5 overflow-hidden shadow-md border border-gray-100 hover:shadow-2xl hover:scale-[102%] transition-all gap-2">
        <h1>{book?.title}</h1>
      </div>
    </div>
  );
}

export default BookCard;
