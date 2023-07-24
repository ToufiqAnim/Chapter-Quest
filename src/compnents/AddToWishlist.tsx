import { useAddToWishListMutation } from "@/redux/features/user/userApi";
import toast from "react-hot-toast";

import { AiOutlineHeart, AiOutlineStar } from "react-icons/ai";
import { useParams } from "react-router-dom";

const AddToWishList = (id) => {
  const [addToWishList, { isLoading }] = useAddToWishListMutation();

  const handleAddToWishlist = async () => {
    try {
      const response = await addToWishList(id);
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
        <button onClick={handleAddToWishlist}>
          <AiOutlineStar size={30} />
        </button>
      )}
    </>
  );
};

export default AddToWishList;
