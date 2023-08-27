import toast from "react-hot-toast";
import { useAddToReadingListMutation } from "../redux/features/user/userApi";
import React from "react";
import { BiBookReader } from "react-icons/bi";

const AddToReadingList = (id) => {
  const [addToReadingList, { isLoading }] = useAddToReadingListMutation();

  const handleAddToReadingList = async () => {
    try {
      const response = await addToReadingList(id);
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
        <button onClick={handleAddToReadingList}>
          <BiBookReader size={30} />
        </button>
      )}
    </>
  );
};

export default AddToReadingList;
