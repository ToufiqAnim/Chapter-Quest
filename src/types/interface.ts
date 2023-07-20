export interface IBooks {
  _id: string;
  title: string;
  author: string;
  genre: string;
  image: string;
  publicationDate: string;
  addedBook: string | null;
}

export interface IReview {
  userEmail: string;
  review: string;
}
export interface IWishlist {
  email: string;
  books: IBooks[];
}
