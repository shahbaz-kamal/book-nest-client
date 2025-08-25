import { createSlice } from "@reduxjs/toolkit";
import type { Book, InitialState } from "../../../types/books";

const initialState: InitialState = {
  value: 0,
  heroData: [
    {
      _id: "689b58c705dd8a83c7023f27",
      title: "The Martian",
      author: "Andy Weir",
      genre: "SCIENCE",
      isbn: "978-0553418026",
      description: "An astronaut stranded on Mars fights to survive",
      price: 15.25,
      coverPage: "https://i.ibb.co.com/TBjb2P97/18007564.jpg",
      showInHeroSection: true,
      copies: 10,
      available: true,
    },
    {
      _id: "689b58c705dd8a83c7023f24",
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      genre: "FANTASY",
      isbn: "978-0547928227",
      description:
        "A hobbit named Bilbo Baggins embarks on an epic quest to win a share of a dragon's treasure.",
      price: 14.99,
      coverPage:
        "https://i.ibb.co.com/gZBxwCL4/The-Hobbit-Book-Cover-Minimalistic-Mountains.png",
      showInHeroSection: true,
      copies: 12,
      available: true,
    },
    {
      _id: "689b58c705dd8a83c7023f26",
      title: "Sapiens",
      author: "Yuval Noah Harari",
      genre: "HISTORY",
      isbn: "978-0062316097",
      description: "A brief history of humankind",
      price: 16.5,
      coverPage: "https://i.ibb.co.com/7NW8FM34/23692271.jpg",
      showInHeroSection: true,
      copies: 15,
      available: true,
    },
  ],
  allBookData: [],
};

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    setHeroData: (state, action) => {
      const { allHeroData } = action.payload;
      const filteredData: Book[] | [] = allHeroData.filter(
        (singleData: Book) => singleData.showInHeroSection === true
      );
      if (filteredData.length > 1) {
        state.heroData = filteredData;
      }
    },
    setAllBookData: (state, action) => {
      const { allBookData } = action.payload;
      state.allBookData = allBookData;
    },
  },
});

// export const selectBook = (state: RootState) => state.book.value;

export default bookSlice.reducer;

export const { setHeroData, setAllBookData } = bookSlice.actions;
