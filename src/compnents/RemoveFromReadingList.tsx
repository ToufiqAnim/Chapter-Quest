import { useRemoveFromReadingListMutation } from "../redux/features/user/userApi";
import React from "react";
import toast from "react-hot-toast";
import { AiOutlineDelete } from "react-icons/ai";

const RemoveFromReadingList = (id) => {
  const [removeFromReadingList, { isLoading }] =
    useRemoveFromReadingListMutation();

  const handleRemoveFromReadingList = async () => {
    try {
      const response = await removeFromReadingList(id);
      if ("error" in response) {
        toast.error((response as any).error.data.errorMessages[0].message);
      } else {
        toast.success(response.data.message);
      }
    } catch (error) {
      console.error("Unexpected error occurred:", error);
      toast.error("An unexpected error occurred. Please try again later.");
    }
  };

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center">
          <button className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-gray-900"></button>
        </div>
      ) : (
        <button onClick={handleRemoveFromReadingList}>
          <AiOutlineDelete size={25} fill="red" />
        </button>
      )}
    </>
  );
};

export default RemoveFromReadingList;
