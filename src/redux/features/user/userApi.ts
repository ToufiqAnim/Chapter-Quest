import { api } from "@/redux/api/apiSlice";

export const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getWishlist: builder.query({
      query: () => "/users/wishlist",
      providesTags: ["Wishlist"],
    }),
    addToWishList: builder.mutation({
      query: ({ id }) => ({
        url: `/users/addToWishList/${id}`,
        method: "POST",
      }),
      invalidatesTags: ["Wishlist"],
    }),
    removeFromWishList: builder.mutation({
      query: ({ id }) => ({
        url: `/users/removeFromWishlist/${id}`,
        method: "POST",
      }),
      invalidatesTags: ["Wishlist"],
    }),
    getReadingList: builder.query({
      query: () => "/users/readingList",
      providesTags: ["ReadingList"],
    }),
    addToReadingList: builder.mutation({
      query: ({ id }) => ({
        url: `/users/addToReadingList/${id}`,
        method: "POST",
      }),
      invalidatesTags: ["Wishlist", "ReadingList"],
    }),
    removeFromReadingList: builder.mutation({
      query: ({ id }) => ({
        url: `/users/removeFromReadingList/${id}`,
        method: "POST",
      }),
      invalidatesTags: ["ReadingList"],
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
} = userApi;
