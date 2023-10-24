/* eslint-disable @typescript-eslint/ban-ts-comment */
import toast from 'react-hot-toast';
import { useState } from 'react';
import React from 'react';
import { useAddReviewMutation } from '../redux/features/book/bookApi';
const AddReview = ({ id }) => {
  const [reviewInput, setReviewInput] = useState('');
  const [addReview, { isLoading }] = useAddReviewMutation();
  const onFinishHandler = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const options = {
        id,
        data: {
          review: reviewInput,
        },
      };
      const response = await addReview(options);
      //@ts-ignore
      if (response.error) {
        //@ts-ignore
        toast.error(response.error.data.errorMessages[0].message);
      } else {
        //@ts-ignore
        toast.success(response.data.message);
        setReviewInput('');
      }
    } catch (error) {
      console.error('Unexpected error occurred:', error);
      toast.error('An unexpected error occurred. Please try again later.');
    }
  };
  return (
    <div className="w-full md:w-[50%] border mb-4">
      <form onSubmit={onFinishHandler} className="card w-full">
        <div className="flex flex-col justify-between ">
          {/*   <textarea
            className="shadow-xl  p-2 flex-1"
            placeholder="Write Review"
            required
            {...register('reviewText')}
          /> */}
          <textarea
            className="border-0 outline-none focus:inset-0 p-2 flex-1"
            placeholder="Write Review"
            required
            onChange={(e) => setReviewInput(e.target.value)}
          />
          {isLoading ? (
            <div className="flex justify-center h-[100vh]">
              <button className="animate-spin rounded-full h-24 w-24 border-t-2 border-b-2 border-gray-900"></button>
            </div>
          ) : (
            <button
              type="submit"
              className="mt-3 bg-slate-800 text-white px-6 py-2 rounded"
            >
              Post
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default AddReview;
