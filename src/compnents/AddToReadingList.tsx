import toast from "react-hot-toast";
import { useAddToReadingListMutation } from "../redux/features/user/userApi";

import { FaBookReader } from "react-icons/fa";

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
          <span className="loading loading-ring loading-lg"></span>
        </div>
      ) : (
        <button onClick={handleAddToReadingList}>
          <FaBookReader size={25} />
        </button>
      )}
    </>
  );
};

export default AddToReadingList;
