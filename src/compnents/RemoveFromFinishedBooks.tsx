import toast from "react-hot-toast";
import { useRemoveFromFinishedBooksMutation } from "../redux/features/user/userApi";
import React from "react";
import { AiOutlineDelete } from "react-icons/ai";

const RemoveFromFinishedBooks = (id) => {
  const [removeFromFinishedBooks, { isLoading }] =
    useRemoveFromFinishedBooksMutation();

  const handleRemoveFromFinishedBooks = async () => {
    try {
      const response = await removeFromFinishedBooks(id);
      if ("error" in response) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        toast.error((response as any).error.data.errorMessages[0].message);
      } else {
        toast.success(response.data.message);
      }
    } catch (error) {
      // Handle any unexpected errors here (e.g., network issues)
      console.error("Unexpected error occurred:", error);
      toast.error("An unexpected error occurred. Please try again later.");
    }
  };
  return (
    <>
      {isLoading ? (
        <div className="flex justify-center">
          <span className="loading loading-ring loading-lg"></span>
        </div>
      ) : (
        <button onClick={handleRemoveFromFinishedBooks}>
          <AiOutlineDelete size={25} fill="red" />
        </button>
      )}
    </>
  );
};

export default RemoveFromFinishedBooks;
