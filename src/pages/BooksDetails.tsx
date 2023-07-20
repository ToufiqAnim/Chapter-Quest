import {
  useGetAllBooksQuery,
  useGetSingleBookQuery,
} from "@/redux/features/book/bookApi";
import { useAppSelector } from "@/redux/hooks";
import { IBooks } from "@/types/interface";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

function BooksDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { user } = useAppSelector((state) => state.user);
  const { data: book } = useGetSingleBookQuery(id!);
  const userVerified = user?.email && book?.addedBook === user?.email;
  return (
    <>
      <div className="container mx-auto flex justify-evenly items-center mt-10">
        <div className="shadow-2xl p-4">
          <img src={book?.data?.image} alt="" className="w-[350px]" />
        </div>
        <div className="font-lobstar ">
          <h1 className="text-6xl mb-6">{book?.data?.title}</h1>
          <p className="text-2xl mb-6">{book?.data?.author}</p>
          <p className="text-xl mb-6">
            Get Ready to uncover the dark secrets and betrayals in the book.A
            thrilling adventure waits for you
          </p>
          <div className="flex gap-4 items-center">
            <button className="mt-3 bg-slate-800 text-white px-8 py-3 rounded text-xl">
              Start Reading
            </button>
            <div>
              {userVerified && (
                <div className="flex gap-3 items-center text-2xl">
                  <Link to="/update-book">
                    <FiEdit />
                  </Link>
                  <button>
                    <RiDeleteBin6Line />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto p-28 flex justify-around items-center gap-28  bg-[#f1f1ee] shadow-lg mt-[-60px] mb-20">
        <div className="flex flex-col gap-6 font-lobstar w-2/4">
          <h1 className="text-3xl">Description</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
            omnis laborum dicta illo, voluptatibus ipsum officia non rem
            perspiciatis voluptas corporis eaque! Voluptates temporibus
            cupiditate officiis natus quisquam, cumque deleniti?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
            omnis laborum dicta illo, voluptatibus ipsum officia non rem
            perspiciatis voluptas corporis eaque! Voluptates temporibus
            cupiditate officiis natus quisquam, cumque deleniti?
          </p>
          <div className="flex flex-col gap-6">
            <h1 className="text-3xl">Reviews</h1>
            <div>
              <p className="text-2xl mb-4">Rob Lee</p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil
                numquam quasi consequatur repellendus vitae magnam, beatae quas
              </p>
            </div>
          </div>
        </div>
        <div className=" font-lobstar">
          <h1 className="text-3xl mb-4">Editor</h1>
          <p className="text-xl mb-6">Harper Lee (author)</p>
          <h1 className="text-2xl mb-2">Language</h1>
          <p className="mb-4">Standard English (USA & UK)</p>
          <h1 className="text-2xl mb-2">Paperback</h1>
          <p>
            Paper textured, full color, 335 pages,
            <br /> ISBN:9876789
          </p>
        </div>
      </div>
    </>
  );
}

export default BooksDetails;
