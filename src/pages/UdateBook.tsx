import {
  useGetSingleBookQuery,
  useUpdateBookMutation,
} from "../redux/features/book/bookApi";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { IBooks } from "../types/interface";
function UpdateBook() {
  const { id } = useParams();
  const navigate = useNavigate();
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const { data: book } = useGetSingleBookQuery(id!);
  const [updateBook] = useUpdateBookMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IBooks>();
  const onSubmit = (data: IBooks) => {
    const payload = { id, data };
    updateBook(payload);

    navigate("/all-books");
  };
  return (
    <div className="page_main">
      <h2 className="section_title">Update Book</h2>
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-200 mx-auto">
        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              type="text"
              defaultValue={book?.title}
              placeholder="Paramoy Life"
              className="input input-bordered"
              {...register("title")}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Author</span>
            </label>
            <input
              type="text"
              defaultValue={book?.author}
              placeholder="Jhankar Mahbub"
              className="input input-bordered"
              {...register("author")}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Genre</span>
            </label>
            <select
              defaultValue={book?.genre}
              className="select w-full max-w-xs"
              {...register("genre")}
            >
              <option selected>Self-Help</option>
              <option>Fiction</option>
              <option>Non-Fiction</option>
              <option>Religion</option>
              <option>Novel</option>
              <option>Academic</option>
              <option>Classic</option>
              <option>Sci-Fi</option>
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Publication Date</span>
            </label>
            <input
              type="date"
              defaultValue={book?.publicationDate}
              placeholder="Jhankar Mahbub"
              className="input input-bordered"
              {...register("publicationDate", {
                required: "Publication Date is required",
              })}
            />
            {errors.publicationDate && (
              <p className="form_error">{errors.publicationDate.message}</p>
            )}
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Update Book</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateBook;
