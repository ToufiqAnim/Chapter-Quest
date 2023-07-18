import { api } from "@/redux/api/apiSlice";
import { IBooks } from "../../../types/interface";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllBooks: builder.query({
      query: () => "books",
      providesTags: ["Books"],
    }),
    getSingleBook: builder.query({
      query: (id: string) => `books/${id}`,
      providesTags: ["Book"],
    }),
    addBook: builder.mutation({
      query: (data) => ({
        url: "/books",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Books"],
    }),
    updateBook: builder.mutation({
      query: ({ data, id }) => ({
        url: `/books/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Books", "Book"],
    }),
    deleteBook: builder.mutation({
      query: (id: string) => ({
        url: `/books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Books"],
    }),
  }),
});

export const {
  useGetAllBooksQuery,
  useGetSingleBookQuery,
  useAddBookMutation,
  useUpdateBookMutation,
  useDeleteBookMutation,
} = bookApi;
