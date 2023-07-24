import AddToReadingList from "@/compnents/AddToReadingList";
import { useGetWishlistQuery } from "@/redux/features/user/userApi";
import { IBooks } from "@/types/interface";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const { data, error, isLoading } = useGetWishlistQuery(undefined);
  console.log(data);
  if (isLoading) {
    return (
      <div className="flex justify-center h-[100vh]">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }

  if (error) {
    toast.error(error.data.errorMessages[0].message);
  }

  if (!data || data.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h4>No Data Found...</h4>
      </div>
    );
  }

  const books = data.data;

  return (
    <div className="w-[100%] mx-auto py-8">
      <div className="h-[100vh] overflow-auto">
        <table className="w-full table-fixed min-w-[1000px] border">
          <thead className="position-sticky top-0 bg-gray-100 text-gray-600">
            <tr className="">
              <th className="py-2 text-left pl-5 break-all">Title</th>
              <th className="w-32 text-center break-all">Publish Date</th>
              <th className="w-32 text-center break-all">Genre</th>
              <th className="w-48 text-center break-all">Action</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book: IBooks) => (
              <tr
                key={book._id}
                className="hover:bg-gray-100 transition-colors"
              >
                <td className="break-all py-2 pl-2 flex gap-x-4 items-center">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-[60px] h-[60px] object-cover rounded-lg"
                  />
                  <div>
                    <Link
                      to={`/books-details/${book._id}`}
                      className="text-lg font-semibold text-gray-700"
                    >
                      {book.title}
                    </Link>
                    <div className="font-medium text-gray-400">
                      {book.author}
                    </div>
                  </div>
                </td>
                <td className="text-center">{book.publicationDate}</td>
                <td className="text-center">{book.genre}</td>
                <td className="text-center">
                  <div className="flex items-center justify-center space-x-6">
                    <div className="p-2 rounded-full border flex items-center">
                      <AddToReadingList id={book._id} />
                    </div>
                    <div className="p-2 rounded-full border flex items-center">
                      {/* <RemoveFromWishList id={book._id} /> */}
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Wishlist;
