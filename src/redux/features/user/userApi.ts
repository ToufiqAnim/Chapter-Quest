import api from '../../api/apiSlice';

export const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    addToWishList: builder.mutation({
      query: ({ id }) => ({
        url: `/users/addToWishList/${id}`,
        method: 'POST',
      }),
      invalidatesTags: ['Wishlist'],
    }),
    addToReadingList: builder.mutation({
      query: ({ id }) => ({
        url: `/users/addToReadingList/${id}`,
        method: 'POST',
      }),
      invalidatesTags: ['Wishlist', 'ReadingList'],
    }),

    addToFinishedBooks: builder.mutation({
      query: ({ id }) => ({
        url: `/users/addToFinishedBook/${id}`,
        method: 'POST',
      }),
      invalidatesTags: ['ReadingList', 'FinishedBooks'],
    }),
    removeFromWishList: builder.mutation({
      query: ({ id }) => ({
        url: `/users/removeFromWishlist/${id}`,
        method: 'POST',
      }),
      invalidatesTags: ['Wishlist'],
    }),
    removeFromReadingList: builder.mutation({
      query: ({ id }) => ({
        url: `/users/removeFromReadingList/${id}`,
        method: 'POST',
      }),
      invalidatesTags: ['ReadingList'],
    }),
    removeFromFinishedBooks: builder.mutation({
      query: ({ id }) => ({
        url: `/users/removeFromFinishedBooks/${id}`,
        method: 'POST',
      }),
      invalidatesTags: ['FinishedBooks'],
    }),
    getWishlist: builder.query({
      query: () => '/users/wishlist',
      providesTags: ['Wishlist'],
    }),

    getReadingList: builder.query({
      query: () => '/users/readingList',
      providesTags: ['ReadingList'],
    }),

    getFinishedBooks: builder.query({
      query: () => '/users/finishedBooks',
      providesTags: ['FinishedBooks'],
    }),

    //----
  }),
});

export const {
  useAddToWishListMutation,
  useGetWishlistQuery,
  useRemoveFromWishListMutation,
  useAddToReadingListMutation,
  useGetReadingListQuery,
  useRemoveFromReadingListMutation,
  useAddToFinishedBooksMutation,
  useRemoveFromFinishedBooksMutation,
  useGetFinishedBooksQuery,
} = userApi;
