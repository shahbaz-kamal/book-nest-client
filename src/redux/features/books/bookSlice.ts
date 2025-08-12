import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

const initialState = { value: 0 };

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {},
});

export const selectBook = (state: RootState) => state.book.value

export default bookSlice.reducer