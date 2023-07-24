import { useAddToFinishedBooksMutation } from "@/redux/features/user/userApi";
import toast from "react-hot-toast";
import { AiOutlineCheckCircle } from "react-icons/ai";

const AddToFinishedBooks = (id) => {
  const [addToFinishedBooks, { isLoading }] = useAddToFinishedBooksMutation();

  const handleAddToFinishedBooks = async () => {
    try {
      const response = await addToFinishedBooks(id);
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
        <button onClick={handleAddToFinishedBooks}>
          <AiOutlineCheckCircle size={25} />
        </button>
      )}
    </>
  );
};

export default AddToFinishedBooks;
