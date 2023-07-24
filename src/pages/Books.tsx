import { IBooks } from "../types/interface";
import BookCard from "../compnents/BookCard";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useGetAllBooksQuery } from "@/redux/features/book/bookApi";

const Books = () => {
  const { pathname } = useLocation();
  const { data, isLoading } = useGetAllBooksQuery(undefined);
  const Books = data?.data;

  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedPublicationDate, setSelectedPublicationDate] = useState("");
  const [filteredGenres, setFilteredGenres] = useState<IBooks[]>(Books || []);
  const [filteredPublicationDates, setFilteredPublicationDates] = useState<
    string[]
  >([]);

  const genres = [...new Set(Books?.map((book: IBooks) => book.genre))];

  const extractYearFromDate = (date: string) => {
    return new Date(date).getFullYear().toString();
  };

  const handleGenreChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedGenre(event.target.value);
    setSelectedPublicationDate("");
  };

  const handlePublicationDateChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedPublicationDate(event.target.value);
  };

  useEffect(() => {
    const filteredBooks = selectedGenre
      ? Books?.filter((book: IBooks) => book.genre === selectedGenre) || []
      : Books || [];

    setFilteredGenres(filteredBooks);

    const publicationYears: any = [
      ...new Set(
        filteredBooks.map((book: IBooks) =>
          extractYearFromDate(book.publicationDate)
        )
      ),
    ];

    setFilteredPublicationDates(publicationYears);
  }, [selectedGenre, Books]);

  const filteredBooks: IBooks[] = selectedPublicationDate
    ? filteredGenres.filter(
        (book: IBooks) =>
          extractYearFromDate(book.publicationDate) === selectedPublicationDate
      )
    : filteredGenres;
  return (
    <>
      {pathname.includes("/books") && (
        <div className=" mx-auto flex justify-end items-center space-x-3 py-8">
          <select
            className="p-3 hover:shadow-xl  duration-300  rounded"
            value={selectedGenre}
            onChange={handleGenreChange}
          >
            <option value="">Genres</option>
            {genres.map((genre, index) => (
              <option key={index} value={genre}>
                {genre}
              </option>
            ))}
          </select>
          <select
            className="p-3 hover:shadow-xl  duration-300  rounded"
            value={selectedPublicationDate}
            onChange={handlePublicationDateChange}
          >
            <option value="">All Dates</option>
            {filteredPublicationDates.map((date: string, index) => (
              <option key={index} value={date}>
                {date}
              </option>
            ))}
          </select>
        </div>
      )}
      {isLoading ? (
        <div className="flex justify-center h-[100vh]">
          <button className="animate-spin rounded-full h-24 w-24 border-t-2 border-b-2 border-gray-900"></button>
        </div>
      ) : (
        <div className="py-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-8">
          {!pathname.includes("/books")
            ? data?.data
                .slice(0, 10)
                .map((book: IBooks) => <BookCard {...book} key={book._id} />)
            : filteredBooks.map((book: IBooks) => (
                <BookCard key={book._id} {...book} />
              ))}
        </div>
      )}
    </>
  );
};

export default Books;
