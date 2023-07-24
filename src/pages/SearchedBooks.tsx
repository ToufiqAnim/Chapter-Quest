import BookCard from "@/compnents/BookCard";
import { useGetSearchBooksQuery } from "@/redux/features/book/bookApi";
import { IBooks } from "@/types/interface";
import toast from "react-hot-toast";

import { useParams } from "react-router-dom";

const SearchResult = () => {
  const { searchTerm } = useParams();

  const { data, isLoading } = useGetSearchBooksQuery(searchTerm);
  const books = data?.data;
  /*  if (!data || data.length === 0) {
    toast.error("No books found");
  }
  const books = data?.data;

  return (
    <div>
      {isLoading ? (
        <div className="flex justify-center h-[100vh]">
          <span className="loading loading-ring loading-lg"></span>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-5 py-8">
          {books.map((book: IBooks) => (
            <BookCard key={book._id} {...book} />
          ))}
        </div>
      )}
    </div>
  ); */ if (data?.length) {
    return (
      <>
        {isLoading ? (
          <div className="flex justify-center h-[100vh]">
            <span className="loading loading-ring loading-lg"></span>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-5 py-8">
            {books.map((book: IBooks) => (
              <BookCard key={book._id} {...book} />
            ))}
          </div>
        )}
      </>
    );
  } else {
    return (
      <h4 className="text-center h-screen text-4xl font-lobstar">
        No Book Found
      </h4>
    );
  }
};

export default SearchResult;
