export interface IBooks {
  _id: string;
  title: string;
  image: string;
  author: string;
  description: string;
  genre: string;
  publicationDate: string;
  publisher?: string;
  reviews?: object[];
  createdAt?: Date;
}

export interface IReview {
  userEmail: string;
  review: string;
}
export interface IWishlist {
  email: string;
  books: IBooks[];
}

export type SuccessResponse = {
  data: {
    message: string;
  };
};

export type ErrorResponse = {
  error: {
    data: {
      errorMessages: {
        message: string;
      }[];
    };
  };
};
export type MyResponse = SuccessResponse | ErrorResponse;
