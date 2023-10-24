/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useRemoveFromWishListMutation } from '../redux/features/user/userApi';

import React from 'react';
import toast from 'react-hot-toast';
import { AiOutlineDelete } from 'react-icons/ai';

const RemoveFromWishList = (id) => {
  const [removeFromWishList, { isLoading }] = useRemoveFromWishListMutation();

  const handleRemoveFromWishList = async () => {
    try {
      const response = await removeFromWishList(id);
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
    <div>
      {isLoading ? (
        <div className="flex justify-center">
          <button className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-gray-900"></button>
        </div>
      ) : (
        <button onClick={handleRemoveFromWishList}>
          <AiOutlineDelete size={25} fill="red" />
        </button>
      )}
    </div>
  );
};

export default RemoveFromWishList;
