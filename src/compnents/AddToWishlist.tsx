import { useAddToWishListMutation } from "@/redux/features/user/userApi";
import toast from "react-hot-toast";

import { AiOutlineHeart, AiOutlineStar } from "react-icons/ai";
import { useParams } from "react-router-dom";

const AddToWishList = (id) => {
  const [addToWishList, { isLoading }] = useAddToWishListMutation();

  const handleAddToWishlist = async () => {
    try {
      const response = await addToWishList(id);
      if (response.error) {
        toast.error(response.error.data.errorMessages[0].message);
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
        <button onClick={handleAddToWishlist}>
          <AiOutlineStar size={25} />
        </button>
      )}
    </>
  );
};

export default AddToWishList;
