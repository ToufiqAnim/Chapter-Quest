import { IBooks } from "@/types/interface";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface WishlistState {
  total: number;
  books: IBooks[];
}

const initialState: WishlistState = {
  total: 0,
  books: [],
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, actions: PayloadAction<IBooks>) => {
      const exist = state.books.find(
        (book) => book._id === actions.payload._id
      );

      if (!exist) {
        state.books.push(actions.payload);
        state.total += 1;
      }
    },
    removeFromWishlist: (state, actions: PayloadAction<IBooks>) => {
      state.books = state.books.filter(
        (book) => book._id !== actions.payload._id
      );
      state.total -= 1;
    },
    setWishlist: (state, actions: PayloadAction<IBooks[]>) => {
      state.books = actions.payload;
      state.total = actions.payload.length;
    },
  },
});

export const { addToWishlist, removeFromWishlist, setWishlist } =
  wishlistSlice.actions;
export default wishlistSlice.reducer;
