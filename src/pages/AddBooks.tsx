import React from "react";
import { useAddBookMutation } from "../redux/features/book/bookApi";

import { useForm } from "react-hook-form";

import { IBooks } from "../types/interface";
import toast from "react-hot-toast";

const AddBooks = () => {
  const [addBook] = useAddBookMutation();
  const {
    register,
    handleSubmit,

    reset,
  } = useForm<IBooks>();
  const onSubmit = async (data: IBooks) => {
    try {
      const response = await addBook(data);

      if ("error" in response) {
        toast.error(response.error.data.message);
      } else if ("data" in response) {
        toast.success(response.data.message);
      }
    } catch (error) {
      toast.error("An unexpected error occurred. Please try again later.");
    }

    reset();
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="flex flex-col md:flex-row items-center xl:w-4/6 mx-auto ">
        <div className="md:hidden lg:block w-full md:w-1/2 xl:w-2/3 ">
          <img
            src="https://i.ibb.co/7C58r24/harry-Potter-4.webp"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div
          className=" w-full md:max-w-md lg:max-w-full md:mx-auto  md:w-1/2  px-6 lg:px-16 xl:px-12
         items-center justify-center"
        >
          <div className="card-body">
            <h1 className="text-3xl font-bold text-center">Add Book</h1>
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
