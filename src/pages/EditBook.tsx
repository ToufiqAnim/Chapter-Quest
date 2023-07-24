import {
  useGetSingleBookQuery,
  useUpdateBookMutation,
} from "@/redux/features/book/bookApi";
import { IBooks } from "@/types/interface";

import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
const EditBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [updateBook, { isLoading }] = useUpdateBookMutation();

  const { data } = useGetSingleBookQuery(id);

  const book = data?.data;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IBooks>();
  const onSubmit = async (data: IBooks) => {
    try {
      const response = await updateBook({ id, data });
      if ("error" in response) {
        toast.error((response as any).error.error);
      } else {
        toast.success(response.data.message);
        navigate(`/books-details/${id}`);
      }
    } catch (error) {
      console.error("Unexpected error occurred:", error);
      toast.error("An unexpected error occurred. Please try again later.");
    }
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content w-[100%] md:w-[70%] lg:w-[60%] flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-3xl font-bold text-center">Edit Book</h1>

            <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control w-full max-w-xs">
                <label className="label block text-gray-700">Book Title</label>
                <input
                  type="text"
                  placeholder="Enter Book Title"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none border-1 border-gray-400"
                  {...register("title")}
                  defaultValue={book?.title}
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label block text-gray-700">Author</label>
                <input
                  type="text"
                  placeholder="Enter Author Name"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none border-1 border-gray-400"
                  {...register("author")}
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label block text-gray-700">Image</label>
                <input
                  type="text"
                  placeholder="Enter Image Url"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none border-1 border-gray-400"
                  {...register("image")}
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label block text-gray-700">Description</label>
                <input
                  type="text"
                  placeholder="Enter Book Description"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none border-1 border-gray-400"
                  {...register("description")}
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label block text-gray-700">Genre</label>
                <input
                  type="text"
                  placeholder="Enter Book Genre"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none border-1 border-gray-400"
                  {...register("genre")}
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label block text-gray-700">
                  Publication Date
                </label>
                <input
                  type="text"
                  placeholder="Enter  Publication Date"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none border-1 border-gray-400"
                  {...register("publicationDate")}
                />
              </div>

              <button className="mt-3 bg-slate-800 text-white px-6 py-2 rounded">
                Edit Book
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditBook;
