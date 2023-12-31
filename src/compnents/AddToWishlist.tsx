/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useAddToWishListMutation } from '../redux/features/user/userApi';
import toast from 'react-hot-toast';
import React from 'react';
import { AiOutlineStar } from 'react-icons/ai';

const AddToWishList = (id) => {
  const [addToWishList, { isLoading }] = useAddToWishListMutation();

  const handleAddToWishlist = async () => {
    try {
      const response = await addToWishList(id);
      if ('error' in response) {
        //@ts-ignore
        toast.error(response.error.data.errorMessages[0].message);
      } else {
        toast.success(response.data.message);
      }
    } catch (error) {
      console.error('Unexpected error occurred:', error);
      toast.error('An unexpected error occurred. Please try again later.');
    }
  };
  return (
    <>
      {isLoading ? (
        <div className="flex justify-center">
          <button className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-gray-900"></button>
        </div>
      ) : (
        <button onClick={handleAddToWishlist}>
          <AiOutlineStar size={30} />
        </button>
      )}
    </>
  );
};

export default AddToWishList;
