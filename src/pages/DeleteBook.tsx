import { useDeleteBookMutation } from "@/redux/features/book/bookApi";
import toast from "react-hot-toast";
import { AiOutlineDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

/* interface DeleteBookProps {
  id: string;
} */

const DeleteBook = (id) => {
  const navigate = useNavigate();
  const [deleteBook, { isLoading }] = useDeleteBookMutation();
  const handleDelete = async () => {
    const deleteConfirm = window.confirm(
      "Are You Sure You Want TO Delete This Book?"
    );

    if (deleteConfirm) {
      try {
        const response = await deleteBook(id);
        if ("error" in response) {
          toast.error((response as any).error.data.errorMessages[0].message);
        } else {
          toast.success(response.data.message);
          navigate("/books");
        }
      } catch (error) {
        toast.error("An unexpected error occurred. Please try again later.");
      }
    }
    const response = await deleteBook(id);
    console.log(response);
  };
  return (
    <>
      {isLoading ? (
        <div className="flex justify-center">
          <button className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-gray-900"></button>
        </div>
      ) : (
        <button onClick={handleDelete}>
          <AiOutlineDelete size={30} />
        </button>
      )}
    </>
  );
};

export default DeleteBook;
