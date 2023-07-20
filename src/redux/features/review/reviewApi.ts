import { api } from "@/redux/api/apiSlice";

const reviewApi = api.injectEndpoints({
  endpoints: (builder) => ({
    postReview: builder.mutation({
      query: ({ id, payload }) => ({
        url: `/reviews/${id}`,
        method: "POST",
        data: payload,
      }),
      invalidatesTags: ["Reviews"],
    }),
    getReviews: builder.query({
      query: (id: string) => `reviews/${id}`,
      providesTags: ["Reviews"],
    }),
    updateReview: builder.mutation({
      query: ({ id, email, review }) => ({
        url: `/reviews/${id}/user/${email}`,
        method: "PATCH",
        body: { review },
      }),
      invalidatesTags: ["Reviews"],
    }),
    deleteReview: builder.mutation({
      query: ({ id, email }) => ({
        url: `/reviews/${id}/user/${email}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Reviews"],
    }),
  }),
});

export const {
  usePostReviewMutation,
  useGetReviewsQuery,
  useUpdateReviewMutation,
  useDeleteReviewMutation,
} = reviewApi;
