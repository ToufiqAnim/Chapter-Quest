/* eslint-disable no-empty-pattern */
import { createSlice } from "@reduxjs/toolkit";

import { IBooks } from "@/types/interface";

interface IBookState {
  total: number;
  books: IBooks;
}
const initialState: IBookState = {
  total: 0,
  books: [],
};

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {},
});
export const {} = bookSlice.actions;
export default bookSlice.reducer;
