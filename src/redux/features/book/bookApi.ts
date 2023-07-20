import { api } from "@/redux/api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllBooks: builder.query({
      query: () => "/books",
      providesTags: ["Books"],
    }),
    getSingleBook: builder.query({
      query: (id: string) => `/books/${id}`,
      providesTags: ["Book"],
    }),
    addBook: builder.mutation({
      query: (data) => ({
        url: "/books/add-book",
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
      invalidatesTags: ["Book"],
    }),
    deleteBook: builder.mutation({
      query: ({ id }) => ({
        url: `/books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Books"],
    }),
    addReview: builder.mutation({
      query: ({ id, data }) => ({
        url: `/books/review/${id}`,
        method: "POST",
        body: {
          review: data.review,
        },
      }),
      invalidatesTags: ["Review"],
    }),
    getReview: builder.query({
      query: (id) => `/books/review/${id}`,
      providesTags: ["Review"],
    }),
    getSearchBooks: builder.query({
      query: (searchTerm) => `/books?searchTerm=${searchTerm}`,
    }),
  }),
});

export const {
  useGetAllBooksQuery,
  useGetSingleBookQuery,
  useAddBookMutation,
  useUpdateBookMutation,
  useDeleteBookMutation,
  useAddReviewMutation,
  useGetReviewQuery,
  useGetSearchBooksQuery,
} = bookApi;
