import { IReview } from '../types/interface';
import { AiOutlineUser } from 'react-icons/ai';
import React from 'react';
import { useGetReviewQuery } from '../redux/features/book/bookApi';

const Reviews = ({ id }) => {
  const { data } = useGetReviewQuery(id);

  if (data?.data?.length) {
    return (
      <>
        {data?.data.map((review: IReview, index: number) => (
          <div
            key={index}
            className="flex items-center space-x-4 border-b py-2"
          >
            <div className="border rounded p-2">
              <AiOutlineUser size={25} />
            </div>
            <div>
              <div className="text-sm font-semibold">
                {review.reviewer.name}
              </div>
              <h4 className="text-black">{review.review}</h4>
            </div>
          </div>
        ))}
      </>
    );
  } else {
    return (
      <div className="flex items-center">
        <h4>No Reviews yet...</h4>
      </div>
    );
  }
};

export default Reviews;
