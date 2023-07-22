import { useAddBookMutation } from "@/redux/features/book/bookApi";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
interface IBook {
  _id: string;
  title: string;
  image: string;
  author: string;
  description: string;
  genre: string;
  publicationDate: string;
  publisher?: string;
  reviews?: object[];
  createdAt?: Date;
}
import image from "../assets/harry Potter 4.jpg";

const AddBooks = () => {
  const navigate = useNavigate();
  const [addBook, { isLoading }] = useAddBookMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IBook>();
  const onSubmit = async (data: IBook) => {
    try {
      const response = await addBook(data);
      if (response.error) {
        alert(response.error.data.errorMessages[0].message);
      } else {
        alert(response.data.message);
        navigate("/books");
      }
    } catch (error) {
      console.error("Unexpected error occurred:", error);
      alert("An unexpected error occurred. Please try again later.");
    }
    reset();
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="flex flex-col md:flex-row items-center xl:w-4/6 mx-auto ">
        <div className="md:hidden lg:block w-full md:w-1/2 xl:w-2/3 ">
          <img src={image} alt="" className="w-full h-full object-cover" />
        </div>
        <div
          className=" w-full md:max-w-md lg:max-w-full md:mx-auto  md:w-1/2  px-6 lg:px-16 xl:px-12
         items-center justify-center"
        >
          <div className="card-body">
            <h1 className="text-3xl font-bold text-center">Create Book</h1>
            <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control w-full max-w-xs">
                <label className="label block text-gray-700">Book Title</label>
                <input
                  type="text"
                  placeholder="Enter Book Title"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none border-1 border-gray-400"
                  {...register("title", { required: "title is required" })}
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label block text-gray-700">Author</label>
                <input
                  type="text"
                  placeholder="Enter Author Name"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none border-1 border-gray-400"
                  {...register("author", {
                    required: "author name is required",
                  })}
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label block text-gray-700">Image</label>
                <input
                  type="text"
                  placeholder="Enter Image Url"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none border-1 border-gray-400"
                  {...register("image", {
                    required: "author name is required",
                  })}
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label block text-gray-700">Description</label>
                <input
                  type="text"
                  placeholder="Enter Book Description"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none border-1 border-gray-400"
                  {...register("description", {
                    required: "author name is required",
                  })}
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label block text-gray-700">Genre</label>
                <input
                  type="text"
                  placeholder="Enter Book Genre"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none border-1 border-gray-400"
                  {...register("genre", {
                    required: "genre required",
                  })}
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
                  {...register("publicationDate", {
                    required: "Publication Date",
                  })}
                />
              </div>

              <button className="mt-3 bg-slate-800 text-white px-6 py-2 rounded">
                Add Book
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBooks;
